import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';

import { RestApiService } from 'src/app/shared/rest-api-service/rest-api.service';
import { ExpenseItem } from '../../ExpenseItem';
import { Expense } from '../../Expense';
import { MonthsService } from 'src/app/shared/months-service/months.service';

@Component({
  selector: 'app-short-expense',
  templateUrl: './add-short-expense.component.html',
  styleUrls: ['./add-short-expense.component.css']
})
export class AddShortExpenseComponent implements OnInit {
  
  // bind form
  @ViewChild('form') signupForm: NgForm;
  
  // return if data was or not inserted on database
  status: boolean;

  // expense declaration
  dataArray = [];
  expense: Expense;
  item: ExpenseItem;

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
  currencies: String[];

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
    this.getSubtypes();
    this.getCurrencies();
    //this.getYears();
    
  }

  // load dropdowns
  getSubtypes() {
    this.api.getExpenseSubtype(4).subscribe(
      data => {
        this.subtypes = data;
      }
    )
  }

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
