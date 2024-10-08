import { TestBed } from '@angular/core/testing';

import { CadreMobiliteService } from './cadre-mobilite.service';

describe('CadreMobiliteService', () => {
  let service: CadreMobiliteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadreMobiliteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
