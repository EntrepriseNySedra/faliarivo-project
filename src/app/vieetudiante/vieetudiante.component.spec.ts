import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieetudianteComponent } from './vieetudiante.component';

describe('VieetudianteComponent', () => {
  let component: VieetudianteComponent;
  let fixture: ComponentFixture<VieetudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieetudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VieetudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
