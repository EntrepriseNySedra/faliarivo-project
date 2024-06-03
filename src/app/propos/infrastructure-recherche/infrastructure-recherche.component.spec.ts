import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureRechercheComponent } from './infrastructure-recherche.component';

describe('InfrastructureRechercheComponent', () => {
  let component: InfrastructureRechercheComponent;
  let fixture: ComponentFixture<InfrastructureRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfrastructureRechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastructureRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
