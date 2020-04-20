import { Component, OnInit, Input } from '@angular/core';

import { Expense } from '../../../core/models/Expense';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {
  
  table: boolean = true;
  view: boolean = false;
  update: boolean = false;
  delete: boolean = false;

  

  @Input() expense: Expense; 

  constructor() { }

  ngOnInit(): void {
  }

  onTable() {
    this.update = false;
    this.table = true;
    this.view = false;
    this.delete = false;   
  }

  onEdit() {
    this.update = true;
    this.table = false;
    this.view = false;
    this.delete = false;   
  }

  onView() {
    this.update = false;
      this.table = false;
      this.view = true;
      this.delete = false; 
  }

  onDelete() {
    this.update = false;
      this.table = false;
      this.view = false;
      this.delete = true; 
  }

}
