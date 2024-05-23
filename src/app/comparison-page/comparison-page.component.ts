import { Component } from '@angular/core';
import { Course } from '../core/models/course';
import { SearchBarType } from '../search-bar/search-bar.component'
import { Observable, of } from 'rxjs';
import { Coach } from '../core/models/coach';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comparison-page',
  templateUrl: './comparison-page.component.html',
  styleUrls: ['./comparison-page.component.scss']
})
export class ComparisonPageComponent {
  courses: Course[] = [];
  searchType = SearchBarType.Course;
  coaches: Observable<Coach[]> = of([]);

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.coaches = this.http.get<Coach[]>(environment.baseUrl + '/homepage/popular-coaches')
  }

  updateCourse(courseNumber: number, selectedCourse: Course) {
    this.courses[courseNumber] = selectedCourse;
  }
}
