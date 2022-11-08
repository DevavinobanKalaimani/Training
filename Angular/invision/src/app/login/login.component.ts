import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private api: ApiService,
    private router: Router
    ) { }

  user: any;
  loginn=false;


  ngOnInit(): void {
    this.api.getUser().subscribe(data => {
      this.user = data;
    })  
  }


  loginForm = this.fb.group({
    name : ['', [Validators.required,Validators.pattern(/^[A-Za-z\s]+$/)]],
    password: ['', [Validators.required]]
  })

  
  login(){
    this.api.getUser()
    .subscribe(data => {
      for(let details of data){
       if(details.name === this.loginForm.get('name')?.value && details.password === this.loginForm.get('password')?.value){
        this.loginn=true;
        break;
       }
      }if(this.loginn==true){
        alert('Login Success:)');
        this.loginForm.reset();
        this.router.navigateByUrl('/home')
      }
      else{
        alert('user not found:(');
      }
  });
      
  }
  
}
