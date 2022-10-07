import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-list',
  template: `
    <h2 style = "text-align: center">Team List</h2>
    
    <div class = container>
    <ul class = "items">
    <li class = list (click) = onSelect(team) *ngFor = "let team of teams">
    <span class = "badge"> {{team.name}} </span> 
    </li>
    </ul></div>
  `,
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

 teams = [
    {'id' : 1, 'name': 'Deva',     'role':'SED',     'company':'RoboSoft Tech'},
    {'id' : 2, 'name': 'Anish',    'role':'Student', 'company':'DIAT Institute'},
    {'id' : 3, 'name': 'Subbu',    'role':'SED',     'company':'Zoho'},
    {'id' : 4, 'name': 'Satheesh', 'role':'SED',     'company':'Wipro'}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(team: any){
    this.router.navigate(['/team', team.id]);
    
  }

}
