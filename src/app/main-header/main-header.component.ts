import { Component, ElementRef, OnDestroy, AfterViewInit, Renderer2, ViewChild, OnInit } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
// import{faPerson} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements AfterViewInit, OnDestroy {
  @ViewChild(RegistrationComponent) registration:RegistrationComponent
  @ViewChild(LoginComponent) login:LoginComponent
  showSearchButton = false;
  // personIcon=faPerson;
  

  constructor(private dialog:MatDialog) {}
 
  openSignUp(){
  this.registration.doSomeThing
}

openLogin(){
  this.login.loginHere
}
  // openDialogSingUp(e: Event){
  //   e.preventDefault()
  //   e.stopPropagation()
  //   this.dialog.open(RegistrationComponent,{
  //     width: '250px',
  //     autoFocus: false
  //   })
  // }
  // openDialogLogin(e: Event){
  //   e.preventDefault()
  //   e.stopPropagation()
  //   this.dialog.open(LoginComponent,{
  //     width:'250px',
  //     autoFocus: false

  //   })
  // }
  
  ngAfterViewInit() {
    this.showSearchButton = location.pathname.length > 1 && !location.pathname.includes('search');
  } 

  ngOnDestroy(): void {}

  openHomepage() {
    window.location.href="/";
  }

  openLoginModal() {
    throw new Error('Method not implemented.');
  }

  openSearchBar() {
    throw new Error('Method not implemented.');
  }  
}
