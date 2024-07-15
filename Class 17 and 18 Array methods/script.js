let number = [1, 2, 3, 4, 5, 6, 7];
let a = number.toString(); // a is now a string
console.log(a);
console.log(typeof a);
let a1 = number.join(" and "); //join method
console.log(a1);

let b = number.pop();
console.log(number); // removing last element from the array
console.log(number, b); // pop returns the popped element

let b1 = number.push("Moinuddin"); // adding a new element in the array
console.log(number);

let c = number.shift(); //removing first element from the array
console.log(number);

let c1 = number.unshift("Tasfi"); //adding new element in the array
console.log(number);

delete number[3]; //delete is a operator ,deleting number or item from array
console.log(number);

let s1 = [1, 2, 3, 4];
let s2 = [5, 6, 7, 8];
let s3 = [9, 10, 11, 12];
let s4 = s1.concat(s2, s3); //we can make new array to get concat
console.log(s4);
//OR
console.log(s1.concat(s2, s3));

//sort()
let e = [9, 3, 4, 5, 2, 7, 8, 6, 1, 0, 12, 22, 555, 444, 888, 333];
console.log(e.sort());
// if we use compare
let compare = (a, b) => {
    return a - b;
};
let D = [9, 3, 4, 5, 2, 7, 8, 6, 1, 0, 12, 22, 555, 444, 888, 333];
console.log(D.sort(compare));
// D.reverse()

//splice
let splc = [1, 2, 3, 4, 5, 6];

let deletedValues = splc.splice(2, 3, "333", "444", "555"); //and we can check deleted values
splc.splice(2, 3, "333", "444", "555");
console.log(splc);
console.log(deletedValues);

//slice
let newsplc = splc.slice(2);
console.log(newsplc);
