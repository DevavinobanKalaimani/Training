import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  show: any = false;
  unshow: any = true;

  films :any=[];
  details: any;

  prevdisable:any = true;
  nextdisable:any = true;

  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  loading = true;
  unloading = false;

  constructor(private api: StarwarsService) { }

  ngOnInit(): void {
    this.api.fetch("https://swapi.dev/api/films/").subscribe( data => {
      this.films = data;
      console.log(this.films); 

      this.unloading = true;
      this.loading = false;
    })
  }

  getRandomNumber(){
    return (Math.floor(Math.random()*20))
  }
  goBack(){
    this.show = false;
    this.unshow = true;
  }

  change(x: any){
    this.show = true;
    this.unshow = false;
    localStorage.setItem('details', JSON.stringify(this.films.results[x]) as any)
    this.details = JSON.parse(localStorage.getItem('details') as any)
    
  }


previous(){
  this.unloading = false;
  this.loading = true;

    this.api.fetch(this.films?.previous).subscribe(data => {
      this.films = data;

      this.loading=false;
      this.unloading = true; 

      this.nextdisable = false;

      if(this.films.previous == null){
        this.prevdisable = true;
      }
    })
}
 
nextPage(){
  this.loading=true;
  this.unloading=false;

  this.api.fetch(this.films?.next).subscribe(data => {
    this.films = data;

    this.loading=false;
      this.unloading = true; 
      
    this.prevdisable = true;

    
      this.nextdisable = true;
      console.log('null');
      
    
   })
} 
}

