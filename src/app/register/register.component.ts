import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'secure' : 'false'
  })
};


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private Roles = ['User','Admin','Uploader'];
  private SERVER_URL = "http://localhost:3000/";

  rForm = this.fb.group({
        'username': ['', Validators.required],
        'email': ['', [Validators.required, Validators.email]],
        'password': ['',Validators.required],
        'role': ['', Validators.required] 
  });

  constructor(private fb : FormBuilder, private httpClient: HttpClient, private router: Router, private mainService: MainService) { }

  ngOnInit() {

  }

  private username = new FormControl('');
  private email = '';

  registerUser(){
  	let formData = this.rForm.value;

  	this.mainService.registerUser(formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );

    this.router.navigate(['/getusers']);
  }

}
