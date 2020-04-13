export class ItemExpense {
    
    toggle: boolean = false;
    item: String;
    description: String;
    currency: String;
    value: String;

    getOpenFileChooser() {
        this.toggle = !this.toggle;
        return '';
    }
}