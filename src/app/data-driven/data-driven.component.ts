import { Component,  } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent {

  myForm: FormGroup ;
  genders= [
    'male',
    'female'
  ]

  constructor() {
    this.myForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('MAX' , Validators.required) ,
        'email': new FormControl('' , [Validators.required ])
      }),
      'password': new FormControl('' , Validators.required),
      'gender': new FormControl('male')
    });

  }
  onSubmit = function () {
console.log(this.myForm) ;
  };



}
