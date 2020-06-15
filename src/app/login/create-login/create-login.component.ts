import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

import { User } from '../../shared/user-model';
import { AuthenticationService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-create-login',
  templateUrl: './create-login.component.html',
  styleUrls: ['./create-login.component.css']
})
export class CreateLoginComponent implements OnInit {

  user: User;
  response: boolean;

  constructor(private auth: AuthenticationService, private router: Router) { 
      this.user = new User();
    }

  onSubmit() {  
    this.validate();
  }

  ngOnInit(): void {
    
  }

  validate(): boolean {

    this.auth.createAccount(this.user).subscribe(
      data => {
        this.response = data;
        if(this.response === true && (this.user.password === this.user.passConfirm)) {
          this.gotoMainArea();
        }
        else 
        alert ('Já existe esse username');
         
      },
      err => {
        alert('error');
        this.response = err;
        

      });
      return this.response;
    
  }

  gotoMainArea() {
    this.router.navigate(['/main']);
  }

}
