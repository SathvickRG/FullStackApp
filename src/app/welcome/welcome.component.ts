import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import {AppComponent} from '../app.component' //import a component
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

   name = ''
  welcomeMessage = 'WELCOME WORKS' //js
  // message2 : string = 'welcome TS '  //ts
  //ActivatedRoute - which route is currently active //dependencyinjec
  constructor(private route:ActivatedRoute) 
  {

  }

  ngOnInit() {
    console.log(this.welcomeMessage)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']  //gives snapshot of the parameter passed
  }

}

