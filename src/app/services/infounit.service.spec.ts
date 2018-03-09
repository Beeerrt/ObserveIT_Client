import { TestBed, inject } from '@angular/core/testing';

import { InfounitService } from './infounit.service';

describe('InfounitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfounitService]
    });
  });

  it('should be created', inject([InfounitService], (service: InfounitService) => {
    expect(service).toBeTruthy();
  }));
});
