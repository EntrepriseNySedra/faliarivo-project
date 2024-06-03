import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValeurCultureComponent } from './valeur-culture.component';

describe('ValeurCultureComponent', () => {
  let component: ValeurCultureComponent;
  let fixture: ComponentFixture<ValeurCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValeurCultureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValeurCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
