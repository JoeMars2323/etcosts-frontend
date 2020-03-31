import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  private usersUrl: String;

  constructor(private http: HttpClient) { 
    this.usersUrl = 'http://localhost:8080/etcosts';
  }

  // rest functions
  public searchByUser(user: User): Observable<boolean> {

    return this.http.post<boolean>(this.usersUrl + '/searchByUser', user);

  }

  public createAccount(user: User): Observable<boolean> {
    return this.http.post<boolean>(this.usersUrl + '/createAccount', user);
  }

  public getExpenseType(): Observable<String[]> {
    return this.http.get<String[]>(this.usersUrl + '/expenseTypes');
  }

  public getCoins(): Observable<String[]> {
    return this.http.get<String[]>(this.usersUrl + '/coins');
  }

  public getItemType(): Observable<String[]> {
    return this.http.get<String[]>(this.usersUrl + '/itemType');
  }

}
