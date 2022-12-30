
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { OverViewService } from '../services/overview.service';
// import * as $ from "jquery";
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {

  isValue: any;
  indexes: any = [];
  overView = true;
  chapterView = false;
  details: any;
  chapters: any;
  hour: any;
  array: any = [];
  length: any;
  noEnroll = false;
  BTN: any = false;
  courseTitle: any;
  osn: any;
  image: any = [
    'assets/Virtuallearn_Web (1)/Green Tick.svg',
    'assets/Virtuallearn_Web (3)/Group Dot.svg',
    'assets/Virtuallearn_Web (2)/Grey Dot.svg'
  ]

  srcURL: any = this.image[2];

  videoSource: any = [
    'http://res.cloudinary.com/dghcx4s2l/video/upload/v1669871971/video/mmynuyifnbygkluhpvuv.mp4'
  ]
  currentIndex = 0;
  activeVideo = this.videoSource[this.currentIndex];
  userChapter: any;
  currentLessonIndex: any;
  pauseTime: any;
  lessonLength: any;
  videoStatus: any;
  icon: any = true;
  someSubscription: any;

  constructor(private service: OverViewService, private router: Router) {

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.someSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;        
      }
    });
  }
 
  ngOnInit(): void {

    this.getOverView();
    this.getChapter();
    this.courseTitle = sessionStorage.getItem('courseName');
    this.getVideoProgress();

    this.service.getVideoData().subscribe(data => {
      console.log(data);
    })

    this.getProgress();
  }

  ngOnDestroy() {
    if (this.someSubscription) {
      this.someSubscription.unsubscribe();
      console.log('hi');
      
    }
  }


  getVideoProgress() {

    this.service.getProgress().subscribe(data => {
      this.videoStatus = data;
      for (let i = 1; i < this.videoStatus.ongoingSerialNumber; i++) {
        this.indexes.push(i);
      }
      this.osn = this.videoStatus.ongoingSerialNumber
      console.log(this.osn);
      
      console.log(this.videoStatus);
      sessionStorage.setItem('videoArrayLength', this.videoStatus.allVideoStatus.length);
      sessionStorage.setItem('onGoingSerialNumber', JSON.stringify(this.videoStatus.ongoingSerialNumber - 1) as any)
      sessionStorage.setItem('ongoingserial', JSON.stringify(this.videoStatus.ongoingSerialNumber) as any)
      sessionStorage.setItem('videStatus', this.videoStatus.ongoingVideo.status);


    })
  }


  toggle(num: any) {
    this.isValue = num;
  }

  toHome() {
    this.router.navigate(['home'])
  }
  onGoing() {
    this.chapterView = false;
    this.overView = true;
    this.toggle(1);
  }

  onOverview() {
    this.overView = true;
    this.chapterView = false
    this.toggle(1);

    if (this.chapters?.isEnrolled == null) {
      this.overView = true;
      this.chapterView = false;
      this.noEnroll = false;
      this.BTN = true;
    } else {
      this.BTN = false
    }
  }
  onChapter() {
    this.overView = false;
    this.chapterView = true;
    this.toggle(2);

    if (this.chapters?.isEnrolled != null) {
      this.overView = false;
      this.chapterView = true;
    }
    else {
      this.overView = false
      this.chapterView = false;
      this.noEnroll = true;
    }
  }

  getOverView() {
    this.service.getOverview().subscribe(data => {
      this.details = data;
      // console.log(this.details);  
    })
  }
  getChapter() {
    this.service.getChapters().subscribe(data => {
      this.chapters = data;
      // console.log(this.chapters);
      this.hour = (this.chapters.listOfChapters.courseContent.totalDuration / 3600).toFixed(2);


      this.length = this.chapters.listOfChapters.totalChapters[0].chapters.length;
      for (var i = 0; i < this.length; i++) {
        this.array.push('false')
      }


    })

  }
  openDropdown(index: any) {
    this.array[index] = !this.array[index];
  }

  onClickPlaylistVideo(item: any, index: any, x: number, serialNumber: any) {
    sessionStorage.setItem('chapterId', index)
    sessionStorage.setItem('serialNumber', serialNumber);
    // sessionStorage.setItem('currentURL',item)
    // console.log();


    if (this.chapters.isEnrolled != null && this.details?.isEnrolled != null) {
      this.currentIndex = index;
      this.activeVideo = item;

      this.currentLessonIndex = this.chapters.listOfChapters.totalChapters[0].chapters[index].lessons[x].serialNumberOfLesson
      sessionStorage.setItem('currentLessonIndex', this.currentLessonIndex)

      this.lessonLength = this.chapters.listOfChapters.totalChapters[0].chapters[index].lessons.length
      sessionStorage.setItem('lessonLength', this.lessonLength)
    }

    if (serialNumber <= (sessionStorage.getItem('ongoingserial') as any)) {
      this.currentIndex = index;
      this.activeVideo = item;
    }
    else {
      this.currentIndex = 0;
      this.activeVideo = this.videoSource
      alert('Process not allowed')
    }
  }

  getPauseTime() {
    var myVideo: any = document.getElementById('singleVideo');
    this.pauseTime = myVideo.currentTime;

    if (myVideo.paused) {
      this.videoPause(this.pauseTime);
    }
  }

  videoPause(pauseTime: any) {

    const body = {
      "courseId": sessionStorage.getItem('courseId'),
      "videoCompleted": "false",
      "pauseTime": pauseTime,
      "videoSerialNumber": this.currentLessonIndex
    }

    this.service.UpdateProgress(body).subscribe((data: any) => {
      this.userChapter = data;
      console.log(this.userChapter.message);

      if (this.userChapter?.message === 'Video Paused') {
        sessionStorage.setItem('videoPausePlayStatus', this.userChapter.message)
        this.srcURL = this.image[1];

      }
    });

  }

  videoEnd(lessonIndex: any) {

    const body = {
      "courseId": sessionStorage.getItem('courseId'),
      "videoCompleted": "true",
      // "pauseTime": this.pauseTime,
      "videoSerialNumber": this.currentLessonIndex
    }

    this.service.UpdateProgress(body).subscribe((data: any) => {
      this.userChapter = data;
      console.log(this.userChapter.message);

      // console.log(this.videoStatus.ongoingSerialNumber - 1);
      // console.log(lessonIndex);
      let flag = 0;
      for (let i of this.indexes) {
        if (lessonIndex == i) flag = 1;
      }
      if (flag == 0) this.indexes.push(lessonIndex);
      console.log(this.indexes);
      console.log(lessonIndex);



      if (this.userChapter?.message === 'Lesson completed') {
        sessionStorage.setItem('videoPausePlayStatus', this.userChapter.message)
        this.srcURL = this.image[0];
        this.icon = false
      }


    });

  }

  getProgress() {

    if (sessionStorage.getItem('videoArrayLength') as any == 0 &&
      sessionStorage.getItem('onGoingSerialNumber') as any >= (sessionStorage.getItem('serialNumber') as any) &&
      sessionStorage.getItem('videStatus') == 'false' &&
      sessionStorage.getItem('flag') as any == 2) {

      this.srcURL = this.image[0]


    }
    else if (sessionStorage.getItem('videoArrayLength') as any >= 1 || sessionStorage.getItem('videStatus') == 'true') {
      this.srcURL = this.image[1]
    }
    else if (sessionStorage.getItem('videoArrayLength') as any == 0 && sessionStorage.getItem('flag') as any == 0) {
      this.srcURL = this.image[2]
    }
  }


  goToTest() {
    sessionStorage.setItem('testId', this.chapters?.listOfChapters?.totalChapters[0].chapters[sessionStorage.getItem('chapterId') as any].test._id)
    this.router.navigate(['test']);
  }
  show(a: any) {
    console.log(a);

  }

  check(index: any) {

    let flag: any = 0;
    for (let i of this.indexes) {
      if (index == i) flag = 2;
      if (index === this.osn) flag = 1;     
      
    }
    if (flag == 0) {
      this.srcURL = this.image[2];
      this.icon = true;
    }
    else if (flag == 2) {
      this.srcURL = this.image[0];
      this.icon = false;
    }
    else if (flag == 1) {
      this.srcURL = this.image[1];
      this.icon = false;
    }
  }

}

