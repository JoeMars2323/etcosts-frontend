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
      result => {
        this.login = result;
        if(this.login) {          
          this.auth.gotoPersonalArea();
        } else
        alert('login failed');
      });
      this.auth.userSubject.next(this.user.username);
      
  }





  

}