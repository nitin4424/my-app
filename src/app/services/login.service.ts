import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private currentUserObject : BehaviorSubject<User>;
  public currentUser: Observable<User>;


  constructor(private http: HttpClient) { 
  	this.currentUserObject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  	this.currentUser =  this.currentUserObject.asObservable();
  }


  public get currentUserValue() : User {
     return this.currentUserObject.value;
  }


  loginUser(formData){
  	return  this.http.post<any>(`${ environment.SERVER_URL }/login`, formData).pipe(map(user =>{
      if ((user.length) > 0) {

          localStorage.setItem('currentUser',JSON.stringify(user));
          this.currentUserObject.next(user);
          return user;
      }
      

      throw new Error(
      'Invalid Username or Password.'
      )
      return false;
      
  	  }));
  }


  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserObject.next(null);
  }


}



