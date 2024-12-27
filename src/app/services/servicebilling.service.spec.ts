import { TestBed } from '@angular/core/testing';

import { ServicebillingService } from './servicebilling.service';

describe('ServicebillingService', () => {
  let service: ServicebillingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicebillingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
