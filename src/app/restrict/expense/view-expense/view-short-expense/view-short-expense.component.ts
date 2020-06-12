import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';
import * as jsPDF from 'jspdf';

import { RestApiService } from 'src/app/shared/rest-api.service';
import { DateService } from 'src/app/shared/date.service';
import { ExpenseItem } from '../../expense-item-model';
import { Expense } from '../../expense-model';
import { ExpenseType } from '../../expense-type-model';

@Component({
  selector: 'app-view-short-expense',
  templateUrl: './view-short-expense.component.html',
  styleUrls: ['./view-short-expense.component.css']
})
export class ViewShortExpenseComponent implements OnInit {

  // bind form
  @ViewChild('form') signupForm: NgForm;
  @ViewChild('content') content: ElementRef;

  // expense type
  expenseType: ExpenseType;

  // expense declaration
  itemArray: ExpenseItem[];
  expense: Expense;
  item: ExpenseItem;
  id: number;

  //years of reference
  years: string[] = [];

  // variables to calculate total and difference
  beginPayment: number;
  calculateTotal: number;
  calculateDifference: number;

  //flag to open a render item
  hasRender: boolean = false;
  
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private api: RestApiService, public dateService: DateService, private route: ActivatedRoute) { 
        this.expense = new Expense();
        this.item = new ExpenseItem();
  }

  ngOnInit(): void {
    this.loadData();
    this.getShortType();
    //this.itemArray.push(this.item);
    this.years = this.dateService.getYears();
  }

  // load data to update
  loadData() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    )
    this.api.getExpenseById(this.id).subscribe(
      data => {
        this.expense = data;
        this.itemArray = data.itemsArray;
        //load begin payment
        this.beginPayment = this.itemArray[0].itemValue;
        this.managePayment();
        console.log(this.beginPayment);
      }
    );
  }

  // get expense type
  getShortType() {
    this.api.getExpenseType().subscribe(
      data => {
        this.expenseType = data[2];
      }
    )
  }

  checkValue(){
    this.hasRender = !this.hasRender;
  }


  // this method doesnt have the rigth behaviour because the datepicker doesnt clean the input
  public manageDates(): void {
    let expenseDate = new Date(this.expense.expenseDate);
    let paymentDate = new Date(this.expense.expenseLimitDate);
    let varDate = new Date(this.expense.expenseLimitDate);
    let year = varDate.getFullYear();
    let month = varDate.getMonth();
    let day = varDate.getDate();
    let limitDate = new Date(year + 2, month, day);
    if(expenseDate > paymentDate) {
      this.expense.expenseLimitDate = null;
      alert('A data de limite de pagamento tem de ser posterior à data da despesa!!!');
    }
    if(paymentDate > limitDate) {
       this.expense.expenseLimitDate = null;
       alert('Este tipo de despesa não pode ser paga em mais de dois anos!!!'); 
    }
  }

  // this method doesnt have the rigth behaviour
  managePayment() {
    this.calculateTotal = 0;
    this.itemArray[0].itemValue = this.beginPayment; 
     if (this.expense.expenseTotal > this.beginPayment) {
       this.hasRender = true;
     }
    //iterate data array and sum all values
    for (let i = 0; i < this.itemArray.length; i++) {
      this.calculateTotal += this.itemArray[i].itemValue;
    }
    if (this.expense.expenseTotal > this.calculateTotal) {
      this.calculateDifference = this.expense.expenseTotal - this.calculateTotal;
    }
    if (this.expense.expenseTotal < this.calculateTotal) {
      alert('despesa não pode ser menor do que já foi pago');
    }
    if (this.expense.expenseTotal === this.calculateTotal) {
      this.calculateDifference = 0;
      alert('despesa paga');
    }
  }

  generatePDF() {
    let doc = new jsPDF();
    //convert html to pdf
    let specialElementHandlers = {
      '#editor': function(element, renderer) {
        return true;
      }
    };
    let content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });
    doc.save('despesa-fixa.pdf');
  }

}