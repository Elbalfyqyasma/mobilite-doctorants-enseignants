import { TestBed } from '@angular/core/testing';

import { ProductionScientifiqueService } from './production-scientifique.service';

describe('ProductionScientifiqueService', () => {
  let service: ProductionScientifiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductionScientifiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
