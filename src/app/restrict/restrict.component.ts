import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../shared/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-restrict',
  templateUrl: './restrict.component.html',
  styleUrls: ['./restrict.component.css']
})
export class RestrictComponent implements OnInit {

  username: string;

  private activatedSub: Subscription
 
  //flags add expenses
  homeDashboard: boolean = false;
  addExpense: boolean = false;
  addRevenue: boolean = false;
  searchRevenue: boolean = false;
  graphic: boolean = false;
  table: boolean = false;

  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    this.activatedSub = this.auth.userSubject.subscribe(data => {
        this.username = data;
        console.log(this.username);
    });
  }

  // open sidebar menus
  openHomeDashboard() {
    this.homeDashboard = !this.homeDashboard;
    this.addExpense = false;
    this.addRevenue = false;
    this.searchRevenue = false;
    this.graphic = false;
    this.table = false;
  }

  openAddExpenses() {
    this.homeDashboard = false;
    this.addExpense = ! this.addExpense;
    this.addRevenue = false;
    this.searchRevenue = false;
    this.graphic = false;
    this.table = false;
  }

   openAddRevenue() {
    this.homeDashboard = false;
    this.addExpense = false;
    this.addRevenue = !this.addRevenue;
    this.searchRevenue = false;
    this.graphic = false;
    this.table = false;
  }

  openSearchRevenue() {
    this.homeDashboard = false;
    this.addExpense = false;
    this.addRevenue = false;
    this.searchRevenue = !this.searchRevenue;
    this.graphic = false;
    this.table = false;
  }

  openGraphic() {
    this.homeDashboard = false;
    this.addExpense = false;
    this.addRevenue = false;
    this.searchRevenue = false;
    this.graphic = !this.graphic;
    this.table = false;
  }

  openAddTable() {
    this.homeDashboard = false;
    this.addExpense = false;
    this.addRevenue = false;
    this.searchRevenue = false;
    this.graphic = false;
    this.table = !this.table;
  }

  serch() {
    this.homeDashboard = false;
    this.addExpense = false;
    this.addRevenue = false;
    this.searchRevenue = false;
    this.graphic = false;
    this.table = false;

  }

  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }









}