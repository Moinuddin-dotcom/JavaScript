//getElementsByClassName
let cclor = document.getElementsByClassName("card-title")[0]
cclor.style.color = "red"


//getElementById
let clr = document.getElementById("rTitel")
clr.style.color = "red"

//querySelectorAll
let ctitels = document.querySelectorAll(".card-title")
ctitels[0].style.color = "red"
ctitels[1].style.color = "blue"
ctitels[2].style.color = "green"
console.log(ctitels)

//querySelector
document.querySelector(".change").style.color = "black"
document.querySelector(".change").style.background = "aqua"

//getElementsByTagName
console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))

//getElementsByName
console.log(document.getElementsByName("search"))

