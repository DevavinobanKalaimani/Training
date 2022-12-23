import { Component, OnInit } from '@angular/core';
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
  details0: any;
  details1: any;

  constructor(private service: OverViewService) { }

  ngOnInit(): void {


    this.service.getOverview().subscribe(data => {
      this.details = data;
      console.log(this.details);
      

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
}
