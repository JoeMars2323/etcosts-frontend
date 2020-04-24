import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortExpenseComponent } from './short-expense.component';

describe('ShortExpenseComponent', () => {
  let component: ShortExpenseComponent;
  let fixture: ComponentFixture<ShortExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
