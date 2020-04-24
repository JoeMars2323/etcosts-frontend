import { Component, OnInit, Input } from '@angular/core';
import { Expense } from 'src/app/core/models/Expense';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.css']
})
export class UpdateExpenseComponent implements OnInit {

  @Input() expenseUpdated: Expense;

  constructor() { }

  ngOnInit(): void {

  }

  expenseUpdate() {
    console.log('O resultado é ' + this.expenseUpdated.expenseName);

  }

}
