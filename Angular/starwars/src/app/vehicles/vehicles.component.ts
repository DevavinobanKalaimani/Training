import { Component, OnInit } from '@angular/core';
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

  constructor(private api: StarwarsService) { }

  ngOnInit(): void {
    this.api.fetch("https://swapi.dev/api/vehicles/").subscribe( data => {
      this.vehicles = data;
      console.log(this.vehicles); 
    })
  }

  change(x: any){
    this.show = true;
    this.unshow = false;
    localStorage.setItem('details', JSON.stringify(this.vehicles.results[x]) as any)
    this.details = JSON.parse(localStorage.getItem('details') as any)
    
  }


previous(){
    this.api.fetch(this.vehicles?.previous).subscribe(data => {
      this.vehicles = data;
      this.disable = false;
    })
}
 
nextPage(){
    this.api.fetch(this.vehicles?.next).subscribe(data => {
      this.vehicles = data;
    })
}

}
