import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubventionRechercheComponent } from './subvention-recherche.component';

describe('SubventionRechercheComponent', () => {
  let component: SubventionRechercheComponent;
  let fixture: ComponentFixture<SubventionRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubventionRechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubventionRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
