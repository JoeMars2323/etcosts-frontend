export class ItemExpense {
    
    itemId: number;
    itemName: string;
    description: string;
    expenseDate: string;
    paymentDate: string;
    deadlineDate: string;
    month: string;
    year: string;
    currency: string;
    stateType: string;
    value: string;
    valueNumber: number;

    toggle: boolean = false;

    getOpenFileChooser() {
        this.toggle = !this.toggle;
        return '';
    }
}