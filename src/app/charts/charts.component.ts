import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more'
(More)(Highcharts);

import { CommonModule } from '@angular/common';
import { SeriesOptionsType } from 'highcharts';
import { DataService } from '../data.service';
import { Data } from '../data';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [HighchartsChartModule, CommonModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent implements AfterViewInit  {
  @ViewChild(HighchartsChartComponent, { static: false }) chartComponent: HighchartsChartComponent;
  dat: any = [];
  constructor(private service: DataService) {

  }

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bubble',
      plotBorderWidth: 1
    },
    title: {
      text: 'Highcharts Bubble Chart'
    },
    xAxis: {
      gridLineWidth: 1,
      title: {
        text: 'X Axis'
      },
      labels: {
        format: '{value}'
      }
    },
    yAxis: {
      startOnTick: false,
      endOnTick: false,
      title: {
        text: 'Y Axis'
      },
      labels: {
        format: '{value}'
      }
    },
    series: [{
      type: 'bubble',
      data: []
    }]
  };
  ngAfterViewInit(): void {
    this.service.getData().subscribe((d) => {
      this.dat = d.map((u => {
        return [u.x, u.y, u.size]
      }));
      this.chartOptions.series = [{
        type: 'bubble',
        data: this.dat
      }];
      this.chartComponent.updateOrCreateChart()
    });
  }

  /*ngAfterViewInit (): void {
    this.service.getData().subscribe((d) => {
      // console.log(d);
      this.dat = d.map((u => {
        return [u.x,u.y,u.size]
      }))
      console.log(this.dat);
      this.chartOptions.series = [{
        type: 'bubble',
        data: [[1,2,1000]]
      }];
      /*this.chartOptions = {
        title: {
          text: 'Products'
        },
        xAxis: {
          tickAmount: 7,
          min: 0,
          max: 6,
        },
        yAxis: {
          tickAmount: 8,
          min: 0,
          max: 7,
        },
        series: [{
          type: 'bubble',
          marker: {
            fillColor: '#000000',
            fillOpacity: 0.9,
          },
          data: this.dat,
          sizeBy: 'area',
        }]
      };
    })*/
  
  }
