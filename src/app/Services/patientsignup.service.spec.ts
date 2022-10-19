import { TestBed } from '@angular/core/testing';

import { PatientsignupService } from './patientsignup.service';

describe('PatientsignupService', () => {
  let service: PatientsignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
