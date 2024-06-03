import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaineRechercheComponent } from './domaine-recherche.component';

describe('DomaineRechercheComponent', () => {
  let component: DomaineRechercheComponent;
  let fixture: ComponentFixture<DomaineRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomaineRechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomaineRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
