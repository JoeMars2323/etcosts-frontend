import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import * as jsPDF from 'jspdf';

import { RestApiService } from 'src/app/shared/rest-api.service';
import { DateService } from 'src/app/shared/date.service';
import { ExpenseItem } from '../../expense-item-model';
import { Expense } from '../../expense-model';
import { ExpenseType } from '../../expense-type-model';

@Component({
  selector: 'app-view-long-expense',
  templateUrl: './view-long-expense.component.html',
  styleUrls: ['./view-long-expense.component.css']
})
export class ViewLongExpenseComponent implements OnInit {

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


  constructor(private api: RestApiService, public dateService: DateService, private router: Router, 
              private route: ActivatedRoute) { 
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
        this.expenseType = data[3];
      }
    )
  }

  checkValue(){
    this.hasRender = !this.hasRender;
  }

  // add and remove items
  addItem() {
    this.item = new ExpenseItem();
    this.itemArray.push(this.item);
  }

  removeItem(index) {
    this.itemArray.splice(index);
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
    console.log(this.itemArray);
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