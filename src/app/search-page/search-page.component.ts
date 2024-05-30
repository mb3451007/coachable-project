import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coach } from '../core/models/coach';
import { Course } from '../core/models/course';
import { SearchBarDisplayType, SearchBarType } from '../search-bar/search-bar.component';
import { SearchResult } from '../core/models/search-result';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {

  @ViewChild("searchMode") searchModeSwitch!: ElementRef;

  coachUrl = "/coach/";
  courseUrl = "/course/";
  searchParams = "";
  searchType = SearchBarType.Course;
  displayType = SearchBarDisplayType.External;
  searchResults: SearchResult;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.searchParams = params['searchparams'] );
  }

  openCoachUrl(coach: Coach) {
    location.href = this.coachUrl + coach.id;
  }

  openCourseUrl(course: Course) {
    location.href = this.courseUrl + course.id;
  }

  showSearchbarResults(results: SearchResult) {
    this.searchResults = results;
  }

  openSettings() {}

  switchSearchMode() {
    const searchModeSwitch = this.searchModeSwitch.nativeElement;
    this.searchType = (searchModeSwitch.checked ? SearchBarType.Coach : SearchBarType.Course);
  }
}
