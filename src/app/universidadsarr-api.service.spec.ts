import { TestBed } from '@angular/core/testing';

import { UniversidadsarrApiService } from './universidadsarr-api.service';

describe('UniversidadsarrApiService', () => {
  let service: UniversidadsarrApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversidadsarrApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
