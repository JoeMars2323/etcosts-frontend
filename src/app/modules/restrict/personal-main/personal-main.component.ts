import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { User } from '../../../core/models/User';
import { Expense } from '../../../core/models/Expense';
import { RestApiService } from '../../../core/services/rest-api/rest-api.service';

@Component({
  selector: 'app-personal-main',
  templateUrl: './personal-main.component.html',
  styleUrls: ['./personal-main.component.css']
})
export class PersonalMainComponent implements OnInit {

  user: User;
  expenseList: Expense[];
  expense: Expense = null;
  expenseUpdate: Expense = null;

  // flags add expenses
  expenses: boolean = false;
  fixedExpense: boolean = false;
  variableExpense: boolean = false;
  shortExpense: boolean = false;
  longExpense: boolean = false;

  // flags search expenses
  search: boolean = false;
  searchAll: boolean = false;

  revenue: boolean = false;
  dashbord: boolean = true;
  utilities: boolean = false;
  content: boolean = false;
  newExpense: boolean = false;
  
  update: boolean = false;

  constructor(private api: RestApiService, private auth: AuthenticationService) { 
    this.expense = new Expense();
    this.expenseUpdate = new Expense();
  }

  ngOnInit(): void {
    this.getUsername();
    this.getExpenseList();
  }

  getUsername() {
    this.user = this.auth.getUser();
  }

  public getExpenseList() {
    this.user = this.auth.getUser();
    this.api.getExpensesByUser(this.user).subscribe(
      data => {
        this.expenseList = data;
        // assign for now expensedate withe the first date in item array
        for(let i = 0; i < this.expenseList.length; i++) {
          if(this.expenseList[i].hasItems) {
            this.expenseList[i].expenseDate = this.expenseList[i].itemArray[0].expenseDate;
            // do the comparisson between dates later
            for(let j = 0; j < this.expenseList[i].itemArray.length; j++) {
            }
          }
        }
      });
  }

  // get expense id by list expenses
  getExpensId(id: number) {
    this.api.getExpenseInf(id).subscribe(
      data => {
        this.expenseUpdate = data;
      }
    )
    this.callUpdate();
  }

  // receive expense from add-expendse component and send to back-end
  expenseToReceive($event) {
    this.expense = $event;
    this.expense.username = this.user.username;
    this.api.saveExpense(this.expense).subscribe(x =>{
      if(x) {
        this.callDashboard();
      } else {
        alert('erro na inserção');
        this.addVariableExpense();
      }
      
     });
  }
  

  // open and close components - add expenses
  // delete this one
  addNewExpense() {
    this.newExpense = true;
    this.fixedExpense = false;
    this.variableExpense = false;
    this.shortExpense = false;
    this.longExpense = false;
    this.searchAll = false;
    this.dashbord = false;
  }

  addFixedExpense() {
    this.newExpense = false;
    this.fixedExpense = true;
    this.variableExpense = false;
    this.shortExpense = false;
    this.longExpense = false;
    this.searchAll = false;
    this.dashbord = false;
  }

  addVariableExpense() {
    this.newExpense = false;
    this.fixedExpense = false;
    this.variableExpense = true;
    this.shortExpense = false;
    this.longExpense = false;
    this.searchAll = false;
    this.dashbord = false;
  }

  addShortExpense() {
    this.newExpense = false;
    this.fixedExpense = false;
    this.variableExpense = false;
    this.shortExpense = true;
    this.longExpense = false;
    this.searchAll = false;
    this.dashbord = false;
  }

  addLongExpense() {
    this.newExpense = false;
    this.fixedExpense = false;
    this.variableExpense = false;
    this.shortExpense = false;
    this.longExpense = true;
    this.searchAll = false;
    this.dashbord = false;
  }

  // open and close components - search expenses
  searchAlExpenses() {
    this.newExpense = false;
    this.fixedExpense = false;
    this.variableExpense = false;
    this.shortExpense = false;
    this.longExpense = false;
    this.searchAll = true;
    this.dashbord = false;
  }

  callDashboard() {
    this.newExpense = false;
    this.fixedExpense = false;
    this.variableExpense = false;
    this.shortExpense = false;
    this.longExpense = false;
    this.searchAll = false;
    this.dashbord = true;
  }

  // open sidebar menus
  newExpenses() {
    this.expenses = ! this.expenses;
    this.search = false;
    this.revenue = false;
    this.utilities = false;

  }

  newSearch() {
    this.search = !this.search;
    this.expenses = false;
    this.revenue = false;
    this.utilities = false;
  }

  newRevenue() {
    this.revenue = !this.revenue;
    this.expenses = false;
    this.search = false;
    this.utilities = false;
  }

  callUtilies(){
    this.utilities = !this.utilities;
    this.expenses = false;
    this.search = false;
    this.revenue = false;
  }

  callexpenses(){
    this.utilities = !this.utilities;
    
  }

  callUpdate(){
    this.update = true;
    this.searchAll = false;
  }


}
