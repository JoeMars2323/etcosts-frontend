import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService  } from 'ngx-bootstrap/datepicker';
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

  expense: Expense;
  item: ItemExpense;
  itemList: ItemExpense[];
  
  // datepicker properties
  locale = 'en';
  locales = listLocales();
  datepickerRange: String[];
  bsConfig: Partial<BsDatepickerConfig>;
  colorTheme = 'theme-dark-blue';

  // event emiter
  @Output() expenseToSend;

  // add and remove items
  expenseName: String;
  dataArray = [];

  // lists
  expenseType: String[];
  currency: String[];
  currencyList: String[];

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
        console.log(this.expenseType)
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
    this.dataArray.push(this.item);
  }

  removeItem(index) {
    this.dataArray.splice(index);
  }

  // submit button
  onSubmit() {
    //this.expense.expenseDate = this.datepickerRange[0];
    //this.expense.paymentDate = this.datepickerRange[1];
    //console.log(this.expense.expenseDate);
    //console.log(this.expense.paymentDate);
    //this.expense.total = '10.00';
    //this.expenseToSend.emit(this.expense);
    alert(this.dataArray[0].itemName);

  }


}
