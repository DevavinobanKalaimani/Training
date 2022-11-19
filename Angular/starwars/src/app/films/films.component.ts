import { Component, OnInit } from '@angular/core';
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
  
  disable:any = true;
  details: any;

  constructor(private api: StarwarsService) { }

  ngOnInit(): void {
    this.api.fetch("https://swapi.dev/api/films/").subscribe( data => {
      this.films = data;
      console.log(this.films); 
    })
  }


  change(x: any){
    this.show = true;
    this.unshow = false;
    localStorage.setItem('details', JSON.stringify(this.films.results[x]) as any)
    this.details = JSON.parse(localStorage.getItem('details') as any)
    
  }


previous(){
    this.api.fetch(this.films?.previous).subscribe(data => {
      this.films = data;
      this.disable = false;
    })
}
 
nextPage(){
    this.api.fetch(this.films?.next).subscribe(data => {
      this.films = data;
    })
}
}
