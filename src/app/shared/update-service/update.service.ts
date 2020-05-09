import { Injectable } from '@angular/core';

import { RestApiService } from '../rest-api-service/rest-api.service';
import { Expense } from 'src/app/restrict/expense/Expense';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  expense: Expense;
  id: number;

  constructor(private api: RestApiService) { }

  getId(id) {
    this.id = id;
  }

  getExpenseInfo() {
    this.api.getExpenseInf(this.id).subscribe(
      data => {
        this.expense = data;
      }
    )
  }

  getExpenseType() {
    this.api.getExpenseInf(this.id).subscribe(
      data => {
        this.expense = data;
      }
    );
  }
}
