import { TestBed } from '@angular/core/testing';

import { StructureRechercheService } from './structure-recherche.service';

describe('StructureRechercheService', () => {
  let service: StructureRechercheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StructureRechercheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
