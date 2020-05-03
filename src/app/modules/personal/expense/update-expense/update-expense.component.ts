import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { Expense } from 'src/app/core/models/Expense';

import { WindowsChangeService } from '../../../../core/services/windows-change/windows-change.service';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.css']
})
export class UpdateExpenseComponent implements OnInit {

  @Input() updatedExpense: Expense;

  constructor(public windowService: WindowsChangeService) { }

  ngOnInit(): void {
    this.checkTypeExpense();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.checkTypeExpense();
  }

  checkTypeExpense() {
    if(this.updatedExpense.expenseType === 'Despesa corrente fixa') {
      this.windowService.fixedExpense = true;
      this.windowService.variableExpense = false;
      this.windowService.shortExpense = false;
      this.windowService.longExpense = false;
    }
    if(this.updatedExpense.expenseType === 'Despesa corrente variável') {
      this.windowService.fixedExpense = false;
      this.windowService.variableExpense = true;
      this.windowService.shortExpense = false;
      this.windowService.longExpense = false;
    }
    if(this.updatedExpense.expenseType === 'Despesa não corrente de curta duração') {
      this.windowService.fixedExpense = false;
      this.windowService.variableExpense = false;
      this.windowService.shortExpense = true;
      this.windowService.longExpense = false;
    }
    if(this.updatedExpense.expenseType === 'Despesa não corrente de longa duração') {
      this.windowService.fixedExpense = false;
      this.windowService.variableExpense = false;
      this.windowService.shortExpense = false;
      this.windowService.longExpense = true;
    }
  }

}
