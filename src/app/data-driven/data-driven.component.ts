import { Component,  } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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

  constructor( private formBuilder: FormBuilder) {
/*    this.myForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('MAX' , Validators.required) ,
        'email': new FormControl('' , [Validators.required ])
      }),
      'password': new FormControl('' , Validators.required),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([new FormControl('Cooking')
      ])
    });*/
this.myForm = formBuilder.group({
    'userData': formBuilder.group({
      'username': ['MAX', [Validators.required , this.exampleValidator]],
      'email': ['', [Validators.required]]
    }),
    'password': ['', Validators.required],
    'gender': ['male'],
    'hobbies': formBuilder.array([['Cooking']])
  });
  }
  onAddHobby () {
    (<FormArray> this.myForm.controls['hobbies']).push(new FormControl('' , Validators.required)) ;
  }
  onSubmit = function () {
console.log(this.myForm) ;
  };

 exampleValidator (control: FormControl): {[s: string]: boolean} {
  if (control.value === 'Example') {
    return {example: true} ;
  }
  return null ;
}
}
