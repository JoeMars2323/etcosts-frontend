import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { User } from '../../../core/models/User';

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
