import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../shared/rest-api-service/rest-api.service';
import { WindowsChangeService } from '../shared/windows-change-service/windows-change.service';
import { AuthenticationService } from '../shared/authentication-service/authentication.service';

import { User } from '../shared/User';
import { Expense } from '../restrict/expense/Expense';

@Component({
  selector: 'app-restrict',
  templateUrl: './restrict.component.html',
  styleUrls: ['./restrict.component.css']
})
export class RestrictComponent implements OnInit {

  user: User;
  expenseList: Expense[];
  expense: Expense = null;
  updateExpense: Expense = null;

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
  view: boolean = false;

  constructor(private api: RestApiService, private auth: AuthenticationService, public windowsChangeService: WindowsChangeService) { 
    this.expense = new Expense();
    this.updateExpense = new Expense();
  }

  ngOnInit(): void {
    this.getUsername();
  }

  getUsername() {
    this.user = this.auth.getUser();
  }

  // get expense id by list expenses
  getExpensId(id: number) {
    this.api.getExpenseInf(id).subscribe(
      data => {
        this.updateExpense = data;
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
    this.windowsChangeService.closeUpdates();
  }

  addFixedExpense() {
    this.newExpense = false;
    this.fixedExpense = true;
    this.variableExpense = false;
    this.shortExpense = false;
    this.longExpense = false;
    this.searchAll = false;
    this.dashbord = false;
    this.windowsChangeService.closeUpdates();
  }

  addVariableExpense() {
    this.newExpense = false;
    this.fixedExpense = false;
    this.variableExpense = true;
    this.shortExpense = false;
    this.longExpense = false;
    this.searchAll = false;
    this.dashbord = false;
    this.windowsChangeService.closeUpdates();
  }

  addShortExpense() {
    this.newExpense = false;
    this.fixedExpense = false;
    this.variableExpense = false;
    this.shortExpense = true;
    this.longExpense = false;
    this.searchAll = false;
    this.dashbord = false;
    this.windowsChangeService.closeUpdates();
  }

  addLongExpense() {
    this.newExpense = false;
    this.fixedExpense = false;
    this.variableExpense = false;
    this.shortExpense = false;
    this.longExpense = true;
    this.searchAll = false;
    this.dashbord = false;
    this.windowsChangeService.closeUpdates();
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
    this.windowsChangeService.closeUpdates();
  }

  callDashboard() {
    this.newExpense = false;
    this.fixedExpense = false;
    this.variableExpense = false;
    this.shortExpense = false;
    this.longExpense = false;
    this.searchAll = false;
    this.dashbord = true;
    this.windowsChangeService.closeUpdates();
  }

  // open sidebar menus
  newExpenses() {
    this.expenses = ! this.expenses;
    this.search = false;
    this.revenue = false;
    this.utilities = false;
    this.windowsChangeService.closeUpdates();

  }

  newSearch() {
    this.search = !this.search;
    this.expenses = false;
    this.revenue = false;
    this.utilities = false;
    this.windowsChangeService.closeUpdates();
  }

  newRevenue() {
    this.revenue = !this.revenue;
    this.expenses = false;
    this.search = false;
    this.utilities = false;
    this.windowsChangeService.closeUpdates();
  }

  callUtilies(){
    this.utilities = !this.utilities;
    this.expenses = false;
    this.search = false;
    this.revenue = false;
    this.windowsChangeService.closeUpdates();
  }

  callexpenses(){
    this.utilities = !this.utilities;
    this.windowsChangeService.closeUpdates();
    
  }

  callUpdate(){
    this.update = true;
    this.view = false;
    this.searchAll = false;
    this.windowsChangeService.closeUpdates();
  }

  callView(){
    this.update = false;
    this.view = true;
    this.searchAll = false;
    this.windowsChangeService.closeUpdates();
  }

}
