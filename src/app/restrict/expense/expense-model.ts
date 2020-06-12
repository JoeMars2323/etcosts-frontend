import { ExpenseItem } from './expense-item-model';

export class Expense {

	//backend variables
	expenseId: number;
	username: string;
	expenseTypeName: string;
	expenseTypeDescription: string;
	expenseName: string;
	expenseDescription: string;
	expenseDate: string;
	expenseLimitDate: string;
	expenseTotal: number;
	itemsArray: ExpenseItem[];

	//variables tu use only in frontend
	update: boolean;
	toggle: boolean = false;

    getOpenFileChooser() {
        this.toggle = !this.toggle;
        return '';
    }

	convertToDate(stringDate: string) {
		let newDate = new Date(stringDate);
		return newDate;

	}








	

 
}