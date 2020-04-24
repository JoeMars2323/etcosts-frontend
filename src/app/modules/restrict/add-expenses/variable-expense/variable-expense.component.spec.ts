import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableExpenseComponent } from './variable-expense.component';

describe('VariableExpenseComponent', () => {
  let component: VariableExpenseComponent;
  let fixture: ComponentFixture<VariableExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
