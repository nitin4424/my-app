import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { first } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'secure' : 'false',
    'Access-Control-Allow-Headers': 'authorization, content-type'
  })
};


@Component({
  selector: 'app-validation-from',
  templateUrl: './validation-from.component.html',
  styleUrls: ['./validation-from.component.css']
})

export class ValidationFromComponent implements OnInit {
  private error = '';
  private returnUrl = '/home';
  loading = false;


  constructor(private fb: FormBuilder, private http : HttpClient, private router : Router, private loginService : LoginService) { }

	loginForm = this.fb.group({
	 'email': [''],
	 'password': ['']
	});

	loginUser(){

    let formData = this.loginForm.value; 

    if (this.loginForm.invalid) {  
      return;  
    }else{  

    this.loginService.loginUser(formData)
     .pipe(first())
            .subscribe(
                data => {
                   this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                    console.log(error);
                   
                });

          }

	}

	ngOnInit() {
	}

}
