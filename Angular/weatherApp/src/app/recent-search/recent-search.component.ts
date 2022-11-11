import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecentDialogComponent } from '../recent-dialog/recent-dialog.component';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.css']
})
export class RecentSearchComponent implements OnInit {

  recentCity: any;
  fav:any = true;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.recentCity=localStorage.getItem('Searched For');
    this.recentCity=JSON.parse(this.recentCity);
    console.log(this.recentCity);
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
  this.dialog.open(RecentDialogComponent, {height:'210px', width: '458px'})
//    localStorage.removeItem('searched For');
//     window.location.reload();
 }
}
