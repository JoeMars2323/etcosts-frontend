import { Component, OnInit, Input } from '@angular/core';
import { Expense } from '../../Expense';

@Component({
  selector: 'app-list-by-year',
  templateUrl: './list-by-year.component.html',
  styleUrls: ['./list-by-year.component.css']
})
export class ListByYearComponent implements OnInit {

  @Input() expenseList: Expense[];

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(item: any) {
    
  }

  onView(item: any) {
    
  }

}
