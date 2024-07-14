console.log("JavaScript tutorial 3: Var, let and const");
// var a = 54 we shoud not use var beacuse var is a global variable we will use let and const
// let  can be updated but can not be redeclared
let a = 54;
let b = "Moinuddin";
let c = null;
let d = undefined;

const author = "Moinuddin chy";
console.log(author);
// let author = "Moinuddin"; //it will show error beacuse const can not be changed

{
  let b = "this";
  console.log(b);
}

console.log(b);