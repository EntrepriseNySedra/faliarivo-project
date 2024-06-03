import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExigencesAdmissionsComponent } from './exigences-admissions.component';

describe('ExigencesAdmissionsComponent', () => {
  let component: ExigencesAdmissionsComponent;
  let fixture: ComponentFixture<ExigencesAdmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExigencesAdmissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExigencesAdmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
