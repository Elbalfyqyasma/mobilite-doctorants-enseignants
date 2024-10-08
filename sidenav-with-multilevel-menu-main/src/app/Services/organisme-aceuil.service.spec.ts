import { TestBed } from '@angular/core/testing';

import { OrganismeAceuilService } from './organisme-aceuil.service';

describe('OrganismeAceuilService', () => {
  let service: OrganismeAceuilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganismeAceuilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
