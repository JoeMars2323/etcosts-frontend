import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private loginSource = new Subject<String>();
  // observable var ends with $
  login$ = this.loginSource.asObservable();

  constructor() { }

  sendUserName(username: String){
    this.loginSource.next(username);
  }
}

