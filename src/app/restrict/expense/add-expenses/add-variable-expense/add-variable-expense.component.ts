import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { RestApiService } from '../../../../shared/rest-api-service/rest-api.service';
import { SessionService } from 'src/app/shared/session-service/session.service';
import { ExpenseItem } from '../../ExpenseItem';
import { Expense } from '../../Expense';
import { MonthsService } from 'src/app/shared/months-service/months.service';

@Component({
  selector: 'app-variable-expense',
  templateUrl: './add-variable-expense.component.html',
  styleUrls: ['./add-variable-expense.component.css']
})
export class AddVariableExpenseComponent implements OnInit {

  // bind form
  @ViewChild('form') signupForm: NgForm;
  
  // return if data was or not inserted on database
  status: boolean;

  // expense declaration
  dataArray = [];
  expense: Expense;
  item: ExpenseItem;

  // datepicker properties
  colorTheme = 'theme-dark-blue';
  bsConfig: Partial<BsDatepickerConfig>;

  // lists
  types: String[];
  subtypes: String[];
  currencies: String[];

  // file choser
  toggle: boolean = false;

  // calculate total
  total: number = 0;

  constructor(private api: RestApiService, private session: SessionService, private router: Router, 
              private route: ActivatedRoute) { 
    this.expense = new Expense();
    this.item = new ExpenseItem();
  }

  ngOnInit(): void {
    this.bsConfiguration();
    this.dataArray.push(this.item);
    this.getTypes();
    this.getSubtypes();
    this.getCurrencies();
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
    this.api.getExpenseSubtype(2).subscribe(
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

   // configure datepicker
   bsConfiguration() {
    this.bsConfig = Object.assign({}, { 
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD-MM-YYYY'
    });
    setTimeout(() => {
    });
  }

  // add and remove items
  addItem() {
    this.item = new ExpenseItem();
    this.valueSum();
    this.dataArray.push(this.item);
  }

  removeItem(index) {
    this.dataArray.splice(index);
    this.valueSum();
  }

  valueSum() {
    this.total = 0;
    for (let i = 0; i < this.dataArray.length; i++) {
      if(this.dataArray[i].valueNumber !== undefined) {
        this.total += this.dataArray[i].valueNumber;
      }
     }
    return this.total;

  }

  // submit button
  onSubmit() {
    // add username to expense
    this.expense.username = this.session.getUsername();
    this.expense.expenseType = "Despesa corrente variável";
    this.expense.hasItems = true;
    // add item array to expense and the same date to each item
    this.expense.itemArray = this.dataArray;
    for(let i = 0; i < this.expense.itemArray.length; i++) {
      this.expense.itemArray[i].stateType = "Pago";
      this.expense.itemArray[i].expenseDate = this.expense.expenseDate;
      this.expense.itemArray[i].value = this.expense.itemArray[i].valueNumber.toString();
    }
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
    this.total = 0
  }

}
