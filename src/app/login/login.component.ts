import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  username = 'sathvick'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false;

  //Router
  //Dependency Injection
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 
  handleLogin()
  {
    // console.log(this.username);

    // invalid credential check
    if(this.username === "sathvick" && this.password === 'dummy')
    {
      this.router.navigate(['Welcome', this.username]) //route to specific page
     
      this.invalidLogin = false }
    else {
       this.invalidLogin = true}
  }
  
}

