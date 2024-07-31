
// Excersise 5 - Problem 1
//const prompt = require("prompt-sync")(); //we install the prompt function on replit
let arr = [1, 2, 3, 4, 5]; //Making a array
let a = prompt("Enter your number: "); //activate prompt where a is a new array
a = Number.parseInt(a); //converting string into a number
arr.push(a); //pushing inputed number in the end of array
console.log(arr); //Finally printing it OR checking is my new number adding on my first array or not , the result is YES

// Excersise 5 - Problem 2
//const prompt = require("prompt-sync")(); //we install the prompt function on replit
let arr1 = [1, 2, 3, 4, 5]; //Making a array
let a1; //we keeping let a out of while loop because in while loop a is already checking the following command
while (a != 0) {
    a1 = prompt("Enter your number: "); //activate prompt where a is a new array
    a1 = Number.parseInt(a1); //converting string into a number
    arr.push(a1); //pushing inputed number in the end of array
}
console.log(arr1); //Finally printing it OR checking is my new number adding on my first array or not , the result is YES

// Excersise 5 - Problem 3
let arr2 = [50, 60, 70, 77, 66, 55];
let a2 = arr2.filter((e) => {
    return e % 10 == 0;
});
console.log(a2);

// Excersise 5 - Problem 4
let arr4 = [2, 4, 5, 6, 30];
let a4 = arr4.map((v) => {
    return v ** 2;
    // OR
    // return v * v;
});
console.log(a4);

// Excersise 5 - Problem 5
let arr5 = [1, 2, 3, 4, 5];
const nw_func = (n1, n2) => {
    return n1 * n2;
};
let n = arr5.reduce(nw_func);
console.log(n);