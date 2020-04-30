import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';

import { Expense } from '../../../../core/models/Expense';
import { RestApiService } from '../../../../core/services/rest-api/rest-api.service';

@Component({
  selector: 'app-fixed-expense',
  templateUrl: './fixed-expense.component.html',
  styleUrls: ['./fixed-expense.component.css']
})
export class FixedExpenseComponent implements OnInit {
  
  expense: Expense;

  // lists
  expenseSubtype: String[];
  currency: String[];
  years: String[] = [];

  // event emiter
  @Output() expenseToSend;

  // datepicker properties
  locale = 'en';
  locales = listLocales();
  bsConfig: Partial<BsDatepickerConfig>;
  colorTheme = 'theme-dark-blue';

  constructor(private api: RestApiService, private localeService: BsLocaleService) { 
    this.expense = new Expense();
    this.expenseToSend = new EventEmitter<Expense>();
  }

  ngOnInit(): void {
    this.getExpenseSubtype();
    this.getCurrency();
    this.applyTheme();
    this.applyLocale();
    this.getYears();
  }

  // load dropdowns
  getExpenseSubtype() {
    this.api.getExpenseSubtype(1).subscribe(
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

  getYears() {
    let current = (new Date()).getFullYear();
    this.years.push((current - 4).toString());
    this.years.push((current - 3).toString());
    this.years.push((current - 2).toString());
    this.years.push((current - 1).toString());
    this.years.push((current).toString());
    this.years.push((current + 1).toString());

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

   // submit button
   onSubmit() {
     this.expense.expenseType = 'Despesa corrente fixa';
     this.expense.stateType = 'Pago';
    // add item array to expense
    this.expenseToSend.emit(this.expense);
    alert('Despesa inserida com sucesso')
  

  }

}
