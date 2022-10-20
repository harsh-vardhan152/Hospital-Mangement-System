import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorpatientdischargeComponent } from './doctorpatientdischarge.component';

describe('DoctorpatientdischargeComponent', () => {
  let component: DoctorpatientdischargeComponent;
  let fixture: ComponentFixture<DoctorpatientdischargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorpatientdischargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorpatientdischargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
