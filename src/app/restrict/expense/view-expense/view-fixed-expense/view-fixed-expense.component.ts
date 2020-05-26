import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { RestApiService } from '../../../../shared/rest-api.service';
import { DateService } from 'src/app/shared/date.service';
import { Expense } from '../../expense-model';
import { ExpenseType } from '../../expense-type-model';

@Component({
  selector: 'app-view-fixed-expense',
  templateUrl: './view-fixed-expense.component.html',
  styleUrls: ['./view-fixed-expense.component.css']
})
export class ViewFixedExpenseComponent implements OnInit {

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

  
  constructor(private api: RestApiService, private route: ActivatedRoute, private dateService: DateService) { 
      this.expense = new Expense();
}

ngOnInit(): void {
  this.loadData();
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

  // get expense type
  getFixedType() {
    this.api.getExpenseType().subscribe(
      data => {
        this.expenseType = data[0];
      }
    )
  }

}
