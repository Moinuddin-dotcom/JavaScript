const prompt = require("prompt-sync")();

let age = prompt("What's your age? ");
age = Number.parseInt(age); //converting string to number
console.log(`Your age is ${age}`);
//if
if (age > 18) {
  console.log("You are an adult");
}
else if (age < 12 && age >= 17) {
  console.log("You are a teenager");
}

else {
  console.log("You almost close")
}
//if else if else
if (age < 0) {
  console.log("This is a invailed age");
} else if (age < 9) {
  console.log("You are a kid");
} else if (age < 18 && age >= 9) {
  console.log("You are a kid and you can drive after 18");
} else {
  console.log("You can adult");
}

// Ternary operator
console.log("You can", age > 18 ? "drive" : "Not drive");



