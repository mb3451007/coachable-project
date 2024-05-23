import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Coach } from '../core/models/coach';

@Component({
  selector: 'app-coach-carousel',
  templateUrl: './coach-carousel.component.html',
  styleUrls: ['./coach-carousel.component.scss']
})
export class CoachCarouselComponent {
  @Input() coaches: Observable<Coach[]>;
}
