import { Component, OnInit, Input } from '@angular/core';

import { Expense } from '../../../core/models/Expense';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {

  @Input() expense: Expense; 

  constructor() { }

  ngOnInit(): void {
  }

}
