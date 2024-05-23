import { Component, Input } from '@angular/core';
import { Coach } from '../core/models/coach';

@Component({
  selector: 'app-coach-snippet',
  templateUrl: './coach-snippet.component.html',
  styleUrls: ['./coach-snippet.component.scss']
})
export class CoachSnippetComponent {
  coachUrl = "/coach/";

  @Input() coach: Coach;

  openCoachUrl(coach: Coach) {
    location.href = this.coachUrl + coach.id;
  }
}
