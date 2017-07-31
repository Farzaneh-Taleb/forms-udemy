import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent  {
user = {
  username : 'Max' ,
  password : 'ttt' ,
  email : 'vhris'
}

 onSubmit(form: NgForm) {
   console.log(this.user) ;
 }

}
