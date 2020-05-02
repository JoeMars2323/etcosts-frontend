import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowsChangeService {

  fixedExpense: boolean = false;
  variableExpense: boolean = false;
  shortExpense: boolean = false;
  longExpense: boolean = false;

  constructor() { }

  closeUpdates() {
    this.fixedExpense = false;
    this.variableExpense = false;
    this.shortExpense = false;
    this.longExpense = false;
  }
}
