import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/api/weather.service';
import { weatherData } from 'src/interfaces/weatherData';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent {
  data!: weatherData;
  dataState: boolean = false;
  city!: string;
  error:boolean = false;
  fieldError: boolean = false;
  subscription!: Subscription;

  constructor(private weatherData: WeatherService){}

  onSubmit(): void {
    if (this.city === "" || !this.city) {
      this.fieldError = true;
      this.dataState = false;
    } else {
      this.fieldError = false;
      this.error = false;
      this.subscription = this.weatherData.getData(this.city).subscribe((response) => {
        const forecast: any = response.forecast.forecastday[0].hour.map((item: any)=>({
          time: item["time"].slice(10),
          temp: item["temp_c"],
          condition: item["condition"]["text"],
          humidity: item["humidity"],
        }))
        const weatherData = {
          temp: `${response.current.temp_c}°C`,
          condition: response.current.condition.text,
          humidity: response.current.humidity,
          forecast,
        }
        this.data = weatherData;
        this.dataState = true;
      }, (error: any) => {
      this.dataState = false;
        this.error = true;
      })
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
