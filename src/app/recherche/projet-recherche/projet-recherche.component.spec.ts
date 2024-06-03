import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetRechercheComponent } from './projet-recherche.component';

describe('ProjetRechercheComponent', () => {
  let component: ProjetRechercheComponent;
  let fixture: ComponentFixture<ProjetRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetRechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
