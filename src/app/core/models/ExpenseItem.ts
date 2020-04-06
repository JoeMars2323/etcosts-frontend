import { Expense } from './Expense';
import { Item } from './Item';
import { Currency } from './Currency';
import { StateType } from './StateType';

export class ExpenseItem {

    expenseItemId: number;
    expense: Expense;
    item: Item;
    currency: Currency;
    stateType: StateType;
    value: String;
    comments: String;

}