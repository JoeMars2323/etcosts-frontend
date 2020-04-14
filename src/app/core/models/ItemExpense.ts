export class ItemExpense {
    
    toggle: boolean = false;
    item: String;
    description: String;
    currency: String;
    value: number;

    getOpenFileChooser() {
        this.toggle = !this.toggle;
        return '';
    }
}