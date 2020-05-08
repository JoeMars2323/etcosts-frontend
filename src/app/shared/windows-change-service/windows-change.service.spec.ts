import { TestBed } from '@angular/core/testing';

import { WindowsChangeService } from './windows-change.service';

describe('WindowsChangeService', () => {
  let service: WindowsChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowsChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
