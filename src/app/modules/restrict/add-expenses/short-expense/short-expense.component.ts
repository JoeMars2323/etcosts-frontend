import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-expense',
  templateUrl: './short-expense.component.html',
  styleUrls: ['./short-expense.component.css']
})
export class ShortExpenseComponent implements OnInit {

  hasItem: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addItems(){
    this.hasItem = !this.hasItem;
  }

}
