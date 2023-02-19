import { inputForm } from "./inputForm.js"

inputForm.addFormAndInputsToBody()


inputForm.inputTax.addEventListener("input", function(){
    console.log(inputForm.getInputTax())
})


