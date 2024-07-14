let marks = {
    Moinuddin: 55,
    Shawon: 40,
    Tasif: 50,
    Prayash: 60,
};
/*
*/
// console.log(marks);
// console.log(typeof "Moinuddin");

// For loops - Q1
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log(
        "Markes of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

// For in loops - Q2
for (let i in marks) {
    console.log(`Markers of ${i} are ${marks[i]}`);
}

// While - Q3
/*
*/
const prompt = require("prompt-sync")();
let cn = 44;
let i;
while (i != cn) {
    console.log("Please enter correct number");
    i = prompt("Enter actual number = ");
}
console.log("This is a correct number");

// Function - Q4
/*
*/
const mean = (a, b, c, d) => {
    return (a, b, c, d) / 2;
}
let a = 5
let b = 6
let c = 7
let d = 8
console.log("The mean of (a,b,c,d)/2 is ", mean(a, b, c, d))

// or

// here we can use also prompt function like Q3
const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4;
};
console.log(mean(7, 8, 9, 10));