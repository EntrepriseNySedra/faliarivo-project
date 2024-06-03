import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportuniteFinancementComponent } from './opportunite-financement.component';

describe('OpportuniteFinancementComponent', () => {
  let component: OpportuniteFinancementComponent;
  let fixture: ComponentFixture<OpportuniteFinancementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportuniteFinancementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportuniteFinancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
