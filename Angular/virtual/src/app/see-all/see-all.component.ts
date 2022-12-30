import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-see-all',
  templateUrl: './see-all.component.html',
  styleUrls: ['./see-all.component.css']
})
export class SeeAllComponent implements OnInit {
  
  allCourses: any;
  choice: any;
  allOngoing: any;


  constructor(private service: HomeService, private router: Router) { }

  ngOnInit(): void {


    this.getAllCourse();
    this.getBusinessCourse();
    this.getAllCategories();
    this.choice = sessionStorage.getItem('choice')
  }

  toHome(){
    this.router.navigate(['home'])
  }

  
  getAllCourse(){
    const body = {
      'choice': sessionStorage.getItem('choice'),
      'view': sessionStorage.getItem('value')
     }
     this.service.getCourses(body).subscribe(data => {
      this.allCourses = data
      console.log(this.allCourses);      
     })
  }

  getBusinessCourse(){
    const body = {
      'text': sessionStorage.getItem('choice'),
      'choice' : sessionStorage.getItem('businessValue')
    }
    this.service.getBusinessCourses(body).subscribe(data => {
      this.allCourses = data;
      console.log(this.allCourses);
      
      
    })
  }

  getOverview(courseId: any, courseName: any){

    sessionStorage.setItem('courseId', courseId);
    sessionStorage.setItem('courseName', courseName)
    this.router.navigate(['overview'])
    console.log(courseId);
    
   }


  getAllCategories(){

    const body = {
      'text': sessionStorage.getItem('choice'),
      'choice' : sessionStorage.getItem('value')
    }
    this.service.getBusinessCourses(body).subscribe(data => {
      this.allCourses = data;
      console.log(this.allCourses);
      
      
    })
    
   }
}
