import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitesRechercheComponent } from './opportunites-recherche.component';

describe('OpportunitesRechercheComponent', () => {
  let component: OpportunitesRechercheComponent;
  let fixture: ComponentFixture<OpportunitesRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunitesRechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitesRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
