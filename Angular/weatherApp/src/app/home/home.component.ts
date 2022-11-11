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
   
    let name= this.search.get('name')?.value;
    this.http.get(`${API_URL}/weather?q=${city}&appid=${API_KEY}`).subscribe(data =>{
      console.log(data);
      window.location.reload();   
      localStorage.setItem('Searched For',JSON.stringify(data));
      sessionStorage.setItem('Searched For', JSON.stringify(data))
       
    })
  }
  toggle(){
    this.fav = !this.fav;
  }

  degFar(){
    this.farhan = true;
    this.celsius = false;
    // this.temp = this.tempF

   }
  degCel(){
    this.farhan = false;
    this.celsius = true;
    // this.temp = this.tempC
  } 
 
   addCityLocal(city: any){

    if(localStorage.getItem('currentCity')){
      this.cities = JSON.parse(localStorage.getItem('currentCity') as any);
      this.cities = [city,...this.cities];
    }else{
      this.cities = [city];
    }
    localStorage.setItem('Searched For',JSON.stringify(this.details));
    sessionStorage.setItem('Searched For', JSON.stringify(this.details))
  }
}
