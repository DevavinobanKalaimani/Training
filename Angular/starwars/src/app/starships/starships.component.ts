import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  show: any = false;
  unshow: any = true;

  starships :any=[];
  
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
    this.api.fetch("https://swapi.dev/api/starships/").subscribe( data => {
      this.starships = data;
      console.log(this.starships); 

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
    localStorage.setItem('details', JSON.stringify(this.starships.results[x]) as any)
    this.details = JSON.parse(localStorage.getItem('details') as any)
    
  }
  getRandomNumber(){
    return (Math.floor(Math.random()*20))
  }

previous(){
  this.loading=true;
  this.unloading=false;

    this.api.fetch(this.starships?.previous).subscribe(data => {
      this.starships = data;

      this.loading=false;
      this.unloading = true; 
        this.nextdisable = false;

      if(this.starships.previous == null){
        this.prevdisable = true;
      }
    })
}
 
nextPage(){
  this.loading=true;
  this.unloading=false;

    this.api.fetch(this.starships?.next).subscribe(data => {
      this.starships = data;

      this.loading=false;
      this.unloading = true; 
      this.prevdisable = false;

      if(this.starships.next == null){
        this.nextdisable = true;
      }
    })
}
}
