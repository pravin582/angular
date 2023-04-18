import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoancountComponent } from './loancount.component';

describe('LoancountComponent', () => {
  let component: LoancountComponent;
  let fixture: ComponentFixture<LoancountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoancountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoancountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
