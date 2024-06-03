import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerspectiveCarriereComponent } from './perspective-carriere.component';

describe('PerspectiveCarriereComponent', () => {
  let component: PerspectiveCarriereComponent;
  let fixture: ComponentFixture<PerspectiveCarriereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerspectiveCarriereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerspectiveCarriereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
