import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginHere(regForm:NgForm){
    // this.formModul.hide();
    console.log(regForm)
    regForm.value.email
  }
}

