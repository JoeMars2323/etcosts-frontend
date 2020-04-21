import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';

import { RestApiService } from '../../../core/services/rest-api/rest-api.service';
import { ItemExpense } from '../../../core/models/ItemExpense';
import { Expense } from 'src/app/core/models/Expense';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  // expense declaration
  expense: Expense;
  dataArray = [];
  item: ItemExpense;

  // event emiter
  @Output() expenseToSend;

  // datepicker properties
  locale = 'en';
  locales = listLocales();
  bsConfig: Partial<BsDatepickerConfig>;
  colorTheme = 'theme-dark-blue';

  // lists
  expenseType: String[];
  currency: String[];

  // calculate total
  total: number = 0;

  constructor(private api: RestApiService, private localeService: BsLocaleService) {
    this.expense = new Expense();
    this.item = new ItemExpense();
    this.expenseToSend = new EventEmitter<Expense>();

  }
  ngOnInit(): void {
    this.getExpenseType();
    this.getCurrency();
    this.dataArray.push(this.item);
    this.applyTheme();
    this.applyLocale();
  }

  // change datepicker properties
  applyLocale() {
    this.localeService.use(this.locale);
  }

  applyTheme() {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
    setTimeout(() => {
    });
  }

  // load dropdowns
  getExpenseType() {
    this.api.getExpenseType().subscribe(
      data => {
        this.expenseType = data;
      }
    )
  }

  getCurrency() {
    this.api.getCurrency().subscribe(
      data => {
        this.currency = data;

      }
    )
  }

  // add and remove items
  addItem() {
    this.item = new ItemExpense();
    this.valueSum();
    this.dataArray.push(this.item);
  }

  removeItem(index) {
    this.dataArray.splice(index);
    this.valueSum();
  }

  valueSum() {
    //return this.total = this.dataArray.map(obj => obj.value).reduce((a, b) => a + b);
    this.total = 0;
    for (let i = 0; i < this.dataArray.length; i++) {
      if(this.dataArray[i].itemValue !== undefined) {
        this.total += this.dataArray[i].itemValue;
        console.log(typeof this.total === "number");
      }
       
     }
    return this.total;

  }

  // submit button
  onSubmit() {
    // add item array to expense
    this.expense.itemArray = this.dataArray;
    this.expenseToSend.emit(this.expense);
    this.total = 0

  }


}
