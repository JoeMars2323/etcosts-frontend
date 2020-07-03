import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string;

  expense: boolean = false;
  revenue: boolean = false;
  graph: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openExpense() {
    this.expense = !this.expense;
    this.revenue = false;
    this.graph = false;

  }

  openRevenue() {
    this.expense = false;
    this.revenue = !this.revenue;
    this.graph = false;

  }

  openGraph() {
    this.expense = false;
    this.revenue = false;
    this.graph = !this.graph;

  }

}
