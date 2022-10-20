import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppointentComponent } from './doctor-appointent.component';

describe('DoctorAppointentComponent', () => {
  let component: DoctorAppointentComponent;
  let fixture: ComponentFixture<DoctorAppointentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAppointentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorAppointentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
