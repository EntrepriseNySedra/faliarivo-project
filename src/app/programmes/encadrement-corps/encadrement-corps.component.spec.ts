import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrementCorpsComponent } from './encadrement-corps.component';

describe('EncadrementCorpsComponent', () => {
  let component: EncadrementCorpsComponent;
  let fixture: ComponentFixture<EncadrementCorpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncadrementCorpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncadrementCorpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
