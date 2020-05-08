import { Component, OnInit, Input } from '@angular/core';

import { Expense } from '../../Expense';

@Component({
  selector: 'app-update-long-expense',
  templateUrl: './update-long-expense.component.html',
  styleUrls: ['./update-long-expense.component.css']
})
export class UpdateLongExpenseComponent implements OnInit {

  @Input() updateLong: Expense;

  constructor() { }

  ngOnInit(): void {
  }

}
