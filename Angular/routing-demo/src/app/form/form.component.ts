import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  topics = ['Angular', 'React', 'NodeJS'];

  userModel = new User('Deva', 'deva@gmail.com', 8899087607, '', 'Morning', true);

  constructor() { }

  ngOnInit(): void {
  }

}
