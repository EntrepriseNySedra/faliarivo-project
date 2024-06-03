import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessStorieComponent } from './success-storie.component';

describe('SuccessStorieComponent', () => {
  let component: SuccessStorieComponent;
  let fixture: ComponentFixture<SuccessStorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessStorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessStorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
