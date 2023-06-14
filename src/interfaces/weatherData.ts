export interface weatherData {
    temp: string,
    condition: string,
    humidity: string,
    forecast: any,
}

export interface forecastHourly {
  time:string;
  temp: number;
  condition: string;
  humidity: string;
}
