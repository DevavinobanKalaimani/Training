import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  public found = false;

  constructor() { }

  ngOnInit(): void {
  }

  today = new Date();
  changedDate: any = '';
  pipe = new DatePipe('en-IND');
  changeFormat(){
    let ChangedFormat = this.pipe.transform(this.today);
    this.changedDate = ChangedFormat;
    console.log(this.changedDate);
}


}
