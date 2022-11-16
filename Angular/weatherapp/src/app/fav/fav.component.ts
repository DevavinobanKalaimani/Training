import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SureComponent } from '../sure/sure.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  [x: string]: any;
found=false
color=''
colorplace=''
table=true;
rem:any;
favroites:any;
  constructor(private md:MatDialog, private router:Router) { }

  ngOnInit(): void {
      this.favroites= localStorage.getItem('favdata');
     
    this.favroites=JSON.parse(this.favroites)
    console.log(this.favroites)
 

      
  if(this.favroites === null){
    this.found=true;
    this.table=false;
  }
  else{
    this.found=false;
    this.table=true;
  }


    
  }
  td(){
    this.color="color"
    this.colorplace="colorplace"
  }
opendialog(){
  this.md.open(SureComponent)
}
remove(){
  localStorage.removeItem('favdata');
  this.found=true; 
  this.table=false;
}
removethis(data:any){
  let temp = this.favroites.filter((items:any) =>  items.name != data.name);
  console.log(temp)
  localStorage.setItem('favdata',JSON.stringify(temp));
  window.location.reload()
  


}
back(){
  localStorage.setItem('ham','true');
  this.router.navigate(['main'])
  .then(() => {
    window.location.reload()
  })
}
}
