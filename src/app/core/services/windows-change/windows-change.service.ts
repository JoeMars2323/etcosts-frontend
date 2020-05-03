import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowsChangeService {

  // screan variables - public
  home: boolean = true;
  about: boolean = false;
  contacts: boolean = false;
  faq: boolean = false;
  services: boolean = false;

  //screens
  fixedExpense: boolean = false;
  variableExpense: boolean = false;
  shortExpense: boolean = false;
  longExpense: boolean = false;

  constructor() { }

  //public screen functions
  goToHome() {
    this.home = true;
    this.about = false;
    this.contacts = false;
    this.faq = false;
    this.services = false;

  }

  goToAbout() {
    this.home = false;
    this.about = true;
    this.contacts = false;
    this.faq = false;
    this.services = false;

  }

  goToContacts() {
    this.home = false;
    this.about = false;
    this.contacts = true;
    this.faq = false;
    this.services = false;

  }

  goToFaq() {
    this.home = false;
    this.about = false;
    this.contacts = false;
    this.faq = true;
    this.services = false;

  }

  goToServices() {
    this.home = false;
    this.about = false;
    this.contacts = false;
    this.faq = false;
    this.services = true;

  }

  closeUpdates() {
    this.fixedExpense = false;
    this.variableExpense = false;
    this.shortExpense = false;
    this.longExpense = false;
  }
}
