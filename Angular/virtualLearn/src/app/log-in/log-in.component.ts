import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {LogInService} from 'src/app/services/login.service'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {


  inputForm!:FormGroup;

  constructor(private service: LogInService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.inputForm = this.fb.group({
      name: this.fb.control(null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
      password: this.fb.control(null, [Validators.required])
    })

  }

  onEnter(event: any,password:any){
    if(event.keyCode == 13){
      this.onSubmit();
    }
  }

  onSubmit(){

    const body = {
      'userName': this.inputForm.value.name,
      'password': this.inputForm.value.password
    }

    if(this.inputForm.invalid){
      alert("Please fill all the required form");
    }else{

    
    this.service.logIn(body).subscribe({
      next: (data) => {
      
        console.log(data);
        let token: any = data.headers.get('jwt-token');
        
        sessionStorage.setItem('token', token);
        // alert(data)
       
      },
      error: (e) => {
        alert(e.error)
      },
      complete: () => {
        alert('Login successfull');

        if(sessionStorage.getItem('token')){
        this.router.navigate(['home'])
        }else{
          alert('Invalid Credentials')
        }
      }
    }) 
  }
  }
}
