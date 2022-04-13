import { TestBed } from '@angular/core/testing';

import { LibCoreSharedService } from './lib-core-shared.service';

describe('LibCoreSharedService', () => {
  let service: LibCoreSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibCoreSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
