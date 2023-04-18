import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdiIconsComponent } from './mdi-icons.component';

describe('MdiIconsComponent', () => {
  let component: MdiIconsComponent;
  let fixture: ComponentFixture<MdiIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdiIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdiIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
