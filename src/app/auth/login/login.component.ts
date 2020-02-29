import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router}from '@angular/router';
import {AuthService} from '../auth.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  submitted = false;
  error: {};
  loginError: string;
  
  constructor(private authservice:AuthService,
              private router:Router,
              private fb:FormBuilder ) { }

  ngOnInit() {
    
    this.loginForm=this.fb.group({
        username :['',Validators.required],
        password :['',Validators.required]
      }); 
      this.authservice.logout();
  }
  
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }
  
  onSubmit()
  {
    debugger;
    this.submitted=true;
    this.authservice.login(this.username.value,this.password.value).subscribe((data)=>{
    if(this.authservice.isLoggedIn())
      {
           this.router.navigate(['./admin']);
      }
      else
      {         
        this.loginError = 'Username or password is incorrect.';
      }
    },
      error=>this.error=error
    );
  }

}

