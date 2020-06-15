import { Component, OnInit, Input } from '@angular/core';

import { Expense } from '../../expense-model';
import { Router, ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/shared/expense.service';

@Component({
  selector: 'app-list-standard',
  templateUrl: './list-standard.component.html',
  styleUrls: ['./list-standard.component.css']
})
export class ListStandardComponent implements OnInit {

  @Input() expenseList: Expense[];
  expense: Expense;

  constructor(private api: RestApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onEdit(expense) {
    switch(expense.expenseType) {
      case 'Despesa corrente fixa':
        this.router.navigate(['../alterar-despesa/fixa', expense.expenseId], { relativeTo: this.route });
        break;
        case 'Despesa corrente variável':
          this.router.navigate(['../alterar-despesa/variavel', expense.expenseId], { relativeTo: this.route });
        break;
        case 'Despesa não corrente de curta duração':
          this.router.navigate(['../alterar-despesa/curta', expense.expenseId], { relativeTo: this.route });
        break;
        case 'Despesa não corrente de longa duração':
          this.router.navigate(['../alterar-despesa/longa', expense.expenseId], { relativeTo: this.route });
        break;
    }
    
  }

  onPrint(selectedExpense) {
    switch(selectedExpense.expenseType) {
      case 'Despesa corrente fixa':
        this.router.navigate(['../ver-despesa/fixa', selectedExpense.expenseId], { relativeTo: this.route });
        break;
        case 'Despesa corrente variável':
          this.router.navigate(['../ver-despesa/variavel', selectedExpense.expenseId], { relativeTo: this.route });
        break;
        case 'Despesa não corrente de curta duração':
          this.router.navigate(['../ver-despesa/curta', selectedExpense.expenseId], { relativeTo: this.route });
        break;
        case 'Despesa não corrente de longa duração':
          this.router.navigate(['../ver-despesa/longa', selectedExpense.expenseId], { relativeTo: this.route });
        break;
    }
    
  }

}
