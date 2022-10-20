import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientdashboardComponent } from './patientdashboard.component';

describe('PatientdashboardComponent', () => {
  let component: PatientdashboardComponent;
  let fixture: ComponentFixture<PatientdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
