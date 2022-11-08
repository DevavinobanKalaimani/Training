import { Component } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { PasswordValidator } from './shared/password.validator';
import { SessionStorage } from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  user: any={};
  users: any=[];
  
  get username(){
    return this.registrationForm.get('name');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  get mobile(){
    return this.registrationForm.get('mobile');
  }

  get age(){
    return this.registrationForm.get('age');
  }

  
  onSubmit(){
    console.log(this.registrationForm.value);
    this.user = Object.assign(this.user, this.registrationForm.value);
    this.addUser(this.user);
    this.setSessionStorage(this.user);
    this.registrationForm.reset();
  }

  addUser(user: any){

    if(localStorage.getItem('Users')){
      this.users = JSON.parse(localStorage.getItem('Users')as any);
      this.users = [...this.users, user];
    }else{
      this.users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(this.users));
  }

  removeUser(){
    localStorage.clear();
  }

  setSessionStorage(user: any){
   
    if(sessionStorage.getItem('Users')){
      this.users = JSON.parse(localStorage.getItem('Users')as any);
      this.users = [...this.users, this.user];
    }else{
      this.users = [this.user];
    }
    sessionStorage.setItem('Users', JSON.stringify(this.users));
  }
  delSessionStorage(){
    sessionStorage.clear();
  }




  constructor(private fb: FormBuilder, private localst: LocalStorageService, private sessionst: SessionStorageService){}

  registrationForm = this.fb.group({
    name : ['', [Validators.required,Validators.pattern(/^[A-Za-z\s]+$/)]],
    email: ['', [Validators.required,Validators.email]],
    mobile: ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]],
    age: ['', [Validators.required, Validators.min(18), Validators.max(60)]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  }, {validator: PasswordValidator});

  title: any;
  
 loadApiData(){
  this.registrationForm.patchValue({
    name: 'Deva',
    email: 'deva@gmail.com',
    mobile: '0123456789',
    age: '21',
    password: '',
    confirmPassword: ''
  })
 }



}


  





   






