import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-main',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
})
export class PublicComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }

  onActivate(event) {
    window.scroll(0,0);
  }

}
