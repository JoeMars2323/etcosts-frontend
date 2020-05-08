import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';
import { FormControl, FormGroup } from '@angular/forms';

import { RestApiService } from '../../../../shared/rest-api-service/rest-api.service';

import { Expense } from '../../Expense';

@Component({
  selector: 'app-fixed-expense',
  templateUrl: './add-fixed-expense.component.html',
  styleUrls: ['./add-fixed-expense.component.css']
})
export class AddFixedExpenseComponent implements OnInit {
  
  expense: Expense;
  @Output() expenseToSend;

  bsConfig: Partial<BsDatepickerConfig>;

  // lists
  expenseSubtype: String[];
  currency: String[];
  years: String[] = []; 

  bsDate = new Date('01-05-2020');

  bsValue = new Date();


  constructor(private api: RestApiService) { 
    this.expense = new Expense();
    this.expenseToSend = new EventEmitter<Expense>();
    this.bsConfig = new BsDatepickerConfig();
  }

  form = new FormGroup({
    dateDMY: new FormControl(new Date())
  });

  ngOnInit(): void {
    this.getExpenseSubtype();
    this.getCurrency();
    this.getYears();
    this.bsConfiguration()
  }

  bsConfiguration() {
    this.bsConfig.containerClass = 'theme-dark-blue';

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

   // submit button
   onSubmit() {
     this.expense.expenseType = 'Despesa corrente fixa';
     this.expense.stateType = 'Pago';
    // add item array to expense
    this.expenseToSend.emit(this.expense);
    alert('Despesa inserida com sucesso')
  

  }

}
