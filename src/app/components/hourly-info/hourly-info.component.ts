import { Component, Input } from '@angular/core';
import { forecastHourly } from 'src/interfaces/weatherData';

@Component({
  selector: 'app-hourly-info',
  templateUrl: './hourly-info.component.html',
  styleUrls: ['./hourly-info.component.css']
})
export class HourlyInfoComponent {
  @Input() hourlyData!: forecastHourly[];
}
