import { Component, OnInit } from '@angular/core';
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

  constructor(private api: StarwarsService) { }

  ngOnInit(): void {
    this.api.fetch("https://swapi.dev/api/starships/").subscribe( data => {
      this.starships = data;
      console.log(this.starships); 
    })
  }

  change(x: any){
    this.show = true;
    this.unshow = false;
    localStorage.setItem('details', JSON.stringify(this.starships.results[x]) as any)
    this.details = JSON.parse(localStorage.getItem('details') as any)
    
  }


previous(){
    this.api.fetch(this.starships?.previous).subscribe(data => {
      this.starships = data;
      this.disable = false;
    })
}
 
nextPage(){
    this.api.fetch(this.starships?.next).subscribe(data => {
      this.starships = data;
    })
}
}
