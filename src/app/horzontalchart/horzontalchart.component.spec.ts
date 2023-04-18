import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorzontalchartComponent } from './horzontalchart.component';

describe('HorzontalchartComponent', () => {
  let component: HorzontalchartComponent;
  let fixture: ComponentFixture<HorzontalchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorzontalchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorzontalchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
