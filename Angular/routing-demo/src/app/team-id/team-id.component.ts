import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-team-id',
  template: `
    <h2 style = "text-align:center">You Selected {{teamId}}</h2>
    <a (click) = "goPrevious()"> Previous </a>
    <a (click) = "goNext()"> Next </a>
    `,
  styleUrls: ['./team-id.component.css']
})
export class TeamIdComponent implements OnInit {

  public teamId: any;
  // public teamRole: any;
  // public teamCompany: any;
  // public teamName: any;
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void{
    
    // let id = (this.route.snapshot.paramMap.get('id'));
    // this.teamId = id;
    this.route.paramMap.subscribe((params: ParamMap) =>{
     let id = params.get('id');
     this.teamId = id;
      
    });

    // let role = (this.route.snapshot.paramMap.get('role'));
    // this.teamRole = role;
    // this.route.paramMap.subscribe((params: ParamMap) =>{
    //   let role = params.get('role');
    //   this.teamRole = role;
    // });

    // let company = (this.route.snapshot.paramMap.get('company'));
    // this.teamCompany = company;
    // this.route.paramMap.subscribe((params: ParamMap) =>{
    //   let company = params.get('company');
    //   this.teamCompany = company;
    // });

    // let name = (this.route.snapshot.paramMap.get('name'));
    // this.teamName = name;
    // this.route.paramMap.subscribe((params: ParamMap) =>{
    //   let name = params.get('name');
    //   this.teamName = name;
    // });
   }

  goPrevious(){
    let previousId = parseInt(this.teamId) - 1;
    this.router.navigate(['/team', previousId]);
  }
  goNext(){
    let nextId = parseInt(this.teamId) + 1;
    this.router.navigate(['/team', nextId]);
  }

}
 

