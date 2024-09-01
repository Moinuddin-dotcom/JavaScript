let x = function (e) {
    console.log(e.target) //target : when we use this it will show us that whole line, which one is in html file but we can see it on browser console 
    alert("Hello World1");
}
let y = function (e) {
    alert("Hello World2");
}

btn.addEventListener("click", x)
btn.addEventListener("click", y)

let a = prompt("What is your favourite number?");
if (a == 2) {
    btn.removeEventListener("click", x)
}
