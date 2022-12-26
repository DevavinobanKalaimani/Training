import { Component, HostListener, OnInit } from '@angular/core';
import { OverViewService } from '../services/overview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  isValue: number = 1;

  overView = true;
  details: any;
  chapters: any;
  hour: any;
  array:any=[];
  length:any;

  image:any = [
    'assets/Virtuallearn_Web (1)/Green Tick.svg',
    'assets/Virtuallearn_Web (3)/Group Dot.svg',
    'assets/Virtuallearn_Web (2)/Grey Dot.svg'
  ]

  videoSource:any = 'http://res.cloudinary.com/dghcx4s2l/video/upload/v1669871971/video/mmynuyifnbygkluhpvuv.mp4'
  

  constructor(private service: OverViewService) { }

  ngOnInit(): void {


    this.service.getOverview().subscribe(data => {
      this.details = data;
      // console.log(this.details);   
    })

    this.service.getChapters().subscribe(data => {
      this.chapters = data;
      // console.log(this.chapters);
      this.hour = (this.chapters.listOfChapters.courseContent.totalDuration / 60).toFixed(1);


      this.length=this.chapters.listOfChapters.totalChapters[0].chapters.length;
      for(var i=0;i<this.length;i++){
        this.array.push('false')
      }      
    })
  

    
  }



  toggle(num: any) {
    this.isValue = num;
  }

  onOverview() {
    this.overView = true;
    this.toggle(1);
  }
  onChapter() {
    this.overView = false
    this.toggle(2);
  }

  openDropdown(index: any) {
    this.array[index]=!this.array[index]; 
  }


  lessonVideo(url: any){

    if(url){
      this.videoSource = JSON.stringify(url)   
      console.log(this.videoSource);
    }
  }

}
