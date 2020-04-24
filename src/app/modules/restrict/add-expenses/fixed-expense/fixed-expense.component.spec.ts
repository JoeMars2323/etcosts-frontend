import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedExpenseComponent } from './fixed-expense.component';

describe('FixedExpenseComponent', () => {
  let component: FixedExpenseComponent;
  let fixture: ComponentFixture<FixedExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
