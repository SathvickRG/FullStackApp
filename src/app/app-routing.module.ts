
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path:'', component:LoginComponent}, //path with localhost:4200
  {path:'login', component:LoginComponent}, //path with localhost:4200/login
  {path:'welcome/:name', component:WelcomeComponent, canActivate:[RouteGuardService]}, //path with localhost:4200/welcome
  {path:'todos',component:ListTodosComponent, canActivate:[RouteGuardService]},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:'**', component:ErrorComponent}, //path with localhost:4200/anyvalue instead of comps 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
