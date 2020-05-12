import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  question1: boolean = false;
  question2: boolean = false;
  question3: boolean = false;
  question4: boolean = false;
  question5: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openQuestion1() {
    this.question1 = !this.question1;
    this.question2 = false;
    this.question3 = false;
    this.question4 = false;
    this.question5 = false;
  }

  openQuestion2() {
    this.question1 = false;
    this.question2 = !this.question2;
    this.question3 = false;
    this.question4 = false;
    this.question5 = false;
  }

  openQuestion3() {
    this.question1 = false;
    this.question2 = false;
    this.question3 = !this.question3;
    this.question4 = false;
    this.question5 = false;
  }

  openQuestion4() {
    this.question1 = false;
    this.question2 = false;
    this.question3 = false;
    this.question4 = !this.question4;
    this.question5 = false;
  }

  openQuestion5() {
    this.question1 = false;
    this.question2 = false;
    this.question3 = false;
    this.question4 = false;
    this.question5 = !this.question5;
  }

}
