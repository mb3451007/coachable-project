import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachCarouselComponent } from './coach-carousel.component';

describe('CoachCarouselComponent', () => {
  let component: CoachCarouselComponent;
  let fixture: ComponentFixture<CoachCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoachCarouselComponent]
    });
    fixture = TestBed.createComponent(CoachCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
