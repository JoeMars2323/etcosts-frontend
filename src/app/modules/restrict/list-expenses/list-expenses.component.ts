import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Expense } from '../../../core/models/Expense';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {
    

  @Input() expense: Expense; 
  @Output() expenseId = new EventEmitter<number>();

  // flags
  overall: boolean = true;
  types: boolean = false;
  years: boolean = false;
  states: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  // send id expense choosed by id to personal main
  onEdit(expense: Expense) {
    this.expenseId.emit(expense.expenseId);
     
  }

  // show and hide screens
  getOverall() {
    this.overall = true;
    this.types = false;
    this.years = false;
    this.states = false;

  }

  getTypes() {
    this.overall = false;
    this.types = true;
    this.years = false;
    this.states = false;

  }

  getYears() {
    this.overall = false;
    this.types = false;
    this.years = true;
    this.states = false;

  }

  getStates() {
    this.overall = false;
    this.types = false;
    this.years = false;
    this.states = true;

  }


}
