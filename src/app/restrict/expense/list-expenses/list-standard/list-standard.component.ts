import { Component, OnInit, Input } from '@angular/core';

import { Expense } from '../../Expense';

@Component({
  selector: 'app-list-standard',
  templateUrl: './list-standard.component.html',
  styleUrls: ['./list-standard.component.css']
})
export class ListStandardComponent implements OnInit {

  @Input() expenseList: Expense[];

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(item: any) {
    
  }

  onView(item: any) {
    
  }

}
