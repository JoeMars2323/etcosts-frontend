import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { RestApiService } from '../../../../../core/services/rest-api/rest-api.service';

import { Expense } from 'src/app/core/models/Expense';

@Component({
  selector: 'app-update-fixed-expense',
  templateUrl: './update-fixed-expense.component.html',
  styleUrls: ['./update-fixed-expense.component.css']
})
export class UpdateFixedExpenseComponent implements OnInit {

  @Input() updateFixed: Expense;
  @Output() expenseToUpdate;

  bsConfig: Partial<BsDatepickerConfig>;
  
  // load dropdowns
  expenseSubtype: String[];
  currency: String[];
  years: String[] = [];

  constructor(private api: RestApiService) { 
    this.bsConfig = new BsDatepickerConfig();
    this.bsConfig.containerClass = 'theme-dark-blue';
    this.expenseToUpdate = new EventEmitter<Expense>();

  }

  ngOnInit(): void {
    this.getExpenseSubtype();
    this.getCurrency();
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
  

  // submit button
  onSubmit() {
   // add item array to expense
   this.expenseToUpdate.emit(this.updateFixed);
   alert('Despesa alterada com sucesso')
 

 }

}
