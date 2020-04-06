import { Component, OnInit } from '@angular/core';

import { User } from '../../../core/models/User';
import { Expense } from '../../../core/models/Expense';
import { RestApiService } from '../../../core/services/rest-api/rest-api.service';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';



@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {

  /*expsense: Expense[] = [
    {'expenseId': 1, 'expenseName':'Jantar em Sintra', 'espenseType':'Restauração', 'expenseDate':'12/01/20', 'paymentDate':'12/01/20', 'total':'20.00 €' },
    {'expenseId': 2, 'expenseName':'Avião para Londres', 'espenseType':'Transporets', 'expenseDate':'14/01/20', 'paymentDate':'18/01/20', 'total':'200.00 €' },
    {'expenseId': 3, 'expenseName':'Compras da semana', 'espenseType':'Supermercado', 'expenseDate':'18/01/20', 'paymentDate':'18/01/20', 'total':'47.00 €' },
  ];*/

  user: User;
  expense: Expense[];

  constructor(private api: RestApiService, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.getUserInformation();
  }

  public getUserInformation() {
    this.user = this.auth.getUser();
    this.api.getExpensesResume(this.user).subscribe(
      data => {
        this.expense = data;
        console.log(this.expense);
      });
  }

}
