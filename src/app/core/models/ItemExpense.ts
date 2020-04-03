export class ItemExpense {
    
    toggle: boolean = false;
    itemName: String;
    description: String;
    currency: String;
    value: String;

    getOpenFileChooser() {
        this.toggle = !this.toggle;
        return '';
    }
}