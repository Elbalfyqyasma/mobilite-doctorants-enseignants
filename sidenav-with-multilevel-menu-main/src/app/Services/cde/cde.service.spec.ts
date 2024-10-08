import { TestBed } from '@angular/core/testing';

import { CdeService } from './cde.service';

describe('CdeService', () => {
  let service: CdeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
