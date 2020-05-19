import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';

import { RestApiService } from 'src/app/shared/rest-api-service/rest-api.service';
import { MonthsService } from 'src/app/shared/months-service/months.service';
import { SessionService } from 'src/app/shared/session-service/session.service';
import { ExpenseItem } from '../../ExpenseItem';
import { Expense } from '../../Expense';
import { ExpenseType } from '../../ExpenseType';

@Component({
  selector: 'app-long-expense',
  templateUrl: './add-long-expense.component.html',
  styleUrls: ['./add-long-expense.component.css']
})
export class AddLongExpenseComponent implements OnInit {

  // bind form
  @ViewChild('form') signupForm: NgForm;
  // return if data was or not inserted on database
  status: boolean;
  // expense type
  expenseType: ExpenseType;
  // expense declaration
  dataArray = [];
  expense: Expense;
  item: ExpenseItem;

  //years of reference
  years: string[] = []; 
  
  // variables to calculate total and difference
  calculateTotal: number;
  calculateDifference: number;

  // datepicker properties
  colorTheme = 'theme-dark-blue';
  bsConfig: Partial<BsDatepickerConfig>;

  //flag to open a render item
  hasRender: boolean = false;
  // file choser
  toggle: boolean = false;

  constructor(private api: RestApiService, public monthsService: MonthsService, private router: Router, 
              private route: ActivatedRoute, private session: SessionService) { 
    this.expense = new Expense();
    this.item = new ExpenseItem();
  }

  ngOnInit(): void {
    this.dataArray.push(this.item);
    this.bsConfiguration();
    this.getLongType();
    this.getYears
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

  // get expense type
  getLongType() {
    this.api.getExpenseType().subscribe(
      data => {
        this.expenseType = data[3];
      }
    )
  }

  // file chooser
  getOpenFileChooser() {
    this.toggle = !this.toggle;
    return '';
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

  checkValue(){
    this.hasRender = !this.hasRender;
  }

  // add and remove items
  addItem() {
    this.item = new ExpenseItem();
    this.dataArray.push(this.item);
  }

  removeItem(index) {
    this.dataArray.splice(index);
  }

  // this method doesnt have the rigth behaviour
  public manageDates(event: any): void {
    let expenseDate = new Date(this.expense.expenseDate);
    let paymentDate = new Date(this.expense.paymentDate);
    let limitDate = new Date(expenseDate.getFullYear() + 2);
    if(expenseDate > paymentDate) {
      this.expense.paymentDate = null;
      alert('A data de limite de pagamento tem de ser posterior à data da despesa!!!');
    }
    // if(paymentDate > limitDate) {
    //   this.expense.paymentDate = null;
    //   alert('Este tipo de despesa não pode ser paga em mais de dois anos!!!'); 
    // }
  }


  // this method doesnt have the rigth behaviour
  managePayment() {
    this.calculateTotal = 0;
    //iterate data array and sum all values
    for(let i = 0; i < this.dataArray.length; i++) {
      this.calculateTotal += this.dataArray[i].value;
    }
    if (this.expense.total > this.calculateTotal) {
      this.hasRender = true;
      this.calculateDifference = this.expense.total - this.calculateTotal;
    }
    if (this.expense.total < this.calculateTotal) {
      alert('despesa não pode ser menor do que já foi pago');
    }
    if (this.expense.total === this.calculateTotal) {
      this.calculateDifference = 0;
      alert('despesa paga');
    }
    console.log(this.dataArray);
  }

  onSubmit() {
    // add extra information
    this.expense.username = this.session.getUsername();
    if(this.expense.total > this.calculateTotal) {
      this.expense.stateType = 'Por Pagar';
    }
    if(this.expense.total == this.calculateTotal) {
      this.expense.stateType = 'Pago';
    }
    this.expense.expenseType = this.expenseType.name;
    this.expense.expenseTypeDescription = this.expenseType.description;
    this.expense.hasItems = true;
    // add item array to expense
    this.expense.itemsArray = this.dataArray;
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
