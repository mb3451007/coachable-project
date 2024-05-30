import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SearchApiService } from '../core/services/search-api.service';
import { SearchResult } from '../core/models/search-result';
import { Observable, of } from 'rxjs';
import { Course } from '../core/models/course';
import { Coach } from '../core/models/coach';

export enum SearchBarType {
  All,
  Coach,
  Course
}

export enum SearchBarDisplayType {
  Self,
  External
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @ViewChild('searchBar') searchBar: any;

  coaches: Observable<Coach[]> = of([]);
  courses: Observable<Course[]> = of([]);
  coachUrl = "/coach/";
  courseUrl = "/course/";
  standardPlaceholder = "Was suchst du?";
  searchResult: SearchResult;
  isLoading = false;

  @Input() searchType = SearchBarType.All;
  @Input() displayType = SearchBarDisplayType.Self;
  @Input() placeholder = "";

  @Output() coachClicked: EventEmitter<Coach> = new EventEmitter();
  @Output() courseClicked: EventEmitter<Course> = new EventEmitter();
  @Output() resultsRetrieved: EventEmitter<SearchResult> = new EventEmitter();
  @Output() enterPressed: EventEmitter<String> = new EventEmitter();

  constructor(private searchService: SearchApiService) {}

  retrieveSearchResults(event: any): void {
    if (this.isLoading) return;
    this.isLoading = true;

    const value = event.target.value
    if (value.length == 0) {
      if (this.searchResult) {
        this.searchResult.coachResult = [];
        this.searchResult.courseResult = [];
      }
      this.resultsRetrieved.emit(this.searchResult);
      this.isLoading = false;
      return;
    }

    if (this.searchType == SearchBarType.Coach) {
      this.searchService.retrieveCoachSearchResults(event.target.value).subscribe((result: SearchResult) =>
        this.updateSearchBar(result)
      );
    } else if (this.searchType == SearchBarType.Course) {
      this.searchService.retrieveCourseSearchResults(event.target.value).subscribe((result: SearchResult) => 
        this.updateSearchBar(result)
      );
    } else {
      this.searchService.retrieveAllSearchResults(event.target.value).subscribe((result: SearchResult) => 
        this.updateSearchBar(result)
      );
    }
  }

  openSearchPage(event: any) {
    this.enterPressed.emit(event.target.value)
  }

  updateSearchBar(result: SearchResult) {
    if (this.displayType == SearchBarDisplayType.Self) {
      this.searchResult = result;
    } else {
      this.resultsRetrieved.emit(result);
    }
    
    this.isLoading = false
  }

  coachSelectedByUser(coach: Coach) {
    this.searchBar.nativeElement.value = ''
    this.searchResult.coachResult = [];
    this.searchResult.courseResult = [];
    this.coachClicked.emit(coach);
  }

  courseSelectedByUser(course: Course) {
    this.searchBar.nativeElement.value = ''
    this.searchResult.coachResult = [];
    this.searchResult.courseResult = [];
    this.courseClicked.emit(course);
  }
}
