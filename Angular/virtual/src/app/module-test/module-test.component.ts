import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-module-test',
  templateUrl: './module-test.component.html',
  styleUrls: ['./module-test.component.css']
})
export class ModuleTestComponent implements OnInit {

  modulequestions: any;

  i: any = 0;
  arrowRight = true;
  button = false;
  leftArrow = true;

  constructor(private test: TestService) { }

  ngOnInit(): void {
    this.getQuestions()
  }

  getQuestions() {
    const body = {
      "courseId": sessionStorage.getItem('courseId'),
      "testId": sessionStorage.getItem('testId')
    }
    this.test.displayTest(body).subscribe(data => {
      this.modulequestions = data;
      console.log(this.modulequestions);

    })
  }


  increaseI() {

    if (this.i == this.modulequestions.questions.length - 1) {
      this.arrowRight = false;
      this.button = true;
    } else {
      this.i = ++this.i
      this.leftArrow = true;
      console.log(this.i);
    }
  }

  DecreaseI() {

    if (this.i <= 4) {
      this.leftArrow = true;
      this.i = --this.i;
      console.log(this.i);

      this.button = false;
      this.arrowRight = true;
    } else {
      // this.leftArrow = false;
    }
  }
}
