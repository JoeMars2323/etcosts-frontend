import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { RestApiService } from '../../../../shared/rest-api.service';
import { SessionService } from 'src/app/shared/session.service';
import { ExpenseItem } from '../../expense-item-model';
import { Expense } from '../../expense-model';
import { ExpenseType } from '../../expense-type-model';

@Component({
  selector: 'app-view-variable-expense',
  templateUrl: './view-variable-expense.component.html',
  styleUrls: ['./view-variable-expense.component.css']
})
export class ViewVariableExpenseComponent implements OnInit {

  // bind form
  @ViewChild('form') signupForm: NgForm;
  
  // expense declaration
  itemsArray: ExpenseItem[];
  expense: Expense;
  item: ExpenseItem;
  id: number;
  
  // expense type
  expenseType: ExpenseType;

  // datepicker properties
  colorTheme = 'theme-dark-blue';
  bsConfig: Partial<BsDatepickerConfig>;
    
  // calculate total
  total: number = 0;
  
  // return if data was or not inserted on database
  status: boolean;
  
  constructor(private api: RestApiService, private session: SessionService, private router: Router,
              private route: ActivatedRoute) {
      this.expense = new Expense();
      this.item = new ExpenseItem();
  }

  ngOnInit(): void {
    this.loadData();
    this.bsConfiguration();
    this.getVariableType();
    //this.dataArray.push(this.item);
   }

  // load data to update
  loadData() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    )
    this.api.getExpenseById(this.id).subscribe(
      (data: Expense)  => {
        this.expense = data;
        this.itemsArray = data.itemsArray;
        this.valueSum();

      }
    ) 
  }

  // get expense type
  getVariableType() {
    this.api.getExpenseType().subscribe(
      (data) => {
        this.expenseType = data[1];
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
    this.itemsArray.push(this.item);
  }

  removeItem(index) {
    this.itemsArray.splice(index);
    this.valueSum();
  }

  // calculate total
  valueSum() {
    this.total = 0;
    for (let i = 0; i < this.itemsArray.length; i++) {
      if(this.itemsArray[i].value !== undefined) {
        this.total += this.itemsArray[i].value;
      }
     }
    return this.total;

  }

  // submit button
  onSubmit() {
    // update item array
    this.expense.itemsArray = this.itemsArray;
    //update
    this.api.saveExpense(this.expense).subscribe(
      data => {
        this.status = data;
        if(this.status === true) {
          alert(' Dados alterados com sucesso!');
          this.signupForm.reset();
          this.router.navigate(['/restrito'], { relativeTo: this.route })
        } else {
          alert('Não foi possivel fazer a alteração');
        }
      }
    );
    this.total = 0
  }

}
