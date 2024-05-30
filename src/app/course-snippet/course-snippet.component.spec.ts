import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSnippetComponent } from './course-snippet.component';

describe('CourseSnippetComponent', () => {
  let component: CourseSnippetComponent;
  let fixture: ComponentFixture<CourseSnippetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseSnippetComponent]
    });
    fixture = TestBed.createComponent(CourseSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
