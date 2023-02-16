"use strict";
console.log("TS works");
class Invoice {
    constructor(amount, companyName, items, tax) {
        this.amount = amount;
        this.companyName = companyName;
        this.items = items;
        this.tax = tax;
        this.netAmount = this.amount - (this.amount * this.tax);
    }
    printInvoice() {
        return {
            amount: this.amount,
            companyName: this.companyName,
            items: this.items,
            tax: this.tax,
            netAmount: parseFloat(this.netAmount.toFixed(4))
        };
    }
}
let newInvoice = new Invoice(20.30, "Sabadell Electrics", ["plug socket", "wire"], 0.2);
console.log(newInvoice.printInvoice());
//# sourceMappingURL=invoice.js.map