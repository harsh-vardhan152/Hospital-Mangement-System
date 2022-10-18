import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientdoctorassignedComponent } from './patientdoctorassigned.component';

describe('PatientdoctorassignedComponent', () => {
  let component: PatientdoctorassignedComponent;
  let fixture: ComponentFixture<PatientdoctorassignedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientdoctorassignedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientdoctorassignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
