import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-expense',
  templateUrl: './add-short-expense.component.html',
  styleUrls: ['./add-short-expense.component.css']
})
export class AddShortExpenseComponent implements OnInit {

  hasItem: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addItems(){
    this.hasItem = !this.hasItem;
  }

}
