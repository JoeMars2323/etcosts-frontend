import { Component, OnInit } from '@angular/core';

import { WindowsChangeService } from '../../core/services/windows-change/windows-change.service'

@Component({
  selector: 'app-public-main',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicMainComponent implements OnInit {

  selectedItem: boolean = true;

  constructor(public windowsChangeService: WindowsChangeService) { }

  ngOnInit(): void {
  }

}
