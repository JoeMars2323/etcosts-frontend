import { TestBed } from '@angular/core/testing';

import { UpdateExpenseService } from './update-expense.service';

describe('UpdateExpenseService', () => {
  let service: UpdateExpenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateExpenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
