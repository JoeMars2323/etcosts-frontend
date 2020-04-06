import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { User } from '../../../core/models/User';

@Component({
  selector: 'app-personal-main',
  templateUrl: './personal-main.component.html',
  styleUrls: ['./personal-main.component.css']
})
export class PersonalMainComponent implements OnInit {

  user: User;

  // get username
  username: String
  answer: any

  // flags
  expenses: boolean = false;
  search: boolean = false;
  revenue: boolean = false;
  dashbord: boolean = true;
  utilities: boolean = false;
  content: boolean = false;
  newExpense: boolean = false;
  searchAll: boolean = false;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.getUsername();
    this.getExpenses();
  }

  getUsername() {
    this.username = this.auth.getUser().username;
  }

  getExpenses() {
    this.answer = this.auth.getUserInformation();
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
