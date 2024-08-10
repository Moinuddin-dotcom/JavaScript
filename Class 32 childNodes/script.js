console.log(document.body.firstChild) //Getting first child of body where text node include
console.log(document.body.lastChild) //Getting last child of body where text node include
console.log(document.body.childNodes) ////Getting all nodelist of body where text node include

//Array.from - making array from nodelist
let a = Array.from(document.body.childNodes) //Converting nodelist into array
console.log(a) //Printing array