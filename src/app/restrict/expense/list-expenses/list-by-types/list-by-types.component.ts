import { Component, OnInit, Input } from '@angular/core';
import { Expense } from '../../expense-model';

@Component({
  selector: 'app-list-by-types',
  templateUrl: './list-by-types.component.html',
  styleUrls: ['./list-by-types.component.css']
})
export class ListByTypesComponent implements OnInit {

  @Input() expenseList: Expense[];

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(item: any) {
    
  }

  onView(item: any) {
    
  }

}
