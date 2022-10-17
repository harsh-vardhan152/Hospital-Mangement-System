import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientdischargeComponent } from './patientdischarge.component';

describe('PatientdischargeComponent', () => {
  let component: PatientdischargeComponent;
  let fixture: ComponentFixture<PatientdischargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientdischargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientdischargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
