import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private auth: AuthenticationService) { }

  getUsername(): string {
    let user = this.auth.getUser();
    return user.username;
  }
}
