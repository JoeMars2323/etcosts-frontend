import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RestApiService } from '../../../shared/rest-api-service/rest-api.service';
import { AuthenticationService } from '../../../shared/authentication-service/authentication.service';

import { User } from '../../../shared/User';
import { Expense } from '../Expense';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {

  user: User;
  expenseList: Expense[];

  // flags for type of lists
  state: boolean = false;
  type: boolean = false;
  year: boolean = false;
  standard: boolean = true;

  @Output() expenseId = new EventEmitter<number>();

  constructor(private api: RestApiService, private auth: AuthenticationService,
              private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // pass the general list when the page is loaded
    this.getExpenseList();
    this.router.navigate(['geral'], {relativeTo: this.route});
  }

  changeRoute(value: string) {
    switch(value) {
      case 'geral':
        this.state = false;
        this.type = false;
        this.year = false;
        this.standard = true;
        this.router.navigate([value], {relativeTo: this.route});
         break;
      case 'por-tipo':
        this.resetFlags();
        this.type = true;
        this.router.navigate([value], {relativeTo: this.route});
         break;
      case 'por-ano':
        this.resetFlags();
        this.year = true;
        this.router.navigate([value], {relativeTo: this.route});
         break;
      case 'por-estado':
        this.resetFlags()
        this.state = true;
        this.router.navigate([value], {relativeTo: this.route});
      break;
    }

  }
  resetFlags() {
    this.state = false;
    this.type = false;
    this.year = false;
    this.standard = false;
  }

  // get the expense list to pass to the table
  public getExpenseList() {
    this.user = this.auth.getUser();
    this.api.getExpensesByUser(this.user).subscribe(
      data => {
        this.expenseList = data;
        //assign for now expensedate withe the first date in item array
        for(let i = 0; i < this.expenseList.length; i++) {
          if(this.expenseList[i].hasItems) {
            this.expenseList[i].expenseDate = this.expenseList[i].itemsArray[0].expenseDate;
            // do the comparisson between dates later
            for(let j = 0; j < this.expenseList[i].itemsArray.length; j++) {
            }
          }
        }
      });      
  }

}
