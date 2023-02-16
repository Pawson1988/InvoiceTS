interface InvoiceInterface {
    amount: number,
    companyName: string,
    items: string[],
    tax: number,
    netAmount: number
}

class Invoice {
    amount: number
    companyName: string
    items: string[]
    tax: number
    netAmount: number

    constructor(amount: number, companyName: string, items: string[], tax: number){
        this.amount = amount
        this.companyName = companyName
        this.items = items
        this.tax = tax
        this.netAmount = this.amount - (this.amount * this.tax)
    }

    printInvoice(): InvoiceInterface {
        return {
            amount: this.amount,
            companyName: this.companyName,
            items: this.items,
            tax: this.tax,
            netAmount: parseFloat(this.netAmount.toFixed(4))
        }
    }
}

let newInvoice: Invoice = new Invoice(20.30, "Sabadell Electrics", ["plug socket", "wire"], 0.2)

console.log(newInvoice.printInvoice())