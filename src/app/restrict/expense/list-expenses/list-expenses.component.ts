import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { User } from '../../../shared/User';
import { Expense } from '../Expense';

import { RestApiService } from '../../../shared/rest-api-service/rest-api.service';
import { AuthenticationService } from '../../../shared/authentication-service/authentication.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {

  user: User;
  expenseList: Expense[];

  @Output() expenseId = new EventEmitter<number>();

  // flags
  overall: boolean = true;
  types: boolean = false;
  years: boolean = false;
  states: boolean = false;

  constructor(private api: RestApiService, private auth: AuthenticationService) { 

  }

  ngOnInit(): void {
    this.getExpenseList();
  }

  // get the expense list to pass to the table
  public getExpenseList() {
    this.user = this.auth.getUser();
    this.api.getExpensesByUser(this.user).subscribe(
      data => {
        this.expenseList = data;
        //assign for now expensedate withe the first date in item array
        for(let i = 0; i < this.expenseList.length; i++) {
          if(this.expenseList[i].hasItems) {
            this.expenseList[i].expenseDate = this.expenseList[i].itemArray[0].expenseDate;
            // do the comparisson between dates later
            for(let j = 0; j < this.expenseList[i].itemArray.length; j++) {
            }
          }
        }
      });
  }

  // send id expense choosed by id to personal main mode edit
  onEdit(expense: Expense) {
    expense.update = true;
    this.expenseId.emit(expense.expenseId);
     
  }
  //send id expense choosed by id to personal main - mode view
  onView(expense: Expense) {
    expense.update = false;
    this.expenseId.emit(expense.expenseId);
     
  }

  // show and hide screens
  getOverall() {
    this.overall = true;
    this.types = false;
    this.years = false;
    this.states = false;

  }

  getTypes() {
    this.overall = false;
    this.types = true;
    this.years = false;
    this.states = false;

  }

  getYears() {
    this.overall = false;
    this.types = false;
    this.years = true;
    this.states = false;

  }

  getStates() {
    this.overall = false;
    this.types = false;
    this.years = false;
    this.states = true;

  }


}
