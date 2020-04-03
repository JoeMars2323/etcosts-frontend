import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RestApiService } from '../../core/services/rest-api/rest-api.service';
import { InteractionService } from 'src/app/core/services/interaction/interaction.service';
import { User } from '../../core/models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user: User;
  response: boolean;

  constructor(private api: RestApiService,
              private interaction: InteractionService,
              private router: Router) {
                this.user = new User();
               }

  onSubmit(): void {  
    this.login();
  }

  ngOnInit(): void {
  }

  login(): boolean {

    this.api.login(this.user).subscribe(
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
      return this.response;
    
  }

  gotoPersonalArea() {
    this.router.navigate(['/personal']);
  }

  sendUserName() {
    this.interaction.sendUserName('tv');
  }

}
