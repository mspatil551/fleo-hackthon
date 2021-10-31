import { TestBed } from '@angular/core/testing';

import { CheklinkGuard } from './cheklink.guard';

describe('CheklinkGuard', () => {
  let guard: CheklinkGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheklinkGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
