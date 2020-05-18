import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { RestApiService } from '../../../../shared/rest-api-service/rest-api.service';
import { SessionService } from 'src/app/shared/session-service/session.service';
import { Expense } from '../../Expense';
import { ExpenseType } from '../../ExpenseType';
import { Currency } from 'src/app/shared/Currency';

@Component({
  selector: 'app-update-fixed-expense',
  templateUrl: './update-fixed-expense.component.html',
  styleUrls: ['./update-fixed-expense.component.css']
})
export class UpdateFixedExpenseComponent implements OnInit {

  // return if data was or not inserted on database
  status: boolean;

  id: number;
  expense: Expense;
  bsConfig: Partial<BsDatepickerConfig>;

  // expense type
  expenseType: ExpenseType;

  // currency
  currencies: Currency[];
  
  // load dropdowns
  years: string[] = [];

  constructor(private api: RestApiService, private route: ActivatedRoute, private session: SessionService,
              private router: Router) { 
    this.bsConfig = new BsDatepickerConfig();
    this.bsConfig.containerClass = 'theme-dark-blue';

  }

  ngOnInit(): void {
    this.getFixedType();
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
    );
  }

  // get expense type
  getFixedType() {
    this.api.getExpenseType().subscribe(
      data => {
        this.expenseType = data[0];
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
    // add username to expense
    this.expense.username = this.session.getUsername();
    this.expense.expenseType = 'Despesa corrente fixa';
    this.expense.stateType = 'Pago';
    this.api.saveExpense(this.expense).subscribe(
     data => {
       this.status = data;
       if(this.status === true) {
         alert(' Dados alterados com sucesso!');
         this.router.navigate(['restrito'], { relativeTo: this.route })
       } else {
         alert('Não foi possivel fazer a alteração');
       }
     }
   );

 }

}
