import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  disable:any = true;
  details: any;
  constructor(private api: StarwarsService) {  }

  ngOnInit(): void {
    this.api.fetch("https://swapi.dev/api/people/").subscribe( data => {
      this.peoples = data;
      console.log(this.peoples); 
    })
  }


  // goBack(){
  //   this.show = false;
  //   this.unshow = true;
  // }

  change(x: any){
    this.show = true;
    this.unshow = false;
    localStorage.setItem('details', JSON.stringify(this.peoples.results[x]) as any)
    this.details = JSON.parse(localStorage.getItem('details') as any)
    
  }


previous(){
    this.api.fetch(this.peoples?.previous).subscribe(data => {
      this.peoples = data;
      this.disable = false;
    })
}
 
nextPage(){
    this.api.fetch(this.peoples?.next).subscribe(data => {
      this.peoples = data;
    })
}
 
}
