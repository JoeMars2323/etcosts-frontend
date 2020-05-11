import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormControl, FormGroup } from '@angular/forms';

import { RestApiService } from '../../../../shared/rest-api-service/rest-api.service';
import { Expense } from '../../Expense';
import { SessionService } from 'src/app/shared/session-service/session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fixed-expense',
  templateUrl: './add-fixed-expense.component.html',
  styleUrls: ['./add-fixed-expense.component.css']
})
export class AddFixedExpenseComponent implements OnInit {

  // return if data was or not inserted on database
  status: boolean;
  
  expense: Expense;

  bsConfig: Partial<BsDatepickerConfig>;

  // lists
  expenseSubtype: String[];
  currency: String[];
  years: String[] = []; 

  bsValue = new Date();

  constructor(private api: RestApiService, private session: SessionService, 
              private router: Router, private route: ActivatedRoute) { 
    this.expense = new Expense();
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
     // add username to expense
     this.expense.username = this.session.getUsername();
     this.expense.expenseType = 'Despesa corrente fixa';
     this.expense.stateType = 'Pago';
     this.api.saveExpense(this.expense).subscribe(
      data => {
        this.status = data;
        if(this.status === true) {
          alert(' Dados inseridos com sucesso!');
          this.router.navigate(['restrito'], { relativeTo: this.route })
        } else {
          alert('Não foi possivel fazer a inserção');
        }
      }
    );

  }

}
