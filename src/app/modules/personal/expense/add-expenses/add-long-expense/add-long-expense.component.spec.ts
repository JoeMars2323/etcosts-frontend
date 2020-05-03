import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLongExpenseComponent } from './add-long-expense.component';

describe('LongExpenseComponent', () => {
  let component: AddLongExpenseComponent;
  let fixture: ComponentFixture<AddLongExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLongExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLongExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
