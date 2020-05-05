import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShortExpenseComponent } from './view-short-expense.component';

describe('ViewShortExpenseComponent', () => {
  let component: ViewShortExpenseComponent;
  let fixture: ComponentFixture<ViewShortExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewShortExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShortExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
