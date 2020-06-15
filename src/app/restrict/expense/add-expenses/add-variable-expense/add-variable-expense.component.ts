import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { RestApiService } from '../../../../shared/expense.service';
import { ExpenseItem } from '../../expense-item-model';
import { Expense } from '../../expense-model';
import { ExpenseType } from '../../expense-type-model';

@Component({
  selector: 'app-variable-expense',
  templateUrl: './add-variable-expense.component.html',
  styleUrls: ['./add-variable-expense.component.css']
})
export class AddVariableExpenseComponent implements OnInit {

  // bind form
  @ViewChild('form') signupForm: NgForm;
  
  // expense declaration
  dataArray = [];
  expense: Expense;
  item: ExpenseItem;
  
  // expense type
  expenseType: ExpenseType;

  // datepicker properties
  colorTheme = 'theme-dark-blue';
  bsConfig: Partial<BsDatepickerConfig>;
    
  // calculate total
  total: number = 0;
  
  // return if data was or not inserted on database
  status: boolean;
  
  constructor(private api: RestApiService, private router: Router,
              private route: ActivatedRoute) {
      this.expense = new Expense();
      this.item = new ExpenseItem();
  }

  ngOnInit(): void {
    this.bsConfiguration();
    this.getVariableType();
    this.dataArray.push(this.item);
   }

   // get expense type
   getVariableType() {
    this.api.getExpenseType().subscribe(
      data => {
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
    this.dataArray.push(this.item);
  }

  removeItem(index) {
    this.dataArray.splice(index);
    this.valueSum();
  }

  // calculate total
  valueSum() {
    this.total = 0;
    for (let i = 0; i < this.dataArray.length; i++) {
      if(this.dataArray[i].value !== undefined) {
        this.total += this.dataArray[i].value;
      }
     }
    return this.total;

  }

  // submit button
  onSubmit() {
    // add extra information
    //this.expense.username = this.session.getUsername();
    this.expense.expenseTypeName = this.expenseType.name;
     this.expense.expenseTypeDescription = this.expenseType.description;
    // add item array to expense
    this.expense.itemsArray = this.dataArray;
    //save
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
