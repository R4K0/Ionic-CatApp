import { TestBed } from '@angular/core/testing';

import { FactfetcherService } from './factfetcher.service';

describe('FactfetcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FactfetcherService = TestBed.get(FactfetcherService);
    expect(service).toBeTruthy();
  });
});
