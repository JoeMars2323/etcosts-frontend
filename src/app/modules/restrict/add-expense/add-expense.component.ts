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
  // test var
  tot: string;

  // calculate total
  total: number = 0;
  expense: Expense;
  item: ItemExpense;
  
  // datepicker properties
  locale = 'en';
  locales = listLocales();
  bsConfig: Partial<BsDatepickerConfig>;
  colorTheme = 'theme-dark-blue';

  // event emiter
  @Output() expenseToSend;

  // add and remove items
  dataArray = [];
  expenseName: String;
 

  // lists
  expenseType: String[];
  currency: String[];

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
    this.dataArray.push(this.item);
  }

  removeItem(index) {
    this.dataArray.splice(index);
  }

  public dataArraySum() {
    //this.dataArray.map(obj => obj.value).reduce((a, b) => a + b);
    //console.log(this.dataArray.map(obj => obj.value).reduce((a, b) => a + b));
    //this.tot = "10";
    //console.log(this.dataArray.map(obj => obj.value).reduce((a, b) => a + b) === "number");
    //Number.parseInt(this.tot) + Number.parseInt(this.tot);
    //console.log(Number.parseInt(this.tot));
    //return Number.parseInt(this.tot);
    for (let i = 0; i < this.dataArray.length; i++) {
      this.dataArray[i].itemValue
    }

  }

  // submit button
  onSubmit() {
    this.expenseToSend.emit(this.expense);
    this.total = 0

  }


}
