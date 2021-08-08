import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  public getExpenseType(): Observable<ExpenseType[]> {
    return this.http.get<ExpenseType[]>(this.usersUrl + '/expenseTypes');
  }

  public getExpensesByUser(username: string): Observable<Expense[]> {
    let params = new HttpParams().set('username', username);
    return this.http.get<Expense[]>(this.usersUrl + '/expenses', { params: params });
  }

   public getExpenseById(id: number): Observable<Expense> {
     let params = new HttpParams().set('id', id.toString());
     return this.http.get<Expense>(this.usersUrl + '/expense', { params: params });
   }

   public saveExpense(expense: Expense): Observable<boolean> {
    return this.http.post<boolean>(this.usersUrl + '/expenses', expense);
  }

  public addExpense(expense: Expense): Observable<boolean> {
    return this.http.post<boolean>(this.usersUrl + '/expense', expense);
  }

  public updateExpense(expense: Expense): Observable<boolean> {
    return this.http.put<boolean>(this.usersUrl + '/expense', expense);
  }

  public deleteExpense(id: number): Observable<boolean> {
    let params = new HttpParams().set('id', id.toString());
    return this.http.delete<boolean>(this.usersUrl + '/expense', { params: params });
  }


}
