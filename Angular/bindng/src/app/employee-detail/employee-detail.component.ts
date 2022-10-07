import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h2>Employee Detail</h2>
  <ul *ngFor = "let employee of employees">
  <li>{{employee.name}}</li>
  </ul>
`,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees: any= [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(){
    this.employees = this._employeeService.getEmployees();
  }

}