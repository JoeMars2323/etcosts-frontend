import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';

import { RestApiService } from 'src/app/shared/rest-api-service/rest-api.service';
import { ExpenseItem } from '../../ExpenseItem';
import { Expense } from '../../Expense';
import { MonthsService } from 'src/app/shared/months-service/months.service';
import { ExpenseType } from '../../ExpenseType';
import { Currency } from 'src/app/shared/Currency';

@Component({
  selector: 'app-long-expense',
  templateUrl: './add-long-expense.component.html',
  styleUrls: ['./add-long-expense.component.css']
})
export class AddLongExpenseComponent implements OnInit {

  // bind form
  @ViewChild('form') signupForm: NgForm;
  
  // return if data was or not inserted on database
  status: boolean;

  // expense declaration
  dataArray = [];
  expense: Expense;
  item: ExpenseItem;

  // expense type
  expenseType: ExpenseType;

  // to change . variables to calculate the total
  costExpense: number;
  totalExpense: number;
  difference: number;
  renderArray: number[] = [];
  renderAdded = false;

  // datepicker properties
  colorTheme = 'theme-dark-blue';
  bsConfig: Partial<BsDatepickerConfig>;

  // lists
  subtypes: String[];
 
  // currency
  currencies: Currency[];

  //flags
  isChecked: boolean = false;
  hasRender: boolean = false;

  // file choser
  toggle: boolean = false;

  constructor(private api: RestApiService, public monthsService: MonthsService) { 
    this.expense = new Expense();
  }

  ngOnInit(): void {
    this.dataArray.push(this.item);
    this.bsConfiguration();
    this.getLongType();
    this.getCurrencies();
    //this.getYears();
    
  }

  // get expense type
  getLongType() {
    this.api.getExpenseType().subscribe(
      data => {
        this.expenseType = data[2];
      }
    )
  }

  // load dropdowns
  getCurrencies() {
    this.api.getCurrency().subscribe(
      data => {
        this.currencies = data;
      }
    )
  }

  // file chooser
  getOpenFileChooser() {
    this.toggle = !this.toggle;
    return '';
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

  checkValue(){
    this.hasRender = !this.hasRender;
 }

  // add and remove items
  addItem() {
    this.item = new ExpenseItem();
    this.dataArray.push(this.item);
  }

  removeItem(index) {
    this.dataArray.splice(index);
  }

  

  
  managePayment() {
    this.totalExpense = 0;
    for(let i = 0; i < this.renderArray.length; i++) {
      this.totalExpense += this.renderArray[i]
      if(this.renderArray[i] == null) {
        alert('O valor da prestação não pode ser vazio');
        break;
      }
    }
    if (this.costExpense > this.totalExpense) {
      this.hasRender = true;
    }
    console.log(this.renderArray);
  }

  // check if payment date is grater then limit date
  compareDates() {
    let expenseDate = new Date(this.expense.expenseDate);
    let paymentDate = new Date(this.expense.paymentDate);
    alert('test');
    if(expenseDate.getTime > paymentDate.getTime) {
      alert('A data de limite de pagamento tem de ser posterior à data da despesa!!!');
      this.expense.paymentDate = null;

    }
  }

  onSubmit() {
    
  }


}
