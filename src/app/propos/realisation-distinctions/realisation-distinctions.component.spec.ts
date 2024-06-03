import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationDistinctionsComponent } from './realisation-distinctions.component';

describe('RealisationDistinctionsComponent', () => {
  let component: RealisationDistinctionsComponent;
  let fixture: ComponentFixture<RealisationDistinctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealisationDistinctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealisationDistinctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
