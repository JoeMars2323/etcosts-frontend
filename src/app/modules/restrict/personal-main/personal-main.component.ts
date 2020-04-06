import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-main',
  templateUrl: './personal-main.component.html',
  styleUrls: ['./personal-main.component.css']
})
export class PersonalMainComponent implements OnInit {

  // flags
  expenses: boolean = false;
  search: boolean = false;
  revenue: boolean = false;
  dashbord: boolean = true;
  utilities: boolean = false;
  content: boolean = false;
  newExpense: boolean = false;
  searchAll: boolean = false;

  constructor() { }

  ngOnInit(): void {
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
