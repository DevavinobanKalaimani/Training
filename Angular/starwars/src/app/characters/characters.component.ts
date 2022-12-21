import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode} from '@angular/material';
import {StarwarsService} from '../starwars.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  show: any = false;
  unshow: any = true;

  peoples :any=[];
  details: any;
  
  prevdisable:any = true;
  nextdisable:any = false;
  
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  loading = true;
  unloading = false;
 
  constructor(private api: StarwarsService) {  }

  ngOnInit(): void {

    this.api.fetch("https://swapi.dev/api/people/").subscribe( data => {
      this.peoples = data;
      console.log(this.peoples); 

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
    localStorage.setItem('details', JSON.stringify(this.peoples.results[x]) as any)
    this.details = JSON.parse(localStorage.getItem('details') as any)
    
  }


previous(){
  this.loading=true;
  this.unloading=false;

    this.api.fetch(this.peoples?.previous).subscribe(data => {
      this.peoples = data;

      this.loading=false;
      this.unloading = true; 

      this.nextdisable = false;

      if(this.peoples.previous == null){
        this.prevdisable = true;
      }
    })
}
 
nextPage(){
  this.loading=true;
  this.unloading=false;

    this.api.fetch(this.peoples?.next).subscribe(data => {
      this.peoples = data;

      this.loading=false;
      this.unloading = true; 

      this.prevdisable = false;

      if(this.peoples.next == null){
        this.nextdisable = true;
      }
    })
}
 
 
}
