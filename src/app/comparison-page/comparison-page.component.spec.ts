import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonPageComponent } from './comparison-page.component';

describe('ComparisonPageComponent', () => {
  let component: ComparisonPageComponent;
  let fixture: ComponentFixture<ComparisonPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparisonPageComponent]
    });
    fixture = TestBed.createComponent(ComparisonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
