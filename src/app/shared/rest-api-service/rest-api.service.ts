import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../User';
import { Expense } from '../../restrict/expense/Expense';
import { ExpenseType } from 'src/app/restrict/expense/ExpenseType';
import { Currency } from '../Currency';

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
    return this.http.post<boolean>(this.usersUrl + '/createAccount', user);
  }

  public getExpenseType(): Observable<ExpenseType[]> {
    return this.http.get<ExpenseType[]>(this.usersUrl + '/expenseTypes');
  }

  public getCurrency(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.usersUrl + '/currency');
  }

  public getExpensesByUser(user: User): Observable<Expense[]> {
    return this.http.post<Expense[]>(this.usersUrl + '/expensesByUser', user);
  }

   public getExpenseById(id: number): Observable<Expense> {
     let params = new HttpParams().set('id', id.toString());
     return this.http.get<Expense>(this.usersUrl + '/expenseById', { params: params });
   }

  public saveExpense(expense: Expense): Observable<boolean> {
    return this.http.post<boolean>(this.usersUrl + '/saveExpense', expense);
  }


}
