import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
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
  constructor(private router: Router,
  private HardcodedAuthenticationService: HardcodedAuthenticationService) 
  { }
  

  ngOnInit(): void {
  }
 
  handleLogin()
  {
        // invalid credential check
  // if(this.username==="sathvick" && this.password==="dummy")

  if(this.HardcodedAuthenticationService.authenticate(this.username,this.password))
    {
      //redirect to welcome page
      this.router.navigate(['welcome', this.username]) //route to specific page
      this.invalidLogin = false 
    }
    else {
       this.invalidLogin = true}
  }
  
}

