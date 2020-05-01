import { Component, OnInit, Input } from '@angular/core';
import { Expense } from 'src/app/core/models/Expense';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.css']
})
export class UpdateExpenseComponent implements OnInit {

  @Input() expenseUpdated: Expense;

  fixedExpense: boolean = false;
  variableExpense: boolean = false;
  shortExpense: boolean = false;
  longExpense: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.checkTypeExpense();

  }

  checkTypeExpense() {
    if(this.expenseUpdated.expenseType === 'Despesa corrente fixa') {
      this.fixedExpense = true;
      this.variableExpense = false;
      this.shortExpense = false;
      this.longExpense = false;
    }
    if(this.expenseUpdated.expenseType === 'Despesa corrente variável') {
      this.fixedExpense = false;
      this.variableExpense = true;
      this.shortExpense = false;
      this.longExpense = false;
    }
    if(this.expenseUpdated.expenseType === 'Despesa não corrente de curta duração') {
      this.fixedExpense = false;
      this.variableExpense = false;
      this.shortExpense = true;
      this.longExpense = false;
    }
    if(this.expenseUpdated.expenseType === 'Despesa não corrente de longa duração') {
      this.fixedExpense = false;
      this.variableExpense = false;
      this.shortExpense = false;
      this.longExpense = true;
    }
  }

}
