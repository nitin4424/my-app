import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  constructor() { }


  myGroup = new FormGroup({
  	        firstName : new FormControl(''),
            address : new FormGroup({
            	street: new FormControl(''),
            	pincode: new FormControl('')
            }),
        }
  	);

  name = new FormControl('');

  ngOnInit() {
  }

  updateName(){
  	this.name.setValue('Sachin');
  }

  onSubmit(){
  	console.warn(this.myGroup.value);
  }

}
