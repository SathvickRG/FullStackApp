import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // template: '<h1> {{title}}<\h1>',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'todo';
  name = 'project name';
  number = 32;
}
