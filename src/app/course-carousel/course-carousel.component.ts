import { Component, Input } from '@angular/core';
import { Course } from '../core/models/course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-carousel',
  templateUrl: './course-carousel.component.html',
  styleUrls: ['./course-carousel.component.scss']
})
export class CourseCarouselComponent {

  @Input() courses: Observable<Course[]>;
}
