import { Component, OnInit, Input } from '@angular/core';
import {NgbDateStruct, NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

import { RestApiService } from '../../core/services/rest-api/rest-api.service';
import { ItemExpense } from '../../core/models/ItemExpense';
import { User } from 'src/app/core/models/User';
import { InteractionService } from 'src/app/core/services/interaction/interaction.service';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  styles: [`
    .form-group.hidden {
      width: 0;
      margin: 0;
      border: none;
      padding: 0;
    }
    .custom-day {
      text-align: center;
      padding: 0.185rem 0.25rem;
      display: inline-block;
      height: 2rem;
      width: 2rem;
    }
    .custom-day.focused {
      background-color: #e6e6e6;
    }
    .custom-day.range, .custom-day:hover {
      background-color: rgb(2, 117, 216);
      color: white;
    }
    .custom-day.faded {
      background-color: rgba(2, 117, 216, 0.5);
    }
  `]
})
export class PersonalComponent implements OnInit {

  @Input() Message: string;

  // get userdata from login component
  username: String;
  text: String;

  // range datepicker
  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null;
  toDate: NgbDate | null;


  // add and remove items
  item = new ItemExpense();
  dataArray = [];


  // lists
  expenseType: String[];
  currency: String[];
  currencyList: String[];

  // datepickers
  expenseDate: NgbDateStruct;
  paymentDate: NgbDateStruct;

  // flags
  expenses: boolean = false;
  search: boolean = false;
  revenue: boolean = false;
  dashbord: boolean = true;
  content: boolean = false;
  content1: boolean = false;
  content2: boolean = false;
  utilities: boolean = false;
  
  constructor(private api: RestApiService, private calendar: NgbCalendar,
    private interaction: InteractionService,
    public formatter: NgbDateParserFormatter) { 
      this.fromDate = calendar.getToday();
      this.toDate = calendar.getNext(calendar.getToday(), 'd', 0);
  }

  ngOnInit(): void {
    this.getExpenseType();
    this.getCurrency();
    this.dataArray.push(this.item); 
    this.getUsername();
    
  }

  // datepicker range functions
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }
  // end datepicker functions

  getExpenseType() {
    this.api.getExpenseType().subscribe(
      data => {
        this.expenseType = data;
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

  // interaction with login component
  getUsername() {
    this.interaction.login$.subscribe(
      user => {
        this.username = user;
      }
    )
  }

  xpto() {
    alert('batatas e ' + this.username);
  }

  // side barr
  callAll1() {
    this.content1 = true;
    this.content2 = false;
    this.dashbord = false;
  }
  callAll2() {
    this.content2 = true;
    this.content1 = false;
    this.dashbord = false;
  }

  // dashboard
  callDashboard() {
    this.dashbord = true;
    this.content1 = false;
    this.content2 = false;
  }

  // side bar functions
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

  // add and remove items
  addItem() {
    this.item = new ItemExpense();
    this.dataArray.push(this.item);
  }

  removeItem(index) {
    this.dataArray.splice(index);
  }

  // submit button
  onSubmit() {

  }




  

}
