import { TestBed } from '@angular/core/testing';

import { PatientloginService } from './patientlogin.service';

describe('PatientloginService', () => {
  let service: PatientloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
