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

  constructor() { }

  ngOnInit(): void {
  }


  // send id expense choosed by id to personal main
  onEdit(ex: Expense) {
    this.expenseId.emit(ex.id);
     
  }


}
