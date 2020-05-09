import { Component, OnInit, Input } from '@angular/core';
import { Expense } from '../../Expense';

@Component({
  selector: 'app-list-by-state',
  templateUrl: './list-by-state.component.html',
  styleUrls: ['./list-by-state.component.css']
})
export class ListByStateComponent implements OnInit {

  @Input() expenseList: Expense[];

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(item: any) {

  }

  onView(item: any) {
    
  }

}
