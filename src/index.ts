import { inputForm } from "./inputForm.js"




const form = new inputForm()
form.addFormAndInputsToBody()

form.addListenerInputTax()

form.setClassNameOnElement("tax", "tax")
form.setClassNameOnElement("price", "price")
form.setClassNameOnElement("item", "item")
form.setClassNameOnElement("company name", "company-name")
form.setClassNameOnElement("form", "form")

