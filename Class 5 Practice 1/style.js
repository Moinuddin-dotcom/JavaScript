//Chapter 1 - Q1
let a = 5;
let b = "Moin";

console.log(a + b + 8);

//Chapter 1 - Q2
console.log(typeof a, typeof b, typeof 8);


//Chapter 1 - Q3
const a1 = {
    Name: "Moinuddin",
    age: "25",
    "student ID": "5656",
    Gender: "Male",
};
console.log(a1["age"]);

// a1 = 54 Not allowed
// a1 = {} Not allowed

//Chapter 1 - Q4
a1['Name'] = "Moin"
a1['friend'] = "Tasif"
console.log(a1);

//Chapter 1 - Q5
const dict = {
    Dictionary: "a book or electronic resource that lists the words of a language",
    lexicon: "the vocabulary of a person, language, or branch of knowledge.",
    wordbook: "a study book containing lists of words and meanings or other related information.",
    vocabulary: "the body of words used in a particular language.",
    glossary: "an alphabetical list of words relating to a specific subject, text, or dialect, with explanations; a brief dictionary."
}
console.log(dict);
//Or we can write this
console.log(dict["vocabulary"]);