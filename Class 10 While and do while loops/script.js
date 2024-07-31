// let prompt = require("prompt-sync")();
let n = prompt("Enter your number here: ");
n = Number.parseInt(n);

// While loop
let i = 1;
while (i < n) {
    console.log(i);
    i++;
}

//Do While loop - it will print atleast one time which loops is defi
let j = 10;
do {
    console.log(j);
    j++;
} while (j < n);
