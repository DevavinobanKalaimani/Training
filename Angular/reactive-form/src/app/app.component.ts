import { Component } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { PasswordValidator } from './shared/password.validator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

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
    alert('Your registration has been successfully completed')
    
  }


  constructor(private fb: FormBuilder){}

  registrationForm = this.fb.group({
    name : ['', [Validators.required,Validators.pattern(/^[A-Za-z\s]+$/)]],
    email: ['', [Validators.required,Validators.email]],
    mobile: ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]],
    age: ['', [Validators.required, Validators.min(18), Validators.max(60)]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  }, {validator: PasswordValidator});

  // // registrationForm = new FormGroup({

  //   name:            new FormControl(''),
  //   email:           new FormControl(''),
  //   mobile:          new FormControl(''),
  //   age:             new FormControl(''),
  //   password:        new FormControl(''),
  //   confirmPassword: new FormControl('')

  // })
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
reset(){
  // this.registrationForm.reset();
  window.location.reload();
    
  }
}


  





   






