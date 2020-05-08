import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-tables',
  templateUrl: './charts-tables.component.html',
  styleUrls: ['./charts-tables.component.css']
})
export class ChartsTablesComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
