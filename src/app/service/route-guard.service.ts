import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService, 
    private router:Router) { }

  //method to activate when user is logged in
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.hardcodedAuthenticationService.isUserLoggedIn())
      return true;
    //route to only login page
    this.router.navigate(['login']);
     return false;
  }

}

