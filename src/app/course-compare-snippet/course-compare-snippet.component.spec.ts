import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCompareSnippetComponent } from './course-compare-snippet.component';

describe('CourseCompareSnippetComponent', () => {
  let component: CourseCompareSnippetComponent;
  let fixture: ComponentFixture<CourseCompareSnippetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCompareSnippetComponent]
    });
    fixture = TestBed.createComponent(CourseCompareSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
