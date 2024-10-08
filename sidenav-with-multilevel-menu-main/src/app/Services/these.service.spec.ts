import { TestBed } from '@angular/core/testing';

import { TheseService } from './these.service';

describe('TheseService', () => {
  let service: TheseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
