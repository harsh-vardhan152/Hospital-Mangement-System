import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotorRegistrationComponent } from './dotor-registration.component';

describe('DotorRegistrationComponent', () => {
  let component: DotorRegistrationComponent;
  let fixture: ComponentFixture<DotorRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotorRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
