import { Component, OnInit } from '@angular/core';

import { ItemExpense } from '../../../../../core/models/ItemExpense';

@Component({
  selector: 'app-long-expense',
  templateUrl: './add-long-expense.component.html',
  styleUrls: ['./add-long-expense.component.css']
})
export class AddLongExpenseComponent implements OnInit {

  isChecked: boolean = false;
  hasRender: boolean = true;

  dataArray = [];
  item: ItemExpense;

  constructor() { }

  ngOnInit(): void {
    this.dataArray.push(this.item);
    
  }

  checkValue(){
    this.hasRender = !this.hasRender;
 }

 // add and remove items
 addItem() {
  this.item = new ItemExpense();
  this.dataArray.push(this.item);
}

removeItem(index) {
  this.dataArray.splice(index);
}


}
