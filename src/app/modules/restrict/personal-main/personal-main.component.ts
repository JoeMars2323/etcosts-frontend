import { Component, OnInit } from '@angular/core';

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

  // flags
  expenses: boolean = false;
  search: boolean = false;
  revenue: boolean = false;
  dashbord: boolean = true;
  utilities: boolean = false;
  content: boolean = false;
  newExpense: boolean = false;
  searchAll: boolean = false;

  constructor(private api: RestApiService, private auth: AuthenticationService) { 
    this.expense = new Expense();
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
      });
  }

  // receive expense from add-expendse component and send to back-end
  expenseToReceive($event) {
    this.expense = $event;
    this.expense.username = this.user.username;
    this.api.putExpense(this.expense).subscribe(() =>{ });
  }

  // open and close components
  addNewExpense() {
    this.newExpense = true;
    this.searchAll = false;
    this.dashbord = false;
  }

  searchAlExpenses() {
    this.searchAll = true;
    this.newExpense = false;
    this.dashbord = false;
  }

  callDashboard() {
    this.dashbord = true;
    this.newExpense = false;
    this.searchAll = false;
  }

  // open sidebar menus
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

}
