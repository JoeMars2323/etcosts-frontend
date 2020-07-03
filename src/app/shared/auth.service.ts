import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { User } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private usersUrl: string;

  public userSubject = new BehaviorSubject<string>(null);

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
