import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachSnippetComponent } from './coach-snippet.component';

describe('CoachSnippetComponent', () => {
  let component: CoachSnippetComponent;
  let fixture: ComponentFixture<CoachSnippetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoachSnippetComponent]
    });
    fixture = TestBed.createComponent(CoachSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
