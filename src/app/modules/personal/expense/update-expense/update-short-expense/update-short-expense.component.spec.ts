import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShortExpenseComponent } from './update-short-expense.component';

describe('UpdateShortExpenseComponent', () => {
  let component: UpdateShortExpenseComponent;
  let fixture: ComponentFixture<UpdateShortExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateShortExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateShortExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
