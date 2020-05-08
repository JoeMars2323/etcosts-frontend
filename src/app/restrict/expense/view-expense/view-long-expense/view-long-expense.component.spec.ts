import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLongExpenseComponent } from './view-long-expense.component';

describe('ViewLongExpenseComponent', () => {
  let component: ViewLongExpenseComponent;
  let fixture: ComponentFixture<ViewLongExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLongExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLongExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
