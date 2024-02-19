import { AfterContentChecked, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ChartsComponent } from './charts/charts.component';
import { ApexChartsComponent } from './apex-charts/apex-charts.component';
// import { D3ChartComponent } from './d3-chart/d3-chart.component';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,ChartsComponent,ApexChartsComponent,TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
}
