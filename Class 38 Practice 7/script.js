//Problem 1
let r = document.getElementById("red")
console.log(r.style.background = "red")
console.log(r.style.color = "black")

//Problem 2
//This is simply first need to creat a table then go in View page source and then go to the table and then inspect and then go to the tbody and then inspect and then go to the


//Problem 3
let Gcolor = document.body.getElementsByTagName("main")[0].firstElementChild.firstElementChild.style.color = "gray"
let Bcolor = document.body.getElementsByTagName("main")[0].firstElementChild.lastElementChild.style.color = "blue"

//Problem 4
// const changeBg = () => {
// }
// console.log(changeBg)
let b = document.body.querySelectorAll("li")
Array.from(b).forEach((e) => {
    e.style.background = "cyan"
    e.style.color = "white"
})

//Problme 5
//This ans is None of this