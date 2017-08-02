import { Component,  } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent {

  myForm: FormGroup ;

  constructor() {
    this.myForm = new FormGroup({
      'username': new FormControl('MAX' , Validators.required) ,
      'password': new FormControl('' , Validators.required),
      'email': new FormControl('' , [Validators.required ,
        Validators.pattern('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/')])
    });

  }
  onSubmit = function () {
console.log(this.myForm) ;
  };



}
