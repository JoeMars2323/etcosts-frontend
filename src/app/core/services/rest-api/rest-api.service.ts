import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../models/User';
import { ExpenseType } from '../../models/ExpenseType';
import { Currency } from '../../models/Currency';
import { Expense } from '../../models/Expense';
import { ItemType } from '../../models/ItemType';

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

  public getCurrency(): Observable<String[]> {
    return this.http.get<String[]>(this.usersUrl + '/currency');
  }


}
