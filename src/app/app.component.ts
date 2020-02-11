import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './services/login.service';
import { User } from './models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

    currentUser: User;
   // userData : String;

	constructor( private loginService: LoginService, private router: Router){
       this.loginService.currentUser.subscribe( x=> this.currentUser = x);
	}

	ngOnInit(){
			//this.userData =  localStorage.getItem('currentUser');
	}

	saveData(myForm : NgForm){
		console.log(myForm.value);
	}

	logout(){
		this.loginService.logout();
		this.router.navigate(['/login']);
	}

}

