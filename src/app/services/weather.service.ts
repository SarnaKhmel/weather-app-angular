import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string){
    this.http.get(`https://open-weather-map27.p.rapidapi.com/weather`)
  }
}
