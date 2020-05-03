import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-main',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicMainComponent implements OnInit {

  selectedItem: boolean = true;
  // screan variables
  home: boolean = true;
  about: boolean = false;
  contacts: boolean = false;
  faq: boolean = false;
  services: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

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

}
