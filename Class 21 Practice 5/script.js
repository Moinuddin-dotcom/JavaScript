
// Excersise 5 - Problem 1
const prompt = require("prompt-sync")(); //we install the prompt function on replit

let arr = [1, 2, 3, 4, 5]; //Making a array
let a = prompt("Enter your number: "); //activate prompt where a is a new array
a = Number.parseInt(a); //converting string into a number
arr.push(a); //pushing inputed number in the end of array
console.log(arr); //Finally printing it OR checking is my new number adding on my first array or not , the result is YES

// Excersise 5 - Problem 2
const prompt = require("prompt-sync")(); //we install the prompt function on replit
let arr = [1, 2, 3, 4, 5]; //Making a array
let a; //we keeping let a out of while loop because in while loop a is already checking the following command
while (a != 0) {
  a = prompt("Enter your number: "); //activate prompt where a is a new array
  a = Number.parseInt(a); //converting string into a number
  arr.push(a); //pushing inputed number in the end of array
}
console.log(arr); //Finally printing it OR checking is my new number adding on my first array or not , the result is YES

// Excersise 5 - Problem 3
let arr = [50, 60, 70, 77, 66, 55];
let a = arr.filter((e) => {
  return e % 10 == 0;
});
console.log(a);

// Excersise 5 - Problem 4
let arr = [2, 4, 5, 6 , 30];
let a = arr.map((v) => {
  return v ** 2;
  // OR
  // return v * v;
});
console.log(a);

// Excersise 5 - Problem 5
let arr = [1, 2, 3, 4, 5];
const nw_func = (n1, n2) => {
  return n1 * n2;
};
let n = arr.reduce(nw_func);
console.log(n);