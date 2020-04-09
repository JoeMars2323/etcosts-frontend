import {ItemExpense} from '../models/ItemExpense';
export class Expense {
    
    expenseId: number;
    username: String;
    expenseName: String;
    expenseType: String;
    expenseDate: String;
    paymentDate: String;
    total: String;
    item: ItemExpense[];

 
}