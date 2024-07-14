// Question 1 - Solution
let data = 'Har"';
console.log(data.length);

// Question 2 - Solution
//includes()
let n = "moinuddin";
let an = "Jarifa";
console.log(n.includes("moinuddin"));
console.log(an.includes("moinuddin"));

//OR we we can do this
const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox";
console.log(
    `The word "${word}" ${sentence.includes(word) ? "is in" : "is not"} this sentence`,
);
// in this console here we see "${word}" targeting the word fox and ${sentence} targeting the const sentence , for checking purpose either its true or false we useing includes(word)

//startsWith()
const sentence1 = "The quick brown fox jumps over the lazy dog.";
const word1 = "The";
console.log(
    `First word "${word1}" ${sentence.startsWith(word1) ? "is starting" : "is not starting"} this sentence`,
);

//endsWith()
const sentence2 = "The quick brown fox jumps over the lazy dog";
const word2 = "dog";
console.log(
    `The word "${word2}" ${sentence2.endsWith(word2) ? "is" : "is not"} ending word`,
);

// Question 3 - Solution
let h = "MOINCHY";
console.log(h.toLowerCase());

// Question 4 - Solution
let amount = "Please give BDT 1000";
console.log(amount.slice("Please give BDT ".length));
//or
console.log(amount.slice(16));

// Question 5 - Solution
let z = "Md Moinuddin Chowdhury";
console.log(z[4].replace(z[4], "a"));
console.log(z); //Yes we can do this kind of things but STRING are immmutable STRING CAN NOT BE CHANGED. SO, This is the reason this upper answer is wrong
let q = "Md Moinuddin Chowdhury";
q[4] = "a"; //it didn't giving us error
console.log(q); //but STRING can not be changed
