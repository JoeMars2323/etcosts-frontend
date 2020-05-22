import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';

import { RestApiService } from 'src/app/shared/rest-api-service/rest-api.service';
import { DateService } from 'src/app/shared/date-service/date.service';
import { SessionService } from 'src/app/shared/session-service/session.service';
import { ExpenseItem } from '../../ExpenseItem';
import { Expense } from '../../Expense';
import { ExpenseType } from '../../ExpenseType';


@Component({
  selector: 'app-short-expense',
  templateUrl: './add-short-expense.component.html',
  styleUrls: ['./add-short-expense.component.css']
})
export class AddShortExpenseComponent implements OnInit {
  
  // bind form
  @ViewChild('form') signupForm: NgForm;

  // expense type
  expenseType: ExpenseType;

  // expense declaration
  dataArray = [];
  expense: Expense;
  item: ExpenseItem;

  //years of reference
  years: string[] = [];

  // variables to calculate total and difference
  beginPayment: number;
  calculateTotal: number;
  calculateDifference: number;

  // return if data was or not inserted on database
  status: boolean;

  //flag to open a render item
  hasRender: boolean = false;
  
  // file choser
  toggle: boolean = false;

  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private api: RestApiService, public dateService: DateService, private router: Router, 
              private route: ActivatedRoute, private session: SessionService) { 
        this.expense = new Expense();
        this.item = new ExpenseItem();
  }

  ngOnInit(): void {
    this.bsConfiguration();
    this.getShortType();
    this.dataArray.push(this.item);
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
  getShortType() {
    this.api.getExpenseType().subscribe(
      data => {
        this.expenseType = data[2];
      }
    )
  }

  // file chooser
  getOpenFileChooser() {
    this.toggle = !this.toggle;
    return '';
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

  // this method doesnt have the rigth behaviour because the datepicker doesnt clean the input
  public manageDates(): void {
    let expenseDate = new Date(this.expense.expenseDate);
    let paymentDate = new Date(this.expense.paymentDate);
    let varDate = new Date(this.expense.paymentDate);
    let year = varDate.getFullYear();
    let month = varDate.getMonth();
    let day = varDate.getDate();
    let limitDate = new Date(year + 2, month, day);
    if(expenseDate > paymentDate) {
      this.expense.paymentDate = null;
      alert('A data de limite de pagamento tem de ser posterior à data da despesa!!!');
    }
    if(paymentDate > limitDate) {
       this.expense.paymentDate = null;
       alert('Este tipo de despesa não pode ser paga em mais de dois anos!!!'); 
    }
  }

  // this method doesnt have the rigth behaviour
  managePayment() {
    this.calculateTotal = 0;
    this.dataArray[0].value = this.beginPayment; 
     if (this.expense.total > this.beginPayment) {
       this.hasRender = true;
     }
    //iterate data array and sum all values
    for (let i = 0; i < this.dataArray.length; i++) {
      this.calculateTotal += this.dataArray[i].value;
    }
    if (this.expense.total > this.calculateTotal) {
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
