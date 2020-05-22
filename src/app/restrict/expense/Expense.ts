import { ExpenseItem } from './ExpenseItem';

export class Expense {

	expenseId: number;
	username: string;
	stateType: string;
	expenseType: string;
	expenseTypeDescription: string;
	currency: string;
	currencyValue: number;
	expenseName: string;
	expenseDate: string;
	paymentDate: string;
	comments: string;
	month: string;
	year: string;
	total: number;
	hasItems: boolean;
	itemsArray: ExpenseItem[];
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