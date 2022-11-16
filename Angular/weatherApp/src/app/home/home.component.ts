import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';


const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  WeatherData: any;
  inputname: any;
  details:any;
  favCities: any=[];
  cities:any=[];
  city:any={}
  celsius:boolean=true;
  farhan!:boolean;
  fav = true;
  data: any={};
  detail: any;
  tempC: any;
  tempF: any;
  temp: any;
  list: any;
  requests: any;

  search1:any;
  constructor(public http: HttpClient, private fb: FormBuilder) { 
  }
  

  ngOnInit(): void {
    // this.http.get(API_URL).map((res: Response)=>res.json().data);

    this.details=localStorage.getItem('Searched For');
    this.details=sessionStorage.getItem('Searched For');
    this.details=JSON.parse(this.details);   
  }

  today = new Date();
  changedDate: any = '';
  pipe = new DatePipe('en-IND');
  changeFormat() {
    let ChangedFormat = this.pipe.transform(this.today);
    this.changedDate = ChangedFormat;
    console.log(this.changedDate);
  }

  search = this.fb.group({
    city: ['']
  })
  onClick(city: any){    
   
    
    this.http.get(`${API_URL}/weather?q=${city}&appid=${API_KEY}`).subscribe(data =>{
      console.log(data);

      this.detail = data;
      console.log(this.detail);
      
      this.addCityLocal(this.detail);
      window.location.reload();   

      localStorage.setItem('Searched For',JSON.stringify(data));
      sessionStorage.setItem('Searched For', JSON.stringify(data));
       
    })
  }
  toggle(){
    console.log(this.detail);
     this.search1 = localStorage.getItem('Searched For');
    this.search1 = JSON.parse(this.search1); 
    this.fav = !this.fav;
    this.addFav(this.search1);
    console.log(this.detail);

    
    
  }
  toggle1(){
    this.fav = !this.fav;
  }

  addFav(City: any){     
    let cities = [];
    if(localStorage.getItem('FavCity')){
      this.favCities = JSON.parse(localStorage.getItem('FavCity') as any);
      cities = this.favCities;      
      cities = [City,...cities];
    }else{
      cities = [City];
    }
    localStorage.setItem('FavCity',JSON.stringify(cities));
  }

  degFar(){
    this.farhan = true;
    this.celsius = false;
    
   }
  degCel(){
    this.farhan = false;
    this.celsius = true;
  } 
 
   addCityLocal(city: any){

    if(localStorage.getItem('currentCity')){
      this.cities = JSON.parse(localStorage.getItem('currentCity') as any);
      this.cities = [city,...this.cities];
    }else{
      this.cities = [city];
    }
    localStorage.setItem('currentCity',JSON.stringify(this.cities));
  }
}
