import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourceRechercheComponent } from './ressource-recherche.component';

describe('RessourceRechercheComponent', () => {
  let component: RessourceRechercheComponent;
  let fixture: ComponentFixture<RessourceRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RessourceRechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RessourceRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
