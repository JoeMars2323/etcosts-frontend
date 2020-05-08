import { Component, OnInit } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-overall',
  templateUrl: './overall.component.html',
  styleUrls: ['./overall.component.css']
})
export class OverallComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2015', '2016', '2017', '2018', '2019', '2020'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [59, 80, 81, 56, 55, 40], label: 'Gastos'},
    {data: [48, 40, 19, 86, 27, 90], label: 'Receitas'}
  ];

  ngOnInit(): void {
  }

}
