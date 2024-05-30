import { Component } from '@angular/core';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-seminar-page',
  templateUrl: './seminar-page.component.html',
  styleUrls: ['./seminar-page.component.scss']
})
export class SeminarPageComponent {
  // starIcon = faStar;
  gridhide:boolean=false;

  gridHide(){
    console.log(this.gridhide)
    this.gridhide = !this.gridhide;
    console.log(this.gridhide)
  }
}
