import { Component, OnInit } from '@angular/core';

import { WindowsChangeService } from '../shared/windows-change-service/windows-change.service'

@Component({
  selector: 'app-public-main',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
})
export class PublicComponent implements OnInit {

  selectedItem: boolean = true;

  constructor(public windowsChangeService: WindowsChangeService) { }

  ngOnInit(): void {
  }

}
