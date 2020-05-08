import { Component, OnInit } from '@angular/core';

import { ExpenseItem } from '../../ExpenseItem';

@Component({
  selector: 'app-long-expense',
  templateUrl: './add-long-expense.component.html',
  styleUrls: ['./add-long-expense.component.css']
})
export class AddLongExpenseComponent implements OnInit {

  isChecked: boolean = false;
  hasRender: boolean = true;

  dataArray = [];
  item: ExpenseItem;

  constructor() { }

  ngOnInit(): void {
    this.dataArray.push(this.item);
    
  }

  checkValue(){
    this.hasRender = !this.hasRender;
 }

 // add and remove items
 addItem() {
  this.item = new ExpenseItem();
  this.dataArray.push(this.item);
}

removeItem(index) {
  this.dataArray.splice(index);
}


}
