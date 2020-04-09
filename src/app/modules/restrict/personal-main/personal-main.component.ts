import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { User } from '../../../core/models/User';
import { Expense } from '../../../core/models/Expense';
import { RestApiService } from '../../../core/services/rest-api/rest-api.service';

@Component({
  selector: 'app-personal-main',
  templateUrl: './personal-main.component.html',
  styleUrls: ['./personal-main.component.css']
})
export class PersonalMainComponent implements OnInit {

  user: User;
  expenseList: Expense[];
  expense: Expense = null;

  // flags
  expenses: boolean = false;
  search: boolean = false;
  revenue: boolean = false;
  dashbord: boolean = true;
  utilities: boolean = false;
  content: boolean = false;
  newExpense: boolean = false;
  searchAll: boolean = false;

  constructor(private api: RestApiService, private auth: AuthenticationService) { 
    this.expense = new Expense();
  }

  ngOnInit(): void {
    this.getUsername();
    this.getExpenseList();
    //this. putExpense();
  }

  onSubmit() {
    this.putExpense();
    
  }

  getUsername() {
    this.user = this.auth.getUser();
  }

  public getExpenseList() {
    this.user = this.auth.getUser();
    this.api.getExpensesByUser(this.user).subscribe(
      data => {
        this.expenseList = data;
      });
  }

  // expense from back-end
  public putExpense() {
    //this.expense.userId = '1';
    //this.expense.expenseName ='Hotel em Helsinquia';
    //this.expense.expenseType = 'Estadia';
    //this.expense.expenseDate = '08-04-2020';
    //this.expense.paymentDate = '08-04-2020';
    //this.expense.total = '800.00';

    this.api.putExpense(this.expense).subscribe(() =>{
      //alert('entrou');
    }
    );
  }

  // receive expense from add-expendse component
  expenseToReceive($event) {
    this.expense = $event;
    this.api.putExpense(this.expense).subscribe(() =>{
      //alert('entrou');
    }
    );
    //alert(this.expense.expenseName)

  }

  // open and close components
  addNewExpense() {
    this.newExpense = true;
    this.searchAll = false;
    this.dashbord = false;
  }

  searchAlExpenses() {
    this.searchAll = true;
    this.newExpense = false;
    this.dashbord = false;
  }

  callDashboard() {
    this.dashbord = true;
    this.newExpense = false;
    this.searchAll = false;
  }

  // open sidebar menus
  newExpenses() {
    this.expenses = ! this.expenses;
  }

  newSearch() {
    this.search = !this.search;
  }

  newRevenue() {
    this.revenue = !this.revenue;
  }

  callUtilies(){
    this.utilities = !this.utilities;
  }

  callexpenses(){
    this.utilities = !this.utilities;
  }

}
