import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// declare var window:any; 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  // formModul:any;
  
  constructor(){}
  // ngOnInit(): void {
    // this.formModul = window.bootstrap.Modal(
    //   document.getElementById("exampleModal")
    // )
    // console.log(window)
    // console.log(window.bootstrap.Modal)

  // }
  
  // show(){
  //   this.formModul.show();
  // }
  doSomeThing(regForm:NgForm){
    // this.formModul.hide();
    console.log(regForm)
    regForm.value.email,regForm.value.password
  }
}
