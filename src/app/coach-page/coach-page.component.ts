import { Component } from '@angular/core';
import { Coach } from '../core/models/coach';
import { HttpClient } from '@angular/common/http';
import { Course } from '../core/models/course';
import { Observable, of } from 'rxjs';
import {ActivatedRoute} from "@angular/router";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-coach-page',
  templateUrl: './coach-page.component.html',
  styleUrls: ['./coach-page.component.scss']
})
export class CoachPageComponent {
  coachId: number = 0;
  courses: Observable<Course[]>;
  coaches: Observable<Coach[]> = of([]);
  categories: String[] = [];
  coach: Coach;
  coachUrl = "/coach/";
  courseUrl = "/course/";

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.coachId = params['id'] );
  }

  ngOnInit(): void {
    this.getCoach(this.coachId);
    this.getCoachCourses(this.coachId);
    this.getCoaches();
    this.collectCategories();
  }

  collectCategories(): void {
    const collectedCategories: String[] = [];
    this.courses.subscribe(courseList => {
      courseList.forEach(course => {
        course.category.split(";").forEach(seperateCategory => {
          collectedCategories[collectedCategories.length] = seperateCategory
        })
      })
      this.categories = [...new Set(collectedCategories)];
    })
    
  }

  getCoaches(): void {
    this.coaches = this.http.get<Coach[]>(environment.baseUrl + '/homepage/popular-coaches')
  }

  getCoach(coachId: number): void {
    this.http.get<Coach>(environment.baseUrl + this.coachUrl + coachId).subscribe((data: Coach) => 
      this.coach = data
    );
  }

  getCoachCourses(coachId: number): void {
    this.courses = this.http.get<Course[]>(environment.baseUrl + '/course/byCoach/' + coachId)
  }

  openCourseUrl(course: Course): void {
    location.href = this.courseUrl + course.id;
  }

}
