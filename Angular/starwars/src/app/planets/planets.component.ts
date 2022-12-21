import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {


  show: any = false;
  unshow: any = true;

  planets :any=[];
  
  disable:any = true;
  details: any;

  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  prevdisable:any = true;
  nextdisable:any = false;

  loading = true;
  unloading = false;

  constructor(private api: StarwarsService) { }

  ngOnInit(): void {
    this.api.fetch("https://swapi.dev/api/planets/").subscribe( data => {
      this.planets = data;
      console.log(this.planets); 

      this.unloading = true;
      this.loading = false;
    })
  }

  change(x: any){
    this.show = true;
    this.unshow = false;
    localStorage.setItem('details', JSON.stringify(this.planets.results[x]) as any)
    this.details = JSON.parse(localStorage.getItem('details') as any)
    
  }
  goBack(){
    this.show = false;
    this.unshow = true;
  }

  getRandomNumber(){
    return (Math.floor(Math.random()*20))
  }
previous(){
  this.loading=true;
  this.unloading=false;

    this.api.fetch(this.planets?.previous).subscribe(data => {
      this.planets = data;

      this.loading=false;
      this.unloading = true; 

       this.nextdisable = false;

      if(this.planets.previous == null){
        this.prevdisable = true;
      }
    })
}
 
nextPage(){
  this.loading=true;
  this.unloading=false;

    this.api.fetch(this.planets?.next).subscribe(data => {
      this.planets = data;

      this.loading=false;
      this.unloading = true;

      this.prevdisable = false;

      if(this.planets.next == null){
        this.nextdisable = true;
      }
    })
}
}
