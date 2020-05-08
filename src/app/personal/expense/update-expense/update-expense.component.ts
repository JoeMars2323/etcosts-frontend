import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';

import { Expense } from '../Expense';

import { WindowsChangeService } from '../../../shered/windows-change-service/windows-change.service';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.css']
})
export class UpdateExpenseComponent implements OnInit {

  @Input() updatedExpense: Expense;
  @Output() expenseToUpdate;

  constructor(public windowService: WindowsChangeService) { 
    this.expenseToUpdate = new EventEmitter<Expense>();
  }

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

  // receive from several expenses types and emit to personal component
  expenseUpdated($event) {
    this.expenseToUpdate.emit($event);
  }

}
