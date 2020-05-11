import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from '../User';
import { Expense } from '../../restrict/expense/Expense';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  
  private usersUrl: String;
  id : number;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { 
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

   public getExpenseInf(id: number): Observable<Expense> {
     let params = new HttpParams().set('id', id.toString());
     return this.http.get<Expense>(this.usersUrl + '/expenseInfo', { params: params });
  
   }

  public saveExpense(expense: Expense): Observable<boolean> {
    return this.http.post<boolean>(this.usersUrl + '/saveExpense', expense);
  }


}
