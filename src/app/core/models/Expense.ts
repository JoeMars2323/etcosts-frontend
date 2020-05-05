import {ItemExpense} from '../models/ItemExpense';
export class Expense {
    
    expenseId: number;
	username: string;
	expenseName: string;
	expenseDescription: string;
	expenseType: string;
	expenseSubtype: string;
	expenseDate: string;
	paymentDate: string;
	deadlineDate: string;
	month: string;
	year: string;
	currency: string;
	stateType: string;
	value: string;
	hasItems: boolean;
	itemArray: ItemExpense[];
	update: boolean;


	convertToDate(stringDate: string) {
		let newDate = new Date(stringDate);
		return newDate;

	}

 
}