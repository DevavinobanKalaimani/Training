import { Component, OnInit } from '@angular/core';
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

  constructor(private api: StarwarsService) { }

  ngOnInit(): void {
    this.api.fetch("https://swapi.dev/api/species/").subscribe( data => {
      this.species = data;
      console.log(this.species); 
    })
  }

  change(x: any){
    this.show = true;
    this.unshow = false;
    localStorage.setItem('details', JSON.stringify(this.species.results[x]) as any)
    this.details = JSON.parse(localStorage.getItem('details') as any)
    
  }


previous(){
    this.api.fetch(this.species?.previous).subscribe(data => {
      this.species = data;
      this.disable = false;
    })
}
 
nextPage(){
    this.api.fetch(this.species?.next).subscribe(data => {
      this.species = data;
    })
}
}
