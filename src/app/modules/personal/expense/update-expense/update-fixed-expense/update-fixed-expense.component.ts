import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { Expense } from 'src/app/core/models/Expense';

@Component({
  selector: 'app-update-fixed-expense',
  templateUrl: './update-fixed-expense.component.html',
  styleUrls: ['./update-fixed-expense.component.css']
})
export class UpdateFixedExpenseComponent implements OnInit {

  @Input() updateFixed: Expense;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.updateFixed);

  }

}
