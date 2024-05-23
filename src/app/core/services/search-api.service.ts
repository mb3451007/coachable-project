import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { SearchResult } from '../models/search-result';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
@Injectable() 
export class SearchApiService { 
    constructor(private http: HttpClient) { }

    retrieveAllSearchResults(searchParam: string): Observable<SearchResult> {    
        return this.http.get<SearchResult>(environment.baseUrl + '/search/all/' + searchParam);
    }

    retrieveCoachSearchResults(searchParam: string): Observable<SearchResult> {    
        return this.http.get<SearchResult>(environment.baseUrl + '/search/coach/' + searchParam);
    }

    retrieveCourseSearchResults(searchParam: string): Observable<SearchResult> {    
        return this.http.get<SearchResult>(environment.baseUrl + '/search/course/' + searchParam);
    }
}