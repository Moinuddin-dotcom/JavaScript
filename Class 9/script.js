// FOR LOOP - This is a tradional for loop this is old but still use.
const prompt = require("prompt-sync")();
let n = prompt("Enter the value of n ");
n = Number.parseInt(n);
sum = 0;
for (let i = 0; i < n; i++) {
    sum += i + 1;
    console.log(i + 1, "+");
}
console.log("First command is " + n + "total sum = " + sum);

// or we can write this
sum = 0;
for (a = 0; a < 12; a++) {
    sum += a;
    console.log((a), "+");
}
console.log("First command is " + a + " and total sum = " + sum);



// for in loop
let obj = {
    Moinuddin: 78,
    Tasif: 80,
    Shawon: 40,
    Prayash: 90,
};
for (let a in obj) {
    console.log("Marks of " + a + " is " + obj[a]);
}
// or we can write this
for (let a in obj) {
    console.log(`Marks of ${a} is ${obj[a]}`);
}
