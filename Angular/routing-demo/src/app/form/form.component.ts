import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../enroll.service';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  topics = ['Angular', 'React', 'NodeJS'];
  topicHasError = true;
  submitted = false;

  userModel = new User('', 'deva@gmail.com', 8899087600, 'default', 'Morning', true);

    validateSelect(value: any){
      if(value === 'default'){
        this.topicHasError = true;
      }else{
        this.topicHasError = false;
      }

    }

      onSubmit(){
        this.submitted = true;
        this._enrollService.enroll(this.userModel)
        .subscribe(
          data => console.log('Success', data),
          error => console.log('Error!', error))
        
        alert('Your Enrollment has been submitted')
        
      }
  constructor(private _enrollService: EnrollService) { }

  ngOnInit(): void {
  }

}
