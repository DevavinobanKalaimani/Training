import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-pause',
  templateUrl: './dialog-pause.component.html',
  styleUrls: ['./dialog-pause.component.css']
})
export class DialogPauseComponent implements OnInit {
  pauseTime: any;

  constructor() { }

  ngOnInit(): void {

    this.pauseTime = sessionStorage.getItem('pauseTime');
    this.pauseTime = (this.pauseTime/60).toFixed(2)
  }

}
