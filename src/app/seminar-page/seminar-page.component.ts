import { Component, OnInit } from '@angular/core';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seminar-page',
  templateUrl: './seminar-page.component.html',
  styleUrls: ['./seminar-page.component.scss']
})
export class SeminarPageComponent implements OnInit{
  showHide:boolean=true;
  searchQuery: string = '';
  showFilters:boolean=false;
  previousSearches: string[] = [];
  isFocused = false;
  results = ['Vorname Nachname', 'Vorname Nachname', 'Vorname Nachname', 'Vorname Nachname', 'Vorname Nachname', 'Vorname Nachname'];

  ngOnInit(): void {
    this.loadPreviousSearches();
  }

  showResults() {
    this.isFocused = true;
  }
  hideResults() {
    // Use a timeout to prevent the list from hiding before a click is registered on the list items
    setTimeout(() => {
      this.isFocused = false;
    }, 200);
  }

  loadPreviousSearches(): void {
    const searches = localStorage.getItem('previousSearches');
    if (searches) {
      this.previousSearches = JSON.parse(searches);
    }
  }

  saveSearchQuery(): void {
    if (this.searchQuery.trim()) {
      this.previousSearches.unshift(this.searchQuery);
      this.previousSearches = this.previousSearches.slice(0, 3); // Limit to last 5 searches
      localStorage.setItem('previousSearches', JSON.stringify(this.previousSearches));
      this.searchQuery = '';
    }
  }

  selectSearchQuery(query: string): void {
    this.searchQuery = query;
  }

  

  gridHide(){
   this.showHide = false
  }

  listHide(){
   this.showHide = true
  }
  openSearchBar() {
    throw new Error('Method not implemented.');
  }  

  showFilter(){
    this.showFilters = true;

  }
  hideFilter(){
    this.showFilters = false
  }
}
