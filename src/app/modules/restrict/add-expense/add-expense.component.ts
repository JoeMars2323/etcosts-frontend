import { Component, OnInit, Input } from '@angular/core';
import {NgbDateStruct, NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

import { RestApiService } from '../../../core/services/rest-api/rest-api.service';
import { ItemExpense } from '../../../core/models/ItemExpense';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css'],
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
export class AddExpenseComponent implements OnInit {

  // range datepicker
  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  // datepickers
  expenseDate: NgbDateStruct;
  paymentDate: NgbDateStruct;

  // add and remove items
  item = new ItemExpense();
  dataArray = [];

  // lists
  expenseType: String[];
  currency: String[];
  currencyList: String[];


  constructor(private api: RestApiService, private calendar: NgbCalendar,
              public formatter: NgbDateParserFormatter) {

                this.fromDate = calendar.getToday();
                this.toDate = calendar.getNext(calendar.getToday(), 'd', 0);

               }

  ngOnInit(): void {
    this.getExpenseType();
    this.getCurrency();
    this.dataArray.push(this.item);
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

  // load dropdowns
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
