import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';

import { RestApiService } from 'src/app/shared/rest-api.service';
import { DateService } from 'src/app/shared/date.service';
import { SessionService } from 'src/app/shared/session.service';
import { ExpenseItem } from '../../expense-item-model';
import { Expense } from '../../expense-model';
import { ExpenseType } from '../../expense-type-model';

@Component({
  selector: 'app-update-long-expense',
  templateUrl: './update-long-expense.component.html',
  styleUrls: ['./update-long-expense.component.css']
})
export class UpdateLongExpenseComponent implements OnInit {

  // bind form
  @ViewChild('form') signupForm: NgForm;

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

  // return if data was or not inserted on database
  status: boolean;

  //flag to open a render item
  hasRender: boolean = false;
  
  // file choser
  toggle: boolean = false;

  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private api: RestApiService, public dateService: DateService, private router: Router, 
              private route: ActivatedRoute, private session: SessionService) { 
        this.expense = new Expense();
        this.item = new ExpenseItem();
  }

  ngOnInit(): void {
    this.loadData();
    this.bsConfiguration();
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

  // configure datepicker
  bsConfiguration() {
    this.bsConfig = Object.assign({}, { 
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD-MM-YYYY'
      //locale: 'pt'
    });
    setTimeout(() => {
    });
  }

  // get expense type
  getShortType() {
    this.api.getExpenseType().subscribe(
      data => {
        this.expenseType = data[3];
      }
    )
  }

  // file chooser
  getOpenFileChooser() {
    this.toggle = !this.toggle;
    return '';
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

  // this method doesnt have the rigth behaviour because the datepicker doesnt clean the input
  public manageDates(): void {
    let expenseDate = new Date(this.expense.expenseDate);
    let paymentDate = new Date(this.expense.expenseLimitDate);
    let varDate = new Date(this.expense.expenseLimitDate);
    let year = varDate.getFullYear();
    let month = varDate.getMonth();
    let day = varDate.getDate();
    let limitDate = new Date(year + 2, month, day);
    if(expenseDate < paymentDate) {
      this.expense.expenseLimitDate = null;
      alert('A data de limite de pagamento tem de ser superior à data da despesa!!!');
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
    console.log(this.itemArray);
  }

  onSubmit() {
    // update item array
    this.expense.itemsArray = this.itemArray;
    // update
    this.api.saveExpense(this.expense).subscribe(
      data => {
        this.status = data;
        if(this.status === true) {
          alert(' Dados alterados com sucesso!');
          this.signupForm.reset();
          this.router.navigate(['/restrito'], { relativeTo: this.route })
        } else {
          alert('Não foi possivel fazer a alteração');
        }
      }
    );
  
  }

}