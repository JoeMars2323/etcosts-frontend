import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../shared/authentication.service';
import { User } from '../shared/user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user: User;

  constructor(private auth: AuthenticationService) {
                this.user = new User();
               }

  onSubmit(): void {  
  }

  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.user);

  }
  

}
