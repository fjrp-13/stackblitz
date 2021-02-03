import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { WeatherService } from '../services/weather.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  formWeather: FormGroup;
  // formSubmitted = false;
  cityNotFound = false;
  defaultCity = "Barcelona, ES";

  data = {
    city      : '',
    date      : '',
    temp      : '',
    realFeel  : '',
    desc      : '',
    wind      : '',
    humid     : '',
    icon      : ''
  };

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.createForm();
  }
// this.formWeather.get('city').value
  ngOnInit(): void {
    this.getCityWeather(this.defaultCity);
  }
  
  createForm() {
    this.formWeather = this.fb.group({
      city: ['', [Validators.required]]
    },
    { updateOn: "submit" });
  }

  get isCityInvalid() {
    return this.formWeather.get('city').invalid && this.formWeather.get('city').touched;
  }
  
  get isThereDate() {
    return this.data.date.toString().length > 0;
  }
  get isThereCity() {
    return this.data.city.toString().length > 0;
  }
  get isThereTemp() {
    return this.data.temp.toString().length > 0;
  }
  get isThereWind() {
    return this.data.wind.toString().length > 0;
  }
  get isThereHumid() {
    return this.data.humid.toString().length > 0;
  }
  get isThereIcon() {
    return this.data.icon.toString().length > 0;
  }

  fillWeatherData(weatherData:any) {
    this.formWeather.reset();
    this.data.date     = weatherData.date;
    this.data.city     = weatherData.city;
    this.data.temp     = weatherData.temp;
    this.data.realFeel = weatherData.realFeel;
    this.data.desc     = weatherData.desc;
    this.data.wind     = weatherData.wind;
    this.data.humid    = weatherData.humid;
    this.data.icon     = weatherData.icon;
  }

  getCityWeather(city: string) {
    this.cityNotFound = false;
    this.getWeather(city)
    .subscribe(
      resp  => {
        this.fillWeatherData(resp);
      },
      err => {
        this.cityNotFound = true;
      }
    );
  }

  getWeather(query:string) {
    const API_KEY = "cde8a0c6c5e337bf5a1458b38fc4e1ea";
    let API_URL = `https://api.openweathermap.org/data/2.5/weather?q={{query}}&appid=${API_KEY}&lang=es&units=metric`;
  
    let url = API_URL.replace('{{query}}', query);
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

  submit() {
    // this.formSubmitted = true;
    this.cityNotFound = false;
    if (this.formWeather.invalid) {
      // Si el form es inválido, márcamos los controles como "touched" para que se marquen/muestren los errores
      return Object.values(this.formWeather.controls).forEach( control => {
          control.markAsTouched();
        // }
      })
    }

    // Posteo
    this.getCityWeather(this.formWeather.get('city').value);
  }

}
