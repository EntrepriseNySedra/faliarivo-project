import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenariatComponent } from './partenariat.component';

describe('PartenariatComponent', () => {
  let component: PartenariatComponent;
  let fixture: ComponentFixture<PartenariatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenariatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenariatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
