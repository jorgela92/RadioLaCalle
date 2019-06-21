import { TestBed } from '@angular/core/testing';

import { MixcloundService } from './mixclound.service';

describe('MixcloundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MixcloundService = TestBed.get(MixcloundService);
    expect(service).toBeTruthy();
  });
});
