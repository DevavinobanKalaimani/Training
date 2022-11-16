import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  public found = false;
  favCity: any;
  fav: any;
  favourites: any;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.favourites = localStorage.getItem('FavCity');
    this.favourites = JSON.parse(this.favourites)
    // this.favCity=localStorage.getItem('Searched For');
    // this.favCity=JSON.parse(this.favCity);
    // console.log(this.favCity);
    if(localStorage.getItem('Searched For')){
      this.fav = true;
    }else{
      this.fav = false;
    }
  }

  today = new Date();
  changedDate: any = '';
  pipe = new DatePipe('en-IND');
  changeFormat(){
    let ChangedFormat = this.pipe.transform(this.today);
    this.changedDate = ChangedFormat;
    console.log(this.changedDate);
}

popup(){
  this.dialog.open(DialogBoxComponent, {height:'210px', width: '458px'})
}


}
