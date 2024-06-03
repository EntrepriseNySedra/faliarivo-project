import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationRealisationComponent } from './publication-realisation.component';

describe('PublicationRealisationComponent', () => {
  let component: PublicationRealisationComponent;
  let fixture: ComponentFixture<PublicationRealisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationRealisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationRealisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
