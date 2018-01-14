import { TestBed, inject } from '@angular/core/testing';

import { HotendsService } from './hotends.service';

describe('HotendsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotendsService]
    });
  });

  it('should be created', inject([HotendsService], (service: HotendsService) => {
    expect(service).toBeTruthy();
  }));
});
