import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecentSearchComponent } from '../recent-search/recent-search.component';

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
    localStorage.removeItem('list');
    window.location.reload();
  }
  goBack(){
    // this.router.navigate(['recentsearch']);
    window.location.reload();
  }
}
