export class ExpenseItem {

    itemId: number;
	name: string;
	description: string;
	expenseDate: string;
	month: string;
	year: string;
    value: number;

    valueNumber: number;
    toggle: boolean = false;

    getOpenFileChooser() {
        this.toggle = !this.toggle;
        return '';
    }
}