import { TestBed } from '@angular/core/testing';

import { LibBizSharedService } from './lib-biz-shared.service';

describe('LibBizSharedService', () => {
  let service: LibBizSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibBizSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
