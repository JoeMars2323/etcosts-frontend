import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { RestApiService } from 'src/app/shared/rest-api-service/rest-api.service';
import { SessionService } from 'src/app/shared/session-service/session.service';
import { Expense } from '../../Expense';
import { ExpenseType } from '../../ExpenseType';
import { Currency } from 'src/app/shared/Currency';


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

  // currency
  currencies: Currency[];

  // expense type
  expenseType: ExpenseType;

  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private api: RestApiService, private route: ActivatedRoute, private session: SessionService) { 
    this.bsConfig = new BsDatepickerConfig();
    this.bsConfig.containerClass = 'theme-dark-blue';
  }

  // load dropdowns

  years: String[] = [];

  ngOnInit(): void {
    this.getVariableType();
    this.getCurrencies();
    this.loadData();
  }

  loadData() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    )
    this.api.getExpenseById(this.id).subscribe(
      data => {
        this.expense = data;
      }
    ) 
  }

  // get expense type
  getVariableType() {
    this.api.getExpenseType().subscribe(
      data => {
        this.expenseType = data[1];
      }
    )
  }

  // load dropdowns
  getCurrencies() {
    this.api.getCurrency().subscribe(
      data => {
        this.currencies = data;
      }
    )
  }

  // submit button
  onSubmit() {
    // add some additional info to expense
    this.expense.username = this.session.getUsername();
    this.expense.expenseType = "Despesa corrente variável";
    this.expense.hasItems = true;
    this.expense.stateType = "Pago";
    // add item array to expense
    //this.expense.itemArray = this.dataArray;
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
