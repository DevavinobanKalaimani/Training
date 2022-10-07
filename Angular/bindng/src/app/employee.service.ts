import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
    {"id":1, "name":"Deva", "age":21},
    {"id":2, "name":"sriram", "age":21},
    {"id":3, "name":"subbu", "age":22},
    {"id":4, "name":"guna", "age":20}
    ];
  }
}
