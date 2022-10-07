import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-id',
  template: `
    <h2>{{teamName}} Working as {{teamId}} in {{teamCompany}}</h2>`,
  styleUrls: ['./team-id.component.css']
})
export class TeamIdComponent implements OnInit {

  public teamId: any;
  public teamName: any;
  public teamRole: any;
  public teamCompany: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void{
    let id = (this.route.snapshot.paramMap.get('id'));
    this.teamId = id;
    
  }

}
