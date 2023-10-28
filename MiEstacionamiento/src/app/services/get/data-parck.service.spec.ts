import { TestBed } from '@angular/core/testing';

import { DataParckService } from './data-parck.service';

describe('DataParckService', () => {
  let service: DataParckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataParckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
