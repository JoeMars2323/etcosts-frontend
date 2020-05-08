import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVariableExpenseComponent } from './update-variable-expense.component';

describe('UpdateVariableExpenseComponent', () => {
  let component: UpdateVariableExpenseComponent;
  let fixture: ComponentFixture<UpdateVariableExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVariableExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVariableExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
