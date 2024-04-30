import { TestBed } from '@angular/core/testing';

import { LeavePlanService } from './leave-plan.service';

describe('LeavePlanService', () => {
  let service: LeavePlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeavePlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
