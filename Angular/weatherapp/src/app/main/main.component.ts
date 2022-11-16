import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
const API_KEY = environment.API_KEY
const API_URL= environment.API_URL
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
color = ''
det:any;
tempf:any;
tempc:any;
city:any;
temp_max:any;
inputcity:any;
fara=true;
celc=false;
bagf='';
bagc='colorc';
temp:any;
notfilled=true;
filled=false;
cloud=false;
rain=false;
sunny=false;
mist=false;
haze=false;
forms:any;
icon:any;
palces:any;
favdata:any;
datas:any;
prs:any;
  constructor(private http:HttpClient, private fb: FormBuilder, private router:Router) { 
    // this.load()
  }

  ngOnInit(): void {
    this.inputcity=localStorage.getItem('city')
    this.inputcity=JSON.parse(this.inputcity)
    this.http.get(`${API_URL}/weather?q=${this.inputcity}&appid=${API_KEY}`).subscribe(data => {
      console.log(data);
      this.det = data;
      this.prs= this.det['main'].pressure
      this.tempf =(this.det['main'].temp)
      this.temp_max = ((this.det['main'].temp_max)-273.15) .toFixed(0)
      this.tempc = (this.tempf - 273.15) .toFixed(0)
      this.icon= `http://openweathermap.org/img/wn/${this.det['weather'][0].icon}@4x.png` 
      this.temp=this.tempc;
      
      this.datas = localStorage.getItem('favdata');
      this.datas = JSON.parse(this.datas);

      for(let data of this.datas){
        console.log((data.name).toLowerCase())
       console.log(this.inputcity)
        
        if((data.name).toLowerCase() == this.inputcity){
          this.filled =true;
          this.notfilled=false;
        }

      }

    })
  }


fav(){
this.filled=!this.filled;
this.notfilled=!this.notfilled;
this.color='color';

if(this.filled ===true){
  if(localStorage.getItem('favdata')){
this.favdata = localStorage.getItem('favdata')

let deta = this.det;
this.favdata = JSON.parse(this.favdata);
this.favdata = [this.det,...this.favdata]

console.log(this.favdata)
localStorage.setItem('favdata', JSON.stringify(this.favdata));
  }
  else{
    this.favdata=[this.det]
  }
  localStorage.setItem('favdata',JSON.stringify(this.favdata));
}
else{
this.favdata = localStorage.getItem('favdata');
this.favdata = JSON.parse(this.favdata);
console.log(this.favdata);
let curr = this.favdata.find((cur:any) => {
    return cur['name'] === this.det['name'];
    
})

this.favdata.splice(curr.index,1);
localStorage.setItem('favdata',JSON.stringify(this.favdata));
}
// this.router.navigate(['fav'])
}
far(){
 this.bagf='colorf'
 this.bagc=''
 this.temp=(this.tempf).toFixed(0);
}
cel(){
  this.bagc="colorc"
  this.bagf=''
  this.temp=this.tempc
}
favv(){
  return this.filled=== false;
}
currentDate = new Date();
}
