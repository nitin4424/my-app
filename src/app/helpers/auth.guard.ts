import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

	 constructor( private router: Router, private loginService: LoginService ) { }

	   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.loginService.currentUserValue;

        console.log(currentUser);
        if (currentUser) {
            return true;
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl : state.url } } );
        return false;
    }
}
