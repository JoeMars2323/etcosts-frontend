import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { RestApiService } from '../rest-api/rest-api.service';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user: User;
  private response: boolean;

  constructor(private api: RestApiService, private router: Router) { 

  }

  public login(login: User) {
    this.user = login;
    this.api.login(login).subscribe(
      data => {
        this.response = data;
        if(this.response === true) {
          this.gotoPersonalArea();
        } else
        alert('login failed');
      },
      err => {
        this.response = err;
        alert('error');

      });
    
  }

  public getUser():User {
    return this.user;
  }

  private gotoPersonalArea() {
    this.router.navigate(['/personal']);
  }

}
