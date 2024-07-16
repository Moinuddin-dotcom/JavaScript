let num = [4, 5, 6, 2, 7];

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}
//OR We can use forEach loop to print it by multiply
//forEach loop
num.forEach((e) => {
    console.log(e * e);
});

// Array.from helps us to convert any object into array
//Array.from
let n = "Moin";
let arr = Array.from(n);
console.log(arr);

//for...of
for (let i of num) {
    console.log(i);
}
//for...in
for (let i in num) {
    console.log(num[i]);
}
