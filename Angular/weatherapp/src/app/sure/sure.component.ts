import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sure',
  templateUrl: './sure.component.html',
  styleUrls: ['./sure.component.css']
})
export class SureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  onClick(){
    localStorage.removeItem('favdata');
    window.location.reload();
  }
  goBack(){
    window.location.reload();
  }
}
