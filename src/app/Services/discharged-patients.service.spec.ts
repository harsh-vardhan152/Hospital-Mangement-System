import { TestBed } from '@angular/core/testing';

import { DischargedPatientsService } from './discharged-patients.service';

describe('DischargedPatientsService', () => {
  let service: DischargedPatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DischargedPatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
