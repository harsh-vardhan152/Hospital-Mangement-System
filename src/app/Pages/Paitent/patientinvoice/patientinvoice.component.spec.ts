import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientinvoiceComponent } from './patientinvoice.component';

describe('PatientinvoiceComponent', () => {
  let component: PatientinvoiceComponent;
  let fixture: ComponentFixture<PatientinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientinvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
