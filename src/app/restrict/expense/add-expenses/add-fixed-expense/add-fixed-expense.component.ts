import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { SessionService } from 'src/app/shared/session-service/session.service';
import { RestApiService } from '../../../../shared/rest-api-service/rest-api.service';
import { Expense } from '../../Expense';
import { MonthsService } from 'src/app/shared/months-service/months.service';

@Component({
  selector: 'app-fixed-expense',
  templateUrl: './add-fixed-expense.component.html',
  styleUrls: ['./add-fixed-expense.component.css']
})
export class AddFixedExpenseComponent implements OnInit {

  // bind form
  @ViewChild('form') signupForm: NgForm;

  // return if data was or not inserted on database
  status: boolean;

  // represent the expense
  expense: Expense;
  
  // datepicker properties
  colorTheme = 'theme-dark-blue';
  bsConfig: Partial<BsDatepickerConfig>;
 
  // lists
  types: String[];
  subtypes: String[];
  currencies: String[];
  years: String[] = []; 

  // file choser
  toggle: boolean = false;

  constructor(private api: RestApiService, private session: SessionService, private router: Router, 
              private route: ActivatedRoute, public monthsService: MonthsService) { 
      this.expense = new Expense();
  }

  ngOnInit(): void {
    this.bsConfiguration();
    this.getTypes();
    this.getSubtypes();
    this.getCurrencies();
    this.getYears();
  }

  // configure datepicker
  bsConfiguration() {
    this.bsConfig = Object.assign({}, { 
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD-MM-YYYY'
      //locale: 'pt'
    });
    setTimeout(() => {
    });
  }

  // load dropdowns
  getTypes() {
    this.api.getExpenseType().subscribe(
      data => {
        this.types = data;
      }
    )
  }

  getSubtypes() {
    this.api.getExpenseSubtype(1).subscribe(
      data => {
        this.subtypes = data;
      }
    )
  }

  getCurrencies() {
    this.api.getCurrency().subscribe(
      data => {
        this.currencies = data;
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

  // file chooser
  getOpenFileChooser() {
    this.toggle = !this.toggle;
    return '';
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
          this.signupForm.reset();
          this.router.navigate(['/restrito'], { relativeTo: this.route })
        } else {
          alert('Não foi possivel fazer a inserção');
        }
      }
    );

  }

}
