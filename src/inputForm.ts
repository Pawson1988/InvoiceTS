type ElementsTypes = "tax" | "price" | "item" | "company name" | "form"

export class inputForm {

    // create HTML elements
    private body = document.querySelector("body")!
    private form = document.createElement("form")
    private inputPrice = document.createElement("input")
    private inputCompanyName = document.createElement("input")
    private inputItem = document.createElement("input")
    private inputTax = document.createElement("input")
    private inputTotalAmount = document.createElement("p")

    // Create HTML labels for inputs
    private inputPriceLabel = document.createElement("label")
    private inputCompanyNameLabel = document.createElement("label")
    private inputItemLabel = document.createElement("label")
    private inputTaxLabel = document.createElement("label")
    private inputTotalAmountLabel = document.createElement("label")

    constructor(){
        console.log("form initiated")
    }
    

    addFormAndInputsToBody(){
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

        //add child elements to form
        this.form.appendChild(this.inputTotalAmount)
        this.form.appendChild(this.inputTaxLabel)
        this.form.appendChild(this.inputTax)
        this.form.appendChild(this.inputItemLabel)
        this.form.appendChild(this.inputItem)
        this.form.appendChild(this.inputCompanyNameLabel)
        this.form.appendChild(this.inputCompanyName)
        this.form.appendChild(this.inputPriceLabel)
        this.form.appendChild(this.inputPrice)
        
        //add form to body
        this.body.appendChild(this.form)
    }

    // test method 
    addListenerInputTax(){
        this.inputTax.addEventListener("input", function(){
            console.log(this.valueAsNumber)
        })
    }

    setClassNameOnElement(element: ElementsTypes, className: string){
        const elements = {
            "tax": this.inputTax,
            "price": this.inputPrice,
            "item": this.inputItem,
            "company name": this.inputCompanyName,
            "form": this.form
        }
        elements[element].setAttribute("class", className)
    }

    

}