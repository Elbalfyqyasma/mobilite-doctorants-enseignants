import { TestBed } from '@angular/core/testing';

import { JarwisService } from './jarwis.service';

describe('JarwisService', () => {
  let service: JarwisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JarwisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
