import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Coach } from '../core/models/coach';
import { Course } from '../core/models/course';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SearchBarType } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  searchType = SearchBarType.All;
  coaches: Observable<Coach[]> = of([]);
  coachUrl = "/coach/";
  courseUrl = "/course/";
  comparisonUrl = "/compare"
  searchUrl = "/search/"

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCoaches();
  }

  getCoaches(): void {
    this.coaches = this.http.get<Coach[]>(environment.baseUrl + '/homepage/popular-coaches')
  }

  openCoachUrl(coach: Coach) {
    location.href = this.coachUrl + coach.id;
  }

  openCourseUrl(course: Course) {
    location.href = this.courseUrl + course.id;
  }

  openComparisonPage() {
    location.href = this.comparisonUrl;
  }

  openSearchPage(param: String) {
    location.href = this.searchUrl + param
  }
}
