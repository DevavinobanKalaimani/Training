import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isValue: number = 1;

  all = true;
  popular = false;
  newest = false;



  ongoing: any;
  categories: any;
  allCourses: any;
  popularCourse: any;
  newCourse: any;
  topCourse: any;

  businessCourse: any;
  designCourse: any;
  headCourse: any;
  name: any;




  constructor(private service: HomeService, private router: Router) { }

  ngOnInit(): void {
   

    this.service.getName().subscribe(data => {
      this.name = JSON.parse(data);
      // console.log(this.name);
    })

    this.service.getBanner().subscribe(data => {
      this.headCourse = JSON.parse(data);
      console.log(this.headCourse);  
    })

      this.service.getCategory().subscribe(data => {
      this.categories = data;
      // console.log(this.categories);      
    })

     this.service.getOngoingCourse().subscribe(data => {
      this.ongoing = JSON.parse(data);
      console.log(this.ongoing);
    })
 this.allClick();

  }

  toggle(num: any) {
    this.isValue = num;
  }

  allClick() {
    this.all = true;
    this.popular = false;
    this.newest = false;
    this.toggle(1);
    
    this.getAllCourses((document.getElementById('btn1')as HTMLInputElement).value);

  }
  popularClick() {
    this.all = false;
    this.popular = true;
    this.newest = false;
    this.toggle(2);

    this.getAllCourses((document.getElementById('btn2')as HTMLInputElement).value);

  }
  newestClick() {
    this.all = false;
    this.popular = false;
    this.newest = true;
    this.toggle(3);

    this.getAllCourses((document.getElementById('btn3')as HTMLInputElement).value);
  }


  PlayPause(x:any) {

    let video: any = document.getElementById(x);
    let Btn: any = document.getElementById('play-pause');


    if (video.paused) {
      Btn.className = 'pause'
      video.play();

    } else {
      Btn.className = 'play';
      video.pause();

    }
  }


  togglePlayPause(i:any) {

    let video: any = document.getElementById(i);
    let btn: any = document.getElementById('pause-play');


    if (video.paused) {
      btn.className = 'pause';
      video.play();

    } else {
      btn.className = 'play';
      video.pause();

    }
  }

 getOverview(courseId: any){

  sessionStorage.setItem('courseId', courseId)
  this.router.navigate(['overview'])
  console.log(courseId);
  
 }

 getAllCourses(choice: any){
  const body = {
    'choice': choice,
    'view': ''
  }
  this.service.getCourses(body).subscribe(data => {
    this.allCourses = data;
    console.log(this.allCourses);
  })
 }

}
