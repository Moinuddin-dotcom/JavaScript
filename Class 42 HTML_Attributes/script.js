let a = ids.getAttribute("class")
console.log(a)
console.log(ids.hasAttribute("class")) //returns true
console.log(ids.hasAttribute("style")) //returns false because it check that is the declared class is in this element or not
ids.setAttribute("hidden", "true") //this will hide the element
ids.setAttribute("class", "block unblock") //this will change the class of the element
ids.removeAttribute("class") //removes the class attribute
console.log(ids.dataset)
console.log(ids.dataset.game)
console.log(ids.dataset.player)