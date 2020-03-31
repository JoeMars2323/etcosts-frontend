import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import { RestApiService } from '../../core/services/rest-api.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  expenseType: String[];
  coins: String[];
  itemType: String[];

  model: NgbDateStruct;


  user: String = 'tv';

  expenses: boolean = false;
  search: boolean = false;
  revenue: boolean = false;

  dashbord: boolean = true;
  content: boolean = false;
  content1: boolean = false;
  content2: boolean = false;
  utilities: boolean = false;

  constructor(private api: RestApiService) { }

  ngOnInit(): void {
    this.getExpenseType();
    this.getCoins();
    this.getItemType();
  }

  getExpenseType() {
    this.api.getExpenseType().subscribe(
      data => {
        this.expenseType = data;
      }
    )
  }

  getCoins() {
    this.api.getCoins().subscribe(
      data => {
        this.coins = data;

      }
    )
  }


  getItemType() {
    this.api.getItemType().subscribe(
      data => {
        this.itemType = data;

      }
    )
  }


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

}
