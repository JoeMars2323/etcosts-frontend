import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongExpenseComponent } from './long-expense.component';

describe('LongExpenseComponent', () => {
  let component: LongExpenseComponent;
  let fixture: ComponentFixture<LongExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
