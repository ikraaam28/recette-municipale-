import { TestBed } from '@angular/core/testing';

import { ImobSeviceService } from './imob-sevice.service';

describe('ImobSeviceService', () => {
  let service: ImobSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImobSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
