import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { Expense } from 'src/app/core/models/Expense';

@Component({
  selector: 'app-view-fixed-expense',
  templateUrl: './view-fixed-expense.component.html',
  styleUrls: ['./view-fixed-expense.component.css']
})
export class ViewFixedExpenseComponent implements OnInit {

  @Input() updateFixed: Expense;
  @Output() expenseToUpdate;

  bsConfig: Partial<BsDatepickerConfig>;

  // load dropdowns
  expenseSubtype: String[];
  currency: String[];
  years: String[] = [];

  constructor() { 
    this.bsConfig = new BsDatepickerConfig();
    this.bsConfig.containerClass = 'theme-dark-blue';
    this.expenseToUpdate = new EventEmitter<Expense>();

  }

  ngOnInit(): void {
  }

}
