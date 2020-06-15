import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RestApiService } from './expense.service';
import { User } from './user-model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private usersUrl: string;

  userEmiter = new Subject<string>();

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { 
    this.usersUrl = 'http://localhost:8080/etcosts';
  }

  //rest functions
  public login(user: User): Observable<boolean> {
    return this.http.post<boolean>(this.usersUrl + '/login', user);
  }

  public createAccount(user: User): Observable<boolean> {
    return this.http.post<boolean>(this.usersUrl + '/account', user);
  }

  public gotoPersonalArea() {
    this.router.navigate(['/restrito'], { relativeTo: this.route });
  }

}
