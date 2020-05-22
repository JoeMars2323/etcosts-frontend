import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { SessionService } from 'src/app/shared/session-service/session.service';
import { RestApiService } from '../../../../shared/rest-api-service/rest-api.service';
import { DateService } from 'src/app/shared/date-service/date.service';
import { Expense } from '../../Expense';
import { ExpenseType } from '../../ExpenseType';

@Component({
  selector: 'app-fixed-expense',
  templateUrl: './add-fixed-expense.component.html',
  styleUrls: ['./add-fixed-expense.component.css']
})
export class AddFixedExpenseComponent implements OnInit {

  // bind form
  @ViewChild('form') signupForm: NgForm;

  // expense declaration
  expense: Expense;
  
  // expense type
  expenseType: ExpenseType;
  
  //months and years of reference
  months: string[] = [];
  years: string[] = [];

  // datepicker properties
  colorTheme = 'theme-dark-blue';
  bsConfig: Partial<BsDatepickerConfig>;
  
  // return if data was or not inserted on database
  status: boolean;

  // file choser
  toggle: boolean = false;

  constructor(private api: RestApiService, private session: SessionService, private router: Router, 
              private route: ActivatedRoute, private dateService: DateService) { 
      this.expense = new Expense();
  }

  ngOnInit(): void {
    this.bsConfiguration();
    this.getFixedType();
    this.months = this.dateService.months;
    this.years = this.dateService.getYears();
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

  // get expense type
  getFixedType() {
    this.api.getExpenseType().subscribe(
      data => {
        this.expenseType = data[0];
      }
    )
  }

  // file chooser
  getOpenFileChooser() {
    this.toggle = !this.toggle;
    return '';
  }

  // submit button
   onSubmit() {
     // add extra information
     this.expense.username = this.session.getUsername();
     this.expense.stateType = 'Pago';
     this.expense.expenseType = this.expenseType.name;
     this.expense.expenseTypeDescription = this.expenseType.description;
     this.expense.hasItems = false;
     // save
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
