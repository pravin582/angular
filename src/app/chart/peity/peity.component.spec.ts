import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeityComponent } from './peity.component';

describe('PeityComponent', () => {
  let component: PeityComponent;
  let fixture: ComponentFixture<PeityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
