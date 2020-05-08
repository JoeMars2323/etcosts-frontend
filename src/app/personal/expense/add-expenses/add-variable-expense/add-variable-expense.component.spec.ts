import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVariableExpenseComponent } from './add-variable-expense.component';

describe('VariableExpenseComponent', () => {
  let component: AddVariableExpenseComponent;
  let fixture: ComponentFixture<AddVariableExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVariableExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVariableExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
