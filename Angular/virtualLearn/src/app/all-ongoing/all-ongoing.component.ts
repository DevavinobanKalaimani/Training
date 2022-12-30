import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-all-ongoing',
  templateUrl: './all-ongoing.component.html',
  styleUrls: ['./all-ongoing.component.css']
})
export class AllOngoingComponent implements OnInit {
  allCourses: any;

  constructor(private service: HomeService, private router: Router) { }

  ngOnInit(): void {
    this.getAllOngoing();
  }

  toHome(){
    this.router.navigate(['home'])
  }
  getAllOngoing(){
    this.service.getAllOngoing().subscribe(data => {
      console.log(data);
      this.allCourses = data;
     
    })
  }

  getOverview(courseId: any, courseName: any){

    sessionStorage.setItem('courseId', courseId);
    sessionStorage.setItem('courseName', courseName)
    this.router.navigate(['overview'])
    console.log(courseId);
    
   }
}
