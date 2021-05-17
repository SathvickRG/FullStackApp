import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {


  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService) { }
  
  //method to activate when user is logged in
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("Reached Route guard");
    if (this.hardcodedAuthenticationService.isUserLoggedIn())
      return true;

    else return false;
  }

}

