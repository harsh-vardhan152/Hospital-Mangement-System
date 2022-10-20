import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorpatientlistComponent } from './doctorpatientlist.component';

describe('DoctorpatientlistComponent', () => {
  let component: DoctorpatientlistComponent;
  let fixture: ComponentFixture<DoctorpatientlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorpatientlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorpatientlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
