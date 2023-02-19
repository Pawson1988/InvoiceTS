interface InvoiceInterface {
    amount: number,
    companyName: string,
    item: string,
    tax: number,
    netAmount: number
}

export class Invoice {
    amount: number
    companyName: string
    item: string
    tax: number
    netAmount: number

    constructor(amount: number, companyName: string, item: string, tax: number){
        this.amount = amount
        this.companyName = companyName
        this.item = item
        this.tax = tax
        this.netAmount = this.amount - (this.amount * this.tax)
    }

    printInvoice(): InvoiceInterface {
        return {
            amount: this.amount,
            companyName: this.companyName,
            item: this.item,
            tax: this.tax,
            netAmount: parseFloat(this.netAmount.toFixed(4))
        }
    }
}

// let newInvoice: Invoice = new Invoice(20.30, "Sabadell Electrics", ["plug socket", "wire"], 0.2)

// console.log(newInvoice.printInvoice())