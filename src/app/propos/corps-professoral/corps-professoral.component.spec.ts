import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpsProfessoralComponent } from './corps-professoral.component';

describe('CorpsProfessoralComponent', () => {
  let component: CorpsProfessoralComponent;
  let fixture: ComponentFixture<CorpsProfessoralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpsProfessoralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpsProfessoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
