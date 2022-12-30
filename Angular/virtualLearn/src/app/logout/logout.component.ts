import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,
    //  private dialog: MatDialog
     ) { }

  ngOnInit(): void {
  }

  logOut(){
      sessionStorage.removeItem('token');
      // this.dialog.closeAll();
     this.router.navigate(["login"])
  }

  no(){
    // this.dialog.closeAll();
  }
}
