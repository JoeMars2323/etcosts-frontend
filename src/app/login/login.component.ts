import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../shared/auth.service';
import { User } from '../shared/user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user: User;
  login: boolean;

  constructor(private auth: AuthenticationService) {
      this.user = new User();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.auth.login(this.user).subscribe(
      data => {
        this.login = data;
        this.auth.userSubject.next(this.user.username);
        if(this.login) { 
          //send to private area
          this.auth.gotoPersonalArea();
        } else
        alert('login failed');
      });      
  }








  

}