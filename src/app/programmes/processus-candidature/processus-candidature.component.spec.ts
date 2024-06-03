import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessusCandidatureComponent } from './processus-candidature.component';

describe('ProcessusCandidatureComponent', () => {
  let component: ProcessusCandidatureComponent;
  let fixture: ComponentFixture<ProcessusCandidatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessusCandidatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessusCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
