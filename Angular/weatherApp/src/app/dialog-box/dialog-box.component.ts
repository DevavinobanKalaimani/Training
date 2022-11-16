import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    localStorage.removeItem('FavCity');
    window.location.reload();
  }
  goBack(){
   
    window.location.reload();
  }
 
}
