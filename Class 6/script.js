console.log("Operators in JS");
//Arithmetic operators
let a = 10;
let b = 4;
console.log("a+b = ", a + b);
console.log("a-b =", a - b);
console.log("a*b =", a * b);
console.log("a/b =", a / b);
console.log("a**b =", a ** b);
console.log("a%b =", a % b);
console.log("a++ =", a++); //if we use after ++ it means value is increased but it we print 10 also if now we try to print console.log("a =", a); then it will print 11 (it means it increased the value but at first it have print 10)
console.log("++a =", ++a); //if we use before ++ it means value is increased it will print 11 first
console.log("a-- =", a--);
console.log("--a =", --a);
console.log("a =", a);

//Assingment operators
let assingment = 10;
assingment += 5; //same as assingment = assingment + 5
console.log("assingment is now = ", assingment);
assingment -= 5; //same as assingment = assingment - 5
console.log("assingment is now = ", assingment);
assingment *= 5; //same as assingment = assingment * 5
console.log("assingment is now = ", assingment);
assingment /= 5; //same as assingment = assingment / 5
console.log("assingment is now = ", assingment);
assingment %= 5; //same as assingment = assingment % 5
console.log("assingment is now = ", assingment);
assingment **= 5; //same as assingment = assingment ** 5
console.log("assingment is now = ", assingment);

//Comparison operators
let comp1 = 6;
let comp2 = "6";
console.log("comp1==comp2 is", comp1 == comp2);
console.log("comp1!=comp2 is", comp1 != comp2);
console.log("comp1===comp2 is", comp1 === comp2); //if comp1 & comp2 value is same then it will print true but if comp1 & comp2 value is not same, not same means this ("6") then it will print false
console.log("comp1!==comp2 is", comp1 !== comp2);

//Logical operators
let x = 5;
let y = 6;
console.log(x < y && x == 5); // && this is and operator this will print true if both the condition is true this will print false if one of the condition is false
console.log(x > y || x == 5); // || this is or operator this will print true if one of the condition is true this will print false if both the condition is false
console.log(!false); // not of false
console.log(!true); // not of true