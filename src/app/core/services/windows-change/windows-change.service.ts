import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowsChangeService {

  // screan variables flags - public
  home: boolean = true;
  about: boolean = false;
  contacts: boolean = false;
  faq: boolean = false;
  services: boolean = false;

  //screens expenses type flags
  expenses: boolean = false;
  fixedExpense: boolean = false;
  variableExpense: boolean = false;
  shortExpense: boolean = false;
  longExpense: boolean = false;  


  // flags search expenses
  search: boolean = false;
  searchAll: boolean = false;

  // dashboard flage
  revenue: boolean = false;
  dashbord: boolean = true;
  utilities: boolean = false;
  content: boolean = false;
  newExpense: boolean = false;

  update: boolean = false;

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

   // open and close components - add expenses
  addNewExpense() {
    this.newExpense = true;
    this.fixedExpense = false;
    this.variableExpense = false;
    this.shortExpense = false;
    this.longExpense = false;
    this.searchAll = false;
    this.dashbord = false;
    this.closeUpdates();
  }

  addFixedExpense() {
    this.newExpense = false;
    this.fixedExpense = true;
    this.variableExpense = false;
    this.shortExpense = false;
    this.longExpense = false;
    this.searchAll = false;
    this.dashbord = false;
    this.closeUpdates();
  }

  addVariableExpense() {
    this.newExpense = false;
    this.fixedExpense = false;
    this.variableExpense = true;
    this.shortExpense = false;
    this.longExpense = false;
    this.searchAll = false;
    this.dashbord = false;
    this.closeUpdates();
  }

  addShortExpense() {
    this.newExpense = false;
    this.fixedExpense = false;
    this.variableExpense = false;
    this.shortExpense = true;
    this.longExpense = false;
    this.searchAll = false;
    this.dashbord = false;
    this.closeUpdates();
  }

  addLongExpense() {
    this.newExpense = false;
    this.fixedExpense = false;
    this.variableExpense = false;
    this.shortExpense = false;
    this.longExpense = true;
    this.searchAll = false;
    this.dashbord = false;
    this.closeUpdates();
  }

  // open and close components - search expenses
  searchAllExpenses() {
    this.newExpense = false;
    this.fixedExpense = false;
    this.variableExpense = false;
    this.shortExpense = false;
    this.longExpense = false;
    this.searchAll = true;
    this.dashbord = false;
    this.closeUpdates();
  }

  callDashboard() {
    this.newExpense = false;
    this.fixedExpense = false;
    this.variableExpense = false;
    this.shortExpense = false;
    this.longExpense = false;
    this.searchAll = false;
    this.dashbord = true;
    this.closeUpdates();
  }

  // open sidebar menus
  newExpenses() {
    this.expenses = ! this.expenses;
    this.search = false;
    this.revenue = false;
    this.utilities = false;
    this.closeUpdates();

  }

  newSearch() {
    this.search = !this.search;
    this.expenses = false;
    this.revenue = false;
    this.utilities = false;
    this.closeUpdates();
  }

  newRevenue() {
    this.revenue = !this.revenue;
    this.expenses = false;
    this.search = false;
    this.utilities = false;
    this.closeUpdates();
  }

  callUtilies(){
    this.utilities = !this.utilities;
    this.expenses = false;
    this.search = false;
    this.revenue = false;
    this.closeUpdates();
  }

  callexpenses(){
    this.utilities = !this.utilities;
    this.closeUpdates();
    
  }

  callUpdate(){
    this.update = true;
    this.searchAll = false;
    this.closeUpdates();
  }
}
