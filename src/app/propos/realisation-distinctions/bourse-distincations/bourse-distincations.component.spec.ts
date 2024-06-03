import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BourseDistincationsComponent } from './bourse-distincations.component';

describe('BourseDistincationsComponent', () => {
  let component: BourseDistincationsComponent;
  let fixture: ComponentFixture<BourseDistincationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BourseDistincationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BourseDistincationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
