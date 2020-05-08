import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../User';
import { Expense } from '../../personal/expense/Expense';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  
  private usersUrl: String;

  constructor(private http: HttpClient) { 
    this.usersUrl = 'http://localhost:8080/etcosts';
  }

  // rest functions
  public login(user: User): Observable<boolean> {
    return this.http.post<boolean>(this.usersUrl + '/login', user);
  }

  public createAccount(user: User): Observable<boolean> {
    return this.http.post<boolean>(this.usersUrl + '/createAccount', user);
  }

  public getExpensesByUser(user: User): Observable<Expense[]> {
    return this.http.post<Expense[]>(this.usersUrl + '/expensesByUser', user);
  }

  public getExpenseType(): Observable<String[]> {
    return this.http.get<String[]>(this.usersUrl + '/expenseTypes');
  }

  public getExpenseSubtype(id: number): Observable<String[]> {
    let params = new HttpParams().set('id', id.toString());
    return this.http.get<String[]>(this.usersUrl + '/expenseSubtypes', { params: params });
  }

  public getCurrency(): Observable<String[]> {
    return this.http.get<String[]>(this.usersUrl + '/currency');
  }

  public saveExpense(expense: Expense) {
    return this.http.post(this.usersUrl + '/saveExpense', expense);
  }

  public getExpenseInf(id: number): Observable<Expense> {
    let params = new HttpParams().set('id', id.toString());

    return this.http.get<Expense>(this.usersUrl + '/expenseInfo', { params: params });
  
  }


}
