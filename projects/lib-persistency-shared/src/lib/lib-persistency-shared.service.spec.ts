import { TestBed } from '@angular/core/testing';

import { LibPersistencySharedService } from './lib-persistency-shared.service';

describe('LibPersistencySharedService', () => {
  let service: LibPersistencySharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibPersistencySharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
