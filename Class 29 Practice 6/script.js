//Problem 1
let age = prompt("Enter your age")
age = Number.parseInt(age)
const currentAge = (age) => {
    return age >= 18 ? true : false
}

if (currentAge(age)) {
    alert("You can drive")
}
else {
    alert("You can not drive")
}

//Problem 2 start
let runAgain = true;
while (runAgain) {
    let age1 = prompt("Enter your age")
    age1 = Number.parseInt(age1)
    const currentAge1 = (age1) => {
        return age1 >= 18 ? true : false
    }
    // Problem 3 start
    if (age1 < 0) {
        console.error("Input valid age")
        break;
    }
    // Problem 3 end

    if (currentAge1(age1)) {
        alert("You can drive")
    }

    else {
        alert("You can not drive")

    }
    runAgain = confirm("Do you want to use another age?")
}
// // Problem 2 end


//Problem 4
let age2 = prompt("Enter your age")
age2 = Number.parseInt(age2)
const currentAge2 = (age2) => {
    return age2 >= 18 ? true : false
}

if (currentAge(age2)) {
    alert("You can drive")
}
else if (age2 <= 4) {
    location.href = "https://en.wikipedia.org/wiki/Bangladesh"
}
else {
    alert("You can not drive")
}

//Problem 5
let color = prompt("Enter your recommended background color")
document.body.style.background = color

