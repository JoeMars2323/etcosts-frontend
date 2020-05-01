import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFixedExpenseComponent } from './update-fixed-expense.component';

describe('UpdateFixedExpenseComponent', () => {
  let component: UpdateFixedExpenseComponent;
  let fixture: ComponentFixture<UpdateFixedExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFixedExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFixedExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
