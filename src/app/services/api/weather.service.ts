import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = "https://api.weatherapi.com/v1/forecast.json"
  constructor(private http: HttpClient) {}

  getData(city: string): Observable<any>{
    return this.http.get<any>(this.apiUrl, {params: {
      key: "02aa75182c38409bb9975044232303",
      q: city,
    }})
  }
}
