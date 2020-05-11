import { Component, OnInit } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { Expense } from '../../Expense';
import { RestApiService } from 'src/app/shared/rest-api-service/rest-api.service';
import { SessionService } from 'src/app/shared/session-service/session.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-variable-expense',
  templateUrl: './update-variable-expense.component.html',
  styleUrls: ['./update-variable-expense.component.css']
})
export class UpdateVariableExpenseComponent implements OnInit {


  // return if data was or not inserted on database
  status: boolean;
  
  expense: Expense;
  id: number;

  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private api: RestApiService, private route: ActivatedRoute, private session: SessionService) { 
    this.bsConfig = new BsDatepickerConfig();
    this.bsConfig.containerClass = 'theme-dark-blue';
  }

  // load dropdowns
  expenseSubtype: String[];
  currency: String[];
  years: String[] = [];

  ngOnInit(): void {
    this.getExpenseSubtype();
    this.getCurrency();
    this.loadData();
  }

  loadData() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    )
    this.api.getExpenseInf(this.id).subscribe(
      data => {
        this.expense = data;
      }
    ) 
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
    // add username to expense
    this.expense.username = this.session.getUsername();
    this.expense.expenseType = "Despesa corrente variável";
    this.expense.hasItems = true;
    // add item array to expense
    //this.expense.itemArray = this.dataArray;
    for(let i = 0; i < this.expense.itemArray.length; i++) {
      this.expense.itemArray[i].stateType = "Pago";
      this.expense.itemArray[i].value = this.expense.itemArray[i].valueNumber.toString();

    }
    this.api.saveExpense(this.expense).subscribe(
      data => {
        this.status = data;
        if(this.status === true) {
          alert(' Dados inseridos com sucesso!');
        } else {
          alert('Não foi possivel fazer a inserção');
        }
      }
    );
    //this.total = 0

  }



}
