import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSingupComponent } from './doctor-singup.component';

describe('DoctorSingupComponent', () => {
  let component: DoctorSingupComponent;
  let fixture: ComponentFixture<DoctorSingupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorSingupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorSingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
