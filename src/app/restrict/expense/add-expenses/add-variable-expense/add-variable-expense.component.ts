import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';

import { RestApiService } from '../../../../shared/rest-api-service/rest-api.service';
import { ExpenseItem } from '../../ExpenseItem';
import { Expense } from '../../Expense';
import { SessionService } from 'src/app/shared/session-service/session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-variable-expense',
  templateUrl: './add-variable-expense.component.html',
  styleUrls: ['./add-variable-expense.component.css']
})
export class AddVariableExpenseComponent implements OnInit {

  // return if data was or not inserted on database
  status: boolean;

  // expense declaration
  dataArray = [];
  expense: Expense;
  item: ExpenseItem;

  // datepicker properties
  locale = 'en';
  locales = listLocales();
  bsConfig: Partial<BsDatepickerConfig>;
  colorTheme = 'theme-dark-blue';

  // lists
  expenseType: String[];
  expenseSubtype: String[];
  currency: String[];

  // calculate total
  total: number = 0;

  constructor(private api: RestApiService, private localeService: BsLocaleService, private session: SessionService,
              private router: Router, private route: ActivatedRoute) { 
    this.expense = new Expense();
    this.item = new ExpenseItem();
  }

  ngOnInit(): void {
    this.getExpenseType();
    this.getCurrency();
    this.dataArray.push(this.item);
    this.applyTheme();
    this.applyLocale();
  }

  // load dropdowns
  getExpenseType() {
    this.api.getExpenseSubtype(2).subscribe(
      data => {
        this.expenseSubtype = data;
      }
    )
  }

  getCurrency() {
    this.api.getCurrency().subscribe(
      data => {
        this.currency = data;

      }
    )
  }

  // change datepicker properties
  applyLocale() {
    this.localeService.use(this.locale);
  }

  applyTheme() {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
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
    //return this.total = this.dataArray.map(obj => obj.value).reduce((a, b) => a + b);
    this.total = 0;
    for (let i = 0; i < this.dataArray.length; i++) {
      if(this.dataArray[i].valueNumber !== undefined) {
        this.total += this.dataArray[i].valueNumber;
        //console.log(typeof this.total === "number");
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
    // add item array to expense
    this.expense.itemArray = this.dataArray;
    for(let i = 0; i < this.expense.itemArray.length; i++) {
      this.expense.itemArray[i].stateType = "Pago";
      this.expense.itemArray[i].value = this.expense.itemArray[i].valueNumber.toString();

    }
    this.api.saveExpense(this.expense).subscribe(
      data => {
        this.status = data;
        if(this.status === true) {
          alert(' Dados inseridos com sucesso!');
          this.router.navigate(['restrito'], { relativeTo: this.route })
        } else {
          alert('Não foi possivel fazer a inserção');
        }
      }
    );
    this.total = 0

  }

}
