import { Component } from '@angular/core';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-seminar-page',
  templateUrl: './seminar-page.component.html',
  styleUrls: ['./seminar-page.component.scss']
})
export class SeminarPageComponent {
  // starIcon = faStar;
  showHide:boolean=true;
 

  gridHide(){
   this.showHide = true
  }

  listHide(){
   this.showHide = false
  }
  openSearchBar() {
    throw new Error('Method not implemented.');
  }  
}
