// let prompt = require("promot-sync")(); //We dont't need require when we are using html css JS repel on Replit
//alert and prompt
alert("Enter your number here")
let a = prompt("Enter a here", "454")
a = Number.parseInt(a)
alert("You entered a of type " + (typeof a))
document.write(a)

//confrim
alert("Enter your value")
let a1 = prompt("Enter your value")
a1 = Number.parseInt(a1)
let write = confirm("Do you want to write it to the page")
if (write) {
    document.write(a1)
}
else {
    document.write("Please allow me to write")
}