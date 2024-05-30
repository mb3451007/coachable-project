import { Component, Input } from '@angular/core';
import { Course } from '../core/models/course';

@Component({
  selector: 'app-course-snippet',
  templateUrl: './course-snippet.component.html',
  styleUrls: ['./course-snippet.component.scss']
})
export class CourseSnippetComponent {

  courseUrl = "/course/";

  @Input() course: Course;

  openCourseUrl(course: Course): void {
    location.href = this.courseUrl + course.id;
  }

  getAvailabilityText() {
    if (this.course.accessInMonths == 0) return "Für immer";
    else return this.course.accessInMonths + " Monate";
  }

  getLanguage() {
    switch(this.course.language) {
      case 1: return "Deutsch";
      case 2: return "Englisch";
      case 3: return "Französisch";
      default: return false;
    }
  }
}
