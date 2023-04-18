import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanamountComponent } from './loanamount.component';

describe('LoanamountComponent', () => {
  let component: LoanamountComponent;
  let fixture: ComponentFixture<LoanamountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanamountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
