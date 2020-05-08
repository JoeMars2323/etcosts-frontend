import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFixedExpenseComponent } from './view-fixed-expense.component';

describe('ViewFixedExpenseComponent', () => {
  let component: ViewFixedExpenseComponent;
  let fixture: ComponentFixture<ViewFixedExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFixedExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFixedExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
