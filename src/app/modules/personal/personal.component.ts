import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import { RestApiService } from '../../core/services/rest-api.service';
import { ExpenseType } from '../../core/models/ExpenseType';
import { Currency } from '../../core/models/Currency';
import { ItemType } from '../../core/models/ItemType';
import { ItemExpense } from '../../core/models/ItemExpense';
import { Item } from 'src/app/core/models/Item';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  // add and remove items
  item = new ItemExpense();
  dataArray = [];

  // lists
  expenseType: String[];
  currency: String[];
  currencyList: String[];

  // datepickers
  expenseDate: NgbDateStruct;
  paymentDate: NgbDateStruct;

  // get username
  user: String = 'tv';

  // flags
  expenses: boolean = false;
  search: boolean = false;
  revenue: boolean = false;
  dashbord: boolean = true;
  content: boolean = false;
  content1: boolean = false;
  content2: boolean = false;
  utilities: boolean = false;
  toggle: boolean = false;
  toggle2: boolean = false;


  constructor(private api: RestApiService) { }

  ngOnInit(): void {
    this.getExpenseType();
    this.getCurrency();
    this.dataArray.push(this.item); 
    
  }

  getExpenseType() {
    this.api.getExpenseType().subscribe(
      data => {
        this.expenseType = data;
      }
    )
  }

  getCurrency() {
    this.api.getCurrency().subscribe(
      data => {
        this.currency = data;

      }
    )
  }

  // side barr
  callAll1() {
    this.content1 = true;
    this.content2 = false;
    this.dashbord = false;
  }
  callAll2() {
    this.content2 = true;
    this.content1 = false;
    this.dashbord = false;
  }

  // dashboard
  callDashboard() {
    this.dashbord = true;
    this.content1 = false;
    this.content2 = false;
  }

  // side bar functions
  newExpenses() {
    this.expenses = ! this.expenses;
  }

  newSearch() {
    this.search = !this.search;
  }

  newRevenue() {
    this.revenue = !this.revenue;
  }

  callUtilies(){
    this.utilities = !this.utilities;
  }

  callexpenses(){
    this.utilities = !this.utilities;
  }
  
  // add items to expense
  addNewItem() {
    this.toggle = !this.toggle;

  }

  addNewItem2() {
    this.toggle2 = !this.toggle2;

  }

  addItem() {
    this.item = new ItemExpense();
    this.dataArray.push(this.item);
  }

  removeItem(index) {
    this.dataArray.splice(index);
  }

  onSubmit() {

  }


  

}
