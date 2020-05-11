import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RestApiService } from '../rest-api-service/rest-api.service';
import { User } from '../../shared/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user: User;
  private response: boolean;

  constructor(private api: RestApiService, private router: Router, private route: ActivatedRoute) { 

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
  public getUsername():string {
    return this.user.username;
  }

  private gotoPersonalArea() {
    this.router.navigate(['/restrito'], { relativeTo: this.route });
  }

}
