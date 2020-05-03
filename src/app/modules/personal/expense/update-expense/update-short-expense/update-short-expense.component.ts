import { Component, OnInit, Input } from '@angular/core';

import { Expense } from 'src/app/core/models/Expense';

@Component({
  selector: 'app-update-short-expense',
  templateUrl: './update-short-expense.component.html',
  styleUrls: ['./update-short-expense.component.css']
})
export class UpdateShortExpenseComponent implements OnInit {

  @Input() updateShort: Expense;

  constructor() { }

  ngOnInit(): void {
  }

}
