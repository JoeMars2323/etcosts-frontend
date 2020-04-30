import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';

import { RestApiService } from '../../../../core/services/rest-api/rest-api.service';
import { ItemExpense } from '../../../../core/models/ItemExpense';
import { Expense } from 'src/app/core/models/Expense';

@Component({
  selector: 'app-variable-expense',
  templateUrl: './variable-expense.component.html',
  styleUrls: ['./variable-expense.component.css']
})
export class VariableExpenseComponent implements OnInit {

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
  expenseSubtype: String[];
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

  // load dropdowns
  getExpenseType() {
    this.api.getExpenseSubtype(2).subscribe(
      data => {
        this.expenseSubtype = data;
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

  // change datepicker properties
  applyLocale() {
    this.localeService.use(this.locale);
  }

  applyTheme() {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
    setTimeout(() => {
    });
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
      if(this.dataArray[i].valueNumber !== undefined) {
        this.total += this.dataArray[i].valueNumber;
        //console.log(typeof this.total === "number");
      }
       
     }
    return this.total;

  }

  // submit button
  onSubmit() {
    // add item array to expense
    this.expense.expenseType = "Despesa corrente variável";
    this.expense.hasItems = true;
    this.expense.itemArray = this.dataArray;
    for(let i = 0; i < this.expense.itemArray.length; i++) {
      this.expense.itemArray[i].stateType = "Pago";
      this.expense.itemArray[i].value = this.expense.itemArray[i].valueNumber.toString();

    }
    console.log(this.expense);
    this.expenseToSend.emit(this.expense);
    this.total = 0

  }

}
