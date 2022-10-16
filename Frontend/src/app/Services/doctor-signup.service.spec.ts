import { TestBed } from '@angular/core/testing';

import { DoctorSignupService } from './doctor-signup.service';

describe('DoctorSignupService', () => {
  let service: DoctorSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
