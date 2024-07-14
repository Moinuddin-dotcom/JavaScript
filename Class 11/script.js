/*Ordinary or Old or Long process beacuse by this we have to use this code so many times. Like onece we write this code in present but in future if we need to change this code then we have to change this code in every places where i write this code. So, thats for why we use function.
 */
let a = 2;
let b = 4;
let c = 6;
console.log("The sum of a and b is a + b = ", 1 + (a + b) / 2);
console.log("The sum of b and c is b + c = ", 1 + (b + c) / 2);
console.log("The sum of c and a is c + a = ", 1 + (c + a) / 2);


/*
This is a easy way to create function but you see when i write function oneplusAvg(x, y) then x and y taking a and b value to calculate be when we try to print it like this console.log("The sum of a and b is a + b = ", oneplusAvg(x , y)); OR console.log("The sum of a and b is a + b = ", oneplusAvg()); then it showing US NaN . SO, IF i want to print it then i have to write console.log("The sum of a and b is a + b is ", oneplusAvg(a, b)); we have to use a and b because we make a let function which delacred let a = 2 let b = 4 and let c = 6 we didn't give any value on x and y so it showing us NaN.
*/

function oneplusAvg(x, y) {
    console.log("Done");
    return 1 + (x + y) / 2;
}
let a = 2;
let b = 4;
let c = 6;

console.log("The sum of a and b is a + b = ", oneplusAvg(a, b)); //We have to invoce the function to print or run it.
console.log("The sum of b and c is b + c = ", oneplusAvg(b, c));
console.log("The sum of c and a is c + a = ", oneplusAvg(c, a));

// Arrow function most used function

const sum = (p, q) => {
    return p + q;
}
console.log(9 + 7); // 9 taking p and q taking 7
// We can also write like this
let p = 9;
let q = 7;
const sum = (p, q) => {
    return p + q;
};
console.log("The sum of this number is = ", p + q);

