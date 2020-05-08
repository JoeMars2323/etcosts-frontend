import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../shared/authentication-service/authentication.service';

import { User } from '../shared/User';

@Component({
  selector: 'app-restrict',
  templateUrl: './restrict.component.html',
  styleUrls: ['./restrict.component.css']
})
export class RestrictComponent implements OnInit {

  user: User;
 
  //flags add expenses
  homeDashboard: boolean = false;
  addExpense: boolean = false;
  searchExpense: boolean = false;
  addRevenue: boolean = false;
  searchRevenue: boolean = false;
  graphic: boolean = false;
  table: boolean = false;

  constructor(private auth: AuthenticationService) {

  }

  ngOnInit(): void {
    this.getUsername();
  }

  // open sidebar menus
  openHomeDashboard() {
    this.homeDashboard = !this.homeDashboard;
    this.addExpense = false;
    this.searchExpense = false;
    this.addRevenue = false;
    this.searchRevenue = false;
    this.graphic = false;
    this.table = false;
    
  }

  openAddExpenses() {
    this.homeDashboard = false;
    this.addExpense = ! this.addExpense;
    this.searchExpense = false;
    this.addRevenue = false;
    this.searchRevenue = false;
    this.graphic = false;
    this.table = false;
  }

  openSearchExpenses() {
    this.homeDashboard = false;
    this.addExpense = false;
    this.searchExpense = !this.searchExpense;
    this.addRevenue = false;
    this.searchRevenue = false;
    this.graphic = false;
    this.table = false;
  }

   openAddRevenue() {
    this.homeDashboard = false;
    this.addExpense = false;
    this.searchExpense = false;
    this.addRevenue = !this.addRevenue;
    this.searchRevenue = false;
    this.graphic = false;
    this.table = false;
  }

  openSearchRevenue() {
    this.homeDashboard = false;
    this.addExpense = false;
    this.searchExpense = false;
    this.addRevenue = false;
    this.searchRevenue = !this.searchRevenue;
    this.graphic = false;
    this.table = false;
  }

  openGraphic() {
    this.homeDashboard = false;
    this.addExpense = false;
    this.searchExpense = false;
    this.addRevenue = false;
    this.searchRevenue = false;
    this.graphic = !this.graphic;
    this.table = false;
  }

  openAddTable() {
    this.homeDashboard = false;
    this.addExpense = false;
    this.searchExpense = false;
    this.addRevenue = false;
    this.searchRevenue = false;
    this.graphic = false;
    this.table = !this.table;
  }

  // capture username to identify the session
  getUsername() {
    this.user = this.auth.getUser();
  }

}
