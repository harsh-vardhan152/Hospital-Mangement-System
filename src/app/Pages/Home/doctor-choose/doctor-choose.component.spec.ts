import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorChooseComponent } from './doctor-choose.component';

describe('DoctorChooseComponent', () => {
  let component: DoctorChooseComponent;
  let fixture: ComponentFixture<DoctorChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorChooseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
