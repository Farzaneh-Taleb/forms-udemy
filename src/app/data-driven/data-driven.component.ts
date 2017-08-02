import { Component,  } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent {

  myForm: FormGroup ;

  constructor() {
    this.myForm = new FormGroup({
      'username': new FormControl() ,
      'password': new FormControl(),
      'email': new FormControl()
    });

  }
  onSubmit = function () {
console.log(this.myForm) ;
  };



}
