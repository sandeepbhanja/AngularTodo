import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import{
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexYAxis,
} from "ng-apexcharts"

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  yaxis: ApexYAxis;
};

@Component({
  selector: 'app-apex-charts',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './apex-charts.component.html',
  styleUrl: './apex-charts.component.scss'
})
export class ApexChartsComponent implements OnInit {
  public chartOptions!:ChartOptions;
  dat:any = [];
  constructor(private dataService:DataService){
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: this.dat,
        },
      ],
      chart: {
        height: 500,
        type: "bubble"
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        tickAmount: 5,
        min: 0,
        max: 5,
      },
      yaxis:{
        tickAmount: 5,
        min: 0,
        max: 5,
      }
    }
  }

  ngOnInit(){
    this.dataService.getData().subscribe((d)=>{
      d.map((u)=>this.dat.push([u.x, u.y,u.size]));
    });
    // console.log(this.dat);
  }
}