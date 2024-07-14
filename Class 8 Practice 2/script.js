const prompt = require("prompt-sync")();
let age = prompt("What's your age? ");
age = Number.parseInt(age); //converting string to number
console.log(`Your age is ${age}`);

// Class 2 - P2-Slu-1
if (age < 0) {
    console.log("This is a invalid age")
}
else if (age > 10 && age < 20) {
    console.log("Your age lies between 10 and 20")
}
else {
    console.log("Your age does not lies between 10 and 20")
}

// Class 2 - P2-Slu-2(1)
const prompt = require("prompt-sync")();
let expr = prompt("What is the price of ");

switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
        console.log('Mangoes are $4 a pound.');
        break;
    case 'Papayas':
        console.log('papayas are $2.79 a pound.');
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}

// Class 2 - P2-Slu-2(2)
const prompt = require("prompt-sync")();
let age = prompt("What is your age? ");
age = Number.parseInt(age);
console.log(`Your age is ${age}`)

switch (age) {
    case 12:
        console.log("Your age is 12");
        break;
    case 13:
        console.log("Your age is 13");
        break;
    case 14:
        console.log("Your age is 14");
        break;
    case 15:
        console.log("Your age is 15");
        break;
    default:
        console.log(`Age ${age} is not found `);
}

// Class 2 - P2-Slu-2(3)
const prompt = require("prompt-sync")();
let dishes = prompt("What foods do you need? ");
switch (dishes) {
    case "Biriyani":
        console.log("Biryani is available");
        break;
    case "Polao":
        console.log("Polao is available");
        break;
    case "Haidrabadi-Biriyani":
        console.log("Haidrabadi-Biryani is available");
        break;
    case "Water":
        console.log("Water is available");
        break;
    default:
        console.log(`Sorry, ${dishes} is not available`);
}

Class 2 - P2 - Slu - 3
const prompt = require("prompt-sync")();
let number = prompt("Enter your number: ");
number = Number.parseInt(number);
if (number % 2 == 0 && number % 3 == 0) {
    console.log(`This number is divisible by 2 and 3`);
} else if (number % 2 == 0) {
    console.log(`This number ${number} is divisible by only 2`);
} else if (number % 3 == 0) {
    console.log(`This number ${number} is divisible by only 3`);
} else {
    console.log(`This numbers ${number} is not divisible by 2 and 3`);
}

Class 2 - P2 - Slu - 4
const prompt = require("prompt-sync")();
let number = prompt("Enter your number: ")
number = Number.parseInt(number);

if (number % 2 == 0 || number % 3 == 0) {
    console.log(`This number ${number} is divisible by 2 or 3`)
} else {
    console.log(`This number ${number} is not divisible by 2 or 3`)
}

Class 2 - P2 - Slu - 5

const prompt = require("prompt-sync")();
let age = prompt("Enter your age: ")
age = Number.parseInt(age);

console.log("Enter your age: ", (age > 18) ? "You can drive" : "You can not drive")