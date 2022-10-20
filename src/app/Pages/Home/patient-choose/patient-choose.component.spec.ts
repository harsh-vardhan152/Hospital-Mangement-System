import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChooseComponent } from './patient-choose.component';

describe('PatientChooseComponent', () => {
  let component: PatientChooseComponent;
  let fixture: ComponentFixture<PatientChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientChooseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
