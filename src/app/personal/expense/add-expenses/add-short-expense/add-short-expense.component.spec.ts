import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShortExpenseComponent } from './add-short-expense.component';

describe('ShortExpenseComponent', () => {
  let component: AddShortExpenseComponent;
  let fixture: ComponentFixture<AddShortExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShortExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShortExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
