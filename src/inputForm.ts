

export class inputForm {
    static body = document.querySelector("body")!
    static form = document.createElement("form")
    static inputPrice = document.createElement("input")
    static inputCompanyName = document.createElement("input")
    static inputItem = document.createElement("input")
    static inputTax = document.createElement("input")
    static inputTotalAmount = document.createElement("p")

    static inputPriceLabel = document.createElement("label")
    static inputCompanyNameLabel = document.createElement("label")
    static inputItemLabel = document.createElement("label")
    static inputTaxLabel = document.createElement("label")
    static inputTotalAmountLabel = document.createElement("label")
    

    static addFormAndInputsToBody(){

        // add attributes to form elements 
        this.inputPrice.setAttribute("type", "number")
        this.inputCompanyName.setAttribute("type", "text")
        this.inputItem.setAttribute("type", "text")
        this.inputTax.setAttribute("type", "number")

        this.inputPrice.setAttribute("name", "inputPrice")
        this.inputCompanyName.setAttribute("name", "inputCompanyName")
        this.inputItem.setAttribute("name", "inputItem")
        this.inputTax.setAttribute("name", "inputTax")
        this.inputTax.setAttribute("min", "0")
        this.inputTax.setAttribute("max", "100")

        this.inputPrice.setAttribute("for", "inputPrice")
        this.inputCompanyName.setAttribute("for", "inputCompanyName")
        this.inputItem.setAttribute("for", "inputItem")
        this.inputTax.setAttribute("for", "inputTax")

        //add label text to labels for form elements
        this.inputPriceLabel.textContent = "Price"
        this.inputCompanyNameLabel.textContent = "Company"
        this.inputItemLabel.textContent = "Item"
        this.inputTaxLabel.textContent = "Tax"

        this.form.appendChild(this.inputTotalAmount)
        this.form.appendChild(this.inputTaxLabel)
        this.form.appendChild(this.inputTax)
        this.form.appendChild(this.inputItemLabel)
        this.form.appendChild(this.inputItem)
        this.form.appendChild(this.inputCompanyNameLabel)
        this.form.appendChild(this.inputCompanyName)
        this.form.appendChild(this.inputPriceLabel)
        this.form.appendChild(this.inputPrice)
        
        this.body.appendChild(this.form)
    }

    static getInputTax(): number {
        return this.inputTax.valueAsNumber
    }

}