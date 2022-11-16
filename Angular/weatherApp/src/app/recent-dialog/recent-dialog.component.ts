import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recent-dialog',
  templateUrl: './recent-dialog.component.html',
  styleUrls: ['./recent-dialog.component.css']
})
export class RecentDialogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(){
    localStorage.removeItem('currentCity');
    window.location.reload();
  }
  goBack(){
   
    window.location.reload();
  }
}
