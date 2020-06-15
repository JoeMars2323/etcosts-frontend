import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { RestApiService } from '../../../../shared/expense.service';
import { DateService } from 'src/app/shared/date.service';
import { Expense } from '../../expense-model';
import { ExpenseType } from '../../expense-type-model';

@Component({
  selector: 'app-update-fixed-expense',
  templateUrl: './update-fixed-expense.component.html',
  styleUrls: ['./update-fixed-expense.component.css']
})
export class UpdateFixedExpenseComponent implements OnInit {

  
  // bind form
  @ViewChild('form') signupForm: NgForm;

  // expense declaration
  expense: Expense;
  id: number;
  
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
  
  constructor(private api: RestApiService, private router: Router, 
              private route: ActivatedRoute, private dateService: DateService) { 
      this.expense = new Expense();
}

ngOnInit(): void {
  this.loadData();
  this.bsConfiguration();
  this.getFixedType();
  this.months = this.dateService.months;
  this.years = this.dateService.getYears();
}

   // load data to update
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
     // update
     this.api.saveExpense(this.expense).subscribe(
      data => {
        this.status = data;
        if(this.status === true) {
          alert(' Dados alteradoe com sucesso!');
          this.signupForm.reset();
          this.router.navigate(['/restrito'], { relativeTo: this.route })
        } else {
          alert('Não foi possivel fazer a alteração');
        }
      }
    );

  }

}
