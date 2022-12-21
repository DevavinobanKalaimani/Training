import { Component, OnInit } from '@angular/core';
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




  constructor(private service: HomeService) { }

  ngOnInit(): void {

    this.service.getOngoingCourse().subscribe(data => {
      this.ongoing = JSON.parse(data);
      // console.log(this.ongoing);
    })

    this.service.getCategory().subscribe(data => {
      this.categories = JSON.parse(data);
      // console.log(this.categories);      
    })

    this.service.getAll().subscribe(data => {
      this.allCourses = JSON.parse(data);
      // console.log(this.allCourses);
    })

    this.service.getPopular().subscribe(data => {
      this.popularCourse = JSON.parse(data);
      console.log(this.popularCourse);
    })

    this.service.getNewest().subscribe(data => {
      this.newCourse = JSON.parse(data);
      // console.log(this.newCourse);
    })

    this.service.getTopCourse().subscribe(data => {
      this.topCourse = JSON.parse(data);
      console.log(this.topCourse);

      if (this.topCourse[2]) {
        this.businessCourse = this.topCourse[2].popularCourseInEachCategoryList
        console.log(this.businessCourse);

      }

      if (this.topCourse[0]) {
        this.designCourse = this.topCourse[0].popularCourseInEachCategoryList
        console.log(this.designCourse);

      }
    })

  }

  toggle(num: any) {

    this.isValue = num;
  }

  allClick() {
    this.all = true;
    this.popular = false;
    this.newest = false;
    // this.isValue = 1;
    this.toggle(1);

  }
  popularClick() {
    this.all = false;
    this.popular = true;
    this.newest = false;
    // this.isValue = 2;
    this.toggle(2);


  }
  newestClick() {
    this.all = false;
    this.popular = false;
    this.newest = true;
    // this.isValue = 3;
    this.toggle(3);


  }


  togglePlayPause() {


    let video: any = document.querySelector('.video');
    let btn: any = document.getElementById('play-pause');

    // console.log(video);


    if (video.paused) {
      btn.className = 'pause';
      video.play();

    } else {
      btn.className = 'play';
      video.pause();

    }
  }

  Toggle() {

    let video: any = document.querySelector('.Video');
    let btn: any = document.getElementById('pause-play');


    if (video.paused) {
      btn.className = 'pause';
      video.play();

    } else {
      btn.className = 'play';
      video.pause();

    }
  }


}
