import { Component, OnInit } from '@angular/core';
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

  constructor(private api: StarwarsService) { }

  ngOnInit(): void {
    this.api.fetch("https://swapi.dev/api/planets/").subscribe( data => {
      this.planets = data;
      console.log(this.planets); 
    })
  }

  change(x: any){
    this.show = true;
    this.unshow = false;
    localStorage.setItem('details', JSON.stringify(this.planets.results[x]) as any)
    this.details = JSON.parse(localStorage.getItem('details') as any)
    
  }


previous(){
    this.api.fetch(this.planets?.previous).subscribe(data => {
      this.planets = data;
      this.disable = false;
    })
}
 
nextPage(){
    this.api.fetch(this.planets?.next).subscribe(data => {
      this.planets = data;
    })
}
}
