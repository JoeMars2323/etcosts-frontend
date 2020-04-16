export class ItemExpense {
    
    toggle: boolean = false;
    item: String;
    description: String;
    currency: String;
    itemValue: number;

    getOpenFileChooser() {
        this.toggle = !this.toggle;
        return '';
    }
}