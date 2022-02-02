import { TestBed } from '@angular/core/testing';

// @ts-ignore
import { UserService } from './user.service';

describe('ProductService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
