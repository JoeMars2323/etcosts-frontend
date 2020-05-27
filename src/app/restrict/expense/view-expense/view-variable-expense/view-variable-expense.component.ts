import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as jsPDF from 'jspdf';

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
  @ViewChild('content') content: ElementRef;
  
  // expense declaration
  itemsArray: ExpenseItem[];
  expense: Expense;
  item: ExpenseItem;
  id: number;
  
  // expense type
  expenseType: ExpenseType;
    
  // calculate total
  total: number = 0;
  
  constructor(private api: RestApiService, private session: SessionService, private router: Router,
              private route: ActivatedRoute) {
      this.expense = new Expense();
      this.item = new ExpenseItem();
  }

  ngOnInit(): void {
    this.loadData();
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

  // generate pdf first i needed to do 
  //npm install jspdf --save and
  //npm install @types/jspdf --save-dev
  generatePDF() {

    let doc = new jsPDF();
    //convert html to pdf
    let specialElementHandlers = {
      '#editor': function(element, renderer) {
        return true;
      }
    };
    let content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });
    doc.save('despesa-variavel.pdf');
  }

}
