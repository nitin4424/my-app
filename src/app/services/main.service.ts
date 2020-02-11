import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
	headers : new HttpHeaders({
		'Access-Control-Allow-Origin': '*',
		'secure': 'false'
	})
};

@Injectable({
  providedIn: 'root'
})

export class MainService {

  constructor(private http: HttpClient) {  }

  getUsers(){
     return  this.http.get<any>(`${environment.SERVER_URL}/getUser`);
  }

  registerUser(formData){
  	return this.http.post<any>(`{environment.SERVER_URL }/registerUser`, formData, httpOptions);

  }


}
