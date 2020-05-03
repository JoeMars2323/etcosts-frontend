import { Component, OnInit, Input } from '@angular/core';

import { Expense } from 'src/app/core/models/Expense';

@Component({
  selector: 'app-update-variable-expense',
  templateUrl: './update-variable-expense.component.html',
  styleUrls: ['./update-variable-expense.component.css']
})
export class UpdateVariableExpenseComponent implements OnInit {

  @Input() updateVariable: Expense;

  constructor() { }

  ngOnInit(): void {
  }

}
