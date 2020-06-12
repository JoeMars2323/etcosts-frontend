export class ExpenseItem {

    //back end variables
    itemId: number;
	itemName: string;
	itemDescription: string;
	itemQuantity: string;
	itemDate: string;
	itemValue: number;

    //variables to use only in front end
    valueNumber: number;
    toggle: boolean = false;

    getOpenFileChooser() {
        this.toggle = !this.toggle;
        return '';
    }





    
}