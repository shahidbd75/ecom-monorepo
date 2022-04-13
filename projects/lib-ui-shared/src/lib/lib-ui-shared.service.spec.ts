import { TestBed } from '@angular/core/testing';

import { LibUISharedService } from './lib-ui-shared.service';

describe('LibUISharedService', () => {
  let service: LibUISharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibUISharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
