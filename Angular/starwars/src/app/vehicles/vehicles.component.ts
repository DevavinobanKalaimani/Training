import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  show: any = false;
  unshow: any = true;

  vehicles :any=[];
  
  disable:any = true;
  details: any;
   
  prevdisable:any = true;
  nextdisable:any = false;

  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  loading = true;
  unloading = false;

  constructor(private api: StarwarsService) { }

  ngOnInit(): void {
    this.api.fetch("https://swapi.dev/api/vehicles/").subscribe( data => {
      this.vehicles = data;
      console.log(this.vehicles); 

      this.unloading = true;
      this.loading = false;
    })
  }

  goBack(){
    this.show = false;
    this.unshow = true;
  }

  change(x: any){
    this.show = true;
    this.unshow = false;
    localStorage.setItem('details', JSON.stringify(this.vehicles.results[x]) as any)
    this.details = JSON.parse(localStorage.getItem('details') as any)
    
  }

  getRandomNumber(){
    return (Math.floor(Math.random()*20))
  }
previous(){
  this.loading=true;
  this.unloading=false;

    this.api.fetch(this.vehicles?.previous).subscribe(data => {
      this.vehicles = data;

      this.loading=false;
      this.unloading = true; 
      
      this.nextdisable = false;

      if(this.vehicles.previous == null){
        this.prevdisable = true;
      }
    })
}
 
nextPage(){
  this.loading=true;
  this.unloading=false;

    this.api.fetch(this.vehicles?.next).subscribe(data => {
      this.vehicles = data;
      this.loading=false;
      this.unloading = true; 

      this.prevdisable = false;

      if(this.vehicles.next == null){
        this.nextdisable = true;
      }
    })
}

}
