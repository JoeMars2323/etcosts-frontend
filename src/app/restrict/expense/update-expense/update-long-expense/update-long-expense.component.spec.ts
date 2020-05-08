import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLongExpenseComponent } from './update-long-expense.component';

describe('UpdateLongExpenseComponent', () => {
  let component: UpdateLongExpenseComponent;
  let fixture: ComponentFixture<UpdateLongExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLongExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLongExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
