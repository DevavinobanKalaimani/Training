import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  show: any = false;
  unshow: any = true;

  species :any=[];
  
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
    this.api.fetch("https://swapi.dev/api/species/").subscribe( data => {
      this.species = data;
      console.log(this.species); 

      this.unloading = true;
      this.loading = false;
    })
  }

  change(x: any){
    this.show = true;
    this.unshow = false;
    localStorage.setItem('details', JSON.stringify(this.species.results[x]) as any)
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

    this.api.fetch(this.species?.previous).subscribe(data => {
      this.species = data;

      this.loading=false;
      this.unloading = true; 
      
      this.nextdisable = false;

      if(this.species.previous == null){
        this.prevdisable = true;
      }
    })
}
 
nextPage(){
  this.loading=true;
  this.unloading=false;

    this.api.fetch(this.species?.next).subscribe(data => {
      this.species = data;

      this.loading=false;
      this.unloading = true;

      this.prevdisable = false;

      if(this.species.next == null){
        this.nextdisable = true;
      }
    })
}
}
