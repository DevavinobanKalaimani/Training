import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resent',
  templateUrl: './resent.component.html',
  styleUrls: ['./resent.component.css']
})
export class ResentComponent implements OnInit {
found:any;
table:any;
temp:any;
color=''
searchs:any;
colorplace=''
favrts:any;
filled=false;
notfilled=true;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.searchs= localStorage.getItem('formdata');
    this.searchs=JSON.parse(this.searchs)
    this.favrts = localStorage.getItem('favdata');
    this.favrts = JSON.parse(this.favrts);
    

    if(this.searchs === null){
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
  clear(){
    localStorage.removeItem('formdata');
    this.found=true;
    this.table=false;
  }
  removethis(data:any){
    let temp = this.searchs.filter((items:any) =>  items.name != data.name);
    console.log(temp)
    localStorage.setItem('formdata',JSON.stringify(temp));
    window.location.reload()
    
  
  
  }
  check(data:any){
    if(this.favrts){
      for(let fav of this.favrts ){
        if(fav['name'] == data){
          this.filled = true;
              this.notfilled=false;
              break;
        }
        else{
          this.filled = false;
              this.notfilled=true;
        }
      }
    }
      
  }
  back(){
    localStorage.setItem('ham','true');
    this.router.navigate(['main'])
    .then(() => {
      window.location.reload()
    })
  }


}


