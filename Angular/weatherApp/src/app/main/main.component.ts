import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

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
