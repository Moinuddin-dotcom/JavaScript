// let prompt = require("prompt-sync")(); //We will use it when code in Replit
// let min = 1;
// let max = 100;
// let generateRandomNum = Math.ceil(Math.random() * (max-min)+min); //to activate it we have to activate let min = 1; let max = 100;
// OR we can write this but it is second rule is mostly recommended
let generateRandomNum = Math.ceil(Math.random() * 100);
// console.log(`My guess number is ${generateRandomNum}`);
let a;
let attempt = 0;
while (a != generateRandomNum) {
    attempt++;
    a = prompt("Enter your guessNumber: ");
    a = Number.parseInt(a);
    if (a > generateRandomNum) {
        console.log("This is bigger than guess number try again");
    } else if (a < generateRandomNum) {
        console.log("This is lower than guess number try again");
    } else {
        console.log("Congratulation you guess the correct number");
        console.log(`You guess the acctual number in ${attempt} trial`);
    }
}

/*
This is Course winnner Code

let a = Math.random() * 100;
a = Number.parseInt(a);
let inp;
let score = 100;
while (inp != a) {
  score = score - 1;
  inp = prompt("Enter the number ");
  if (inp == a) {
    console.log("Congrats");
    console.log(`You guess the actual number in ${100 - score} chances`);
  } else if (inp > a && inp < 100) {
    console.log("Your number is greater than the actual number");
  } else if (inp < a && inp > 0) {
    console.log("Your number is smaller than the actual number");
  } else {
    console.log("Enter number between 1 to 100");
  }
}
*/