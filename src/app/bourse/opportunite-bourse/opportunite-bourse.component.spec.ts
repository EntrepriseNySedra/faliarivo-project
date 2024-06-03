import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportuniteBourseComponent } from './opportunite-bourse.component';

describe('OpportuniteBourseComponent', () => {
  let component: OpportuniteBourseComponent;
  let fixture: ComponentFixture<OpportuniteBourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportuniteBourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportuniteBourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
