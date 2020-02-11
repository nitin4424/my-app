import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Main, Address } from '../model/main.model'

@Component({
  selector: 'app-model-driven-fb',
  templateUrl: './model-driven-fb.component.html',
  styleUrls: ['./model-driven-fb.component.css']
})
export class ModelDrivenFbComponent implements OnInit {

/*  myGroup = this.fb.group({
    personalData : this.fb.group({
      firstName : [''],
      email: ['']
    }),
    address: this.fb.group({
      street: [''],
      pincode: ['']
    })
  });*/

  public myGroup : FormGroup;
  public fn: String;
  public em: String;
  public st: String;
  public pn: Number;
  
  constructor(private fb: FormBuilder) {

   }

  ngOnInit() {
      this.myGroup  = this.fb.group({
         personalData: this.fb.group( new Main(this.fn, this.em)),
         address: this.fb.group( new Address(this.st, this.pn))
      });
  }

  onSubmit(){
  	console.warn(this.myGroup.value);
  }

}
