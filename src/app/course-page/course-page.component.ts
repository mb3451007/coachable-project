import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../core/models/course';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Coach } from '../core/models/coach';
import { CourseContent } from '../core/models/course-content';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent {
  courseId = '';
  @Input() course: Course;

  coachUrl = "/coach/";
  courseUrl = "/course/";
  coaches: Observable<Coach[]>;
  otherCoaches: Observable<Coach[]>;
  otherCourses: Observable<Course[]>;
  contentList: CourseContent[] = []

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

  splitCourseContent() {
    const contents = this.course.tableOfContents.split('##');
    let isTitle = true;
    let counter = -1;
    let courseContent: CourseContent = {content: "", title: ""}; 
    contents.forEach(contentString => {
      if (contentString.length > 0) {
        if (isTitle) {
          courseContent.title = contentString;
          isTitle = false;
        } else {
          courseContent.content = contentString;
          this.contentList[counter] = courseContent;
          courseContent = {content: "", title: ""}; 
          counter++;
          isTitle = true;
        }
      } else {
        courseContent = {content: "", title: ""}; 
        counter++;
        isTitle = true;
      }
    })
  }

  getOtherCoaches() {
    this.otherCoaches = this.coaches;
  }

  getCourse(courseId: string): void {
    this.http.get<Course>(environment.baseUrl + '/course/' + courseId).subscribe((data: Course) => {
      this.course = data
      this.splitCourseContent();
    });
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


}
