import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVariableExpenseComponent } from './view-variable-expense.component';

describe('ViewVariableExpenseComponent', () => {
  let component: ViewVariableExpenseComponent;
  let fixture: ComponentFixture<ViewVariableExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVariableExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVariableExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
