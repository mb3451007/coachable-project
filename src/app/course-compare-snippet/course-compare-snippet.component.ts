import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Coach } from '../core/models/coach';
import { Course } from '../core/models/course';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-course-compare-snippet',
  templateUrl: './course-compare-snippet.component.html',
  styleUrls: ['./course-compare-snippet.component.scss']
})
export class CourseCompareSnippetComponent {

  courseId = '';
  @Input() course: Course;

  coachUrl = "/coach/";
  courseUrl = "/course/";
  coaches: Observable<Coach[]>;
  otherCoaches: Observable<Coach[]>;
  otherCourses: Observable<Course[]>;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.courseId = params['id'] );
  }

  ngOnInit(): void {
    if (this.courseId) {
      this.getCourse(this.courseId);
      this.getCourseCoaches(this.courseId);
    }
    this.getOtherCourses();
    this.getOtherCoaches();
  }
  getOtherCoaches() {
    this.otherCoaches = this.coaches;
  }

  getCourse(courseId: string): void {
    this.http.get<Course>(environment.baseUrl + '/course/' + courseId).subscribe((data: Course) => 
      this.course = data
    );
  }

  getCourseCoaches(courseId: string): void {
    this.coaches = this.http.get<Coach[]>(environment.baseUrl + '/coach/byCourse/' + courseId)
  }

  getOtherCourses() {
    this.otherCourses = this.http.get<Course[]>(environment.baseUrl + '/course/byCoach/' + 532) 
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

  openCoachLink(coach: Coach) {
    location.href = this.coachUrl + coach.id;
  }

  hideImage(image: any) {
    image.style.display = 'none';
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

  openCourse(course: Course) {
    location.href = this.courseUrl + course.id;
  }
}
