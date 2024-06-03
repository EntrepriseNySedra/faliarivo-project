import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesProgrammesComponent } from './les-programmes.component';

describe('LesProgrammesComponent', () => {
  let component: LesProgrammesComponent;
  let fixture: ComponentFixture<LesProgrammesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesProgrammesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesProgrammesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
