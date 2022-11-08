import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminComponent } from '../admin/admin.component';
import { SuperadminComponent } from '../superadmin/superadmin.component';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {

  public variable = false;
  public symbol = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClick(){
    this.variable = !this.variable;
    this.symbol = !this.symbol;
  }

  superAdmin(){
    this.dialog.open(SuperadminComponent, {height:'754px', width:'1234px'});
  }
  admin(){
    this.dialog.open(AdminComponent,{height:'754px', width:'1234px'} );
  }
}