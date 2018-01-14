import { TestBed, inject } from '@angular/core/testing';

import { PrimitivesService } from './primitives.service';

describe('PrimitivesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrimitivesService]
    });
  });

  it('should be created', inject([PrimitivesService], (service: PrimitivesService) => {
    expect(service).toBeTruthy();
  }));
});
