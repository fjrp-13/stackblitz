import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  API_KEY = "cde8a0c6c5e337bf5a1458b38fc4e1ea";
  API_URL = `http://api.openweathermap.org/data/2.5/weather?q={{query}}&appid=${this.API_KEY}&lang=es&units=metric`;

  constructor(private http: HttpClient) { }

  getWeather(query:string) {
    let url = this.API_URL.replace('{{query}}', query);
    return this.http.get(url)
    .pipe(map( (resp:any) => {
      return {
        date: new Date(resp.dt * 1000).toLocaleString("es-ES"),
        city: resp.name,
        temp: resp.main.temp,
        realFeel: resp.main.feels_like,
        desc: resp.weather[0].description,
        wind: resp.wind.speed,
        humid: resp.main.humidity,
        icon: resp.weather[0].icon
      }
    }));
  }
}
