import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user-model';
import { Expense } from '../restrict/expense/expense-model';
import { ExpenseType } from 'src/app/restrict/expense/expense-type-model';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  
  private usersUrl: string;
  id : number;

  constructor(private http: HttpClient) { 
    this.usersUrl = 'http://localhost:8080/etcosts';
  }

  // rest functions
  public login(user: User): Observable<boolean> {
    return this.http.post<boolean>(this.usersUrl + '/login', user);
  }

  public createAccount(user: User): Observable<boolean> {
    return this.http.post<boolean>(this.usersUrl + '/account', user);
  }

  public getExpenseType(): Observable<ExpenseType[]> {
    return this.http.get<ExpenseType[]>(this.usersUrl + '/expenseTypes');
  }

  public getExpensesByUser(user: User): Observable<Expense[]> {
    return this.http.post<Expense[]>(this.usersUrl + '/expensesList', user);
  }

   public getExpenseById(id: number): Observable<Expense> {
     let params = new HttpParams().set('id', id.toString());
     return this.http.get<Expense>(this.usersUrl + '/expense', { params: params });
   }

  public saveExpense(expense: Expense): Observable<boolean> {
    return this.http.post<boolean>(this.usersUrl + '/expenses', expense);
  }

  public deleteExpense(id: number): Observable<boolean> {
    let params = new HttpParams().set('id', id.toString());
    return this.http.delete<boolean>(this.usersUrl + '/expense', { params: params });
  }


}
