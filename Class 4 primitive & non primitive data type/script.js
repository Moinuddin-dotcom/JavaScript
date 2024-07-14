// nn bb ss u there is seven kind of primitive data type in java script

let a = null;
let b = 345;
let c = true; //can also be false
let d = BigInt("567") + BigInt("3");
let e = "Moinuddin";
let f = Symbol("I am a nice symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g);

console.log(typeof c);

// Non primitive data type Objects is JS
const item = {
    Name: "Moinuddin",
    age: "25",
    "student ID": "5656",
    Gender: "Male",
};

console.log(item["age"]);