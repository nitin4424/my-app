import { Injectable }  from '@angular/core';
import { HttpHandler, HttpEvent, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';

export class Jwt implements HttpInterceptor{
	constructor(private loginService: LoginService){

	}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.loginService.currentUserValue;
        if (currentUser && currentUser) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser}`
                }
            });
        }

        return next.handle(request);
    }


}
