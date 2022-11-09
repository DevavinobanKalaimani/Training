import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  WeatherData: any;
  
  constructor() { }

  ngOnInit(): void {
    this.WeatherData = {
      main: {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  today = new Date();
  changedDate: any = '';
  pipe = new DatePipe('en-IND');
  changeFormat() {
    let ChangedFormat = this.pipe.transform(this.today);
    this.changedDate = ChangedFormat;
    console.log(this.changedDate);
  }


  getWeatherData() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=karnataka&appid=ff1bc4683fc7325e9c57e586c20cc03e')
      .then(response => response.json())
      .then(data => { this.setWeatherData(data); })
  }

  setWeatherData(data: any) {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }

}
