//map
let arr = [14, 24, 34];
//Okay if i need some number to do + - ** / and we can do with index, array to  , so i can creat a filter function like
// where a is a new array
let a = arr.map((value, index, array) => {
    console.log(value, index, array);
    return value + 2;
});
console.log(a);

// filter

//Here is a array
let arr2 = [55, 40, 30, 15.18, 12, 9, 4, 5, 2];
//Okay if i need some number which below 10 , so i can creat a filter function like
// where a2 is a new array
let a2 = arr2.filter((element) => {
    return element < 10;
});
console.log(a2);
// So, i will get result 5,4,9,2

//reduce
//.reduce = this function use to add number with another , for exm: let arr3 = [1,3,5,7,9,2,1] . So, it wii add them like 1+3=4 then 4+5=9 then 9+7=16 then 16+9=25 then 25+2=27 then 27+1=28 and so on . So, if we need to use return reduce(function) this function could be any name
//Now
/*
*/
let arr3 = [1, 3, 5, 7, 9, 2, 1];
//where a3 is a new function also h1 targeting 1 and h2 targeting 2
let a3 = arr3.reduce((h1, h2) => {
    return h1 + h2;
});
console.log(a3);
// and now reduce should be in a function so we can write this
let arr4 = [1, 3, 5, 7, 9, 2, 1];
//where a3 is a new function also h1 targeting 1 and h2 targeting 2
//Creating function separately
const newFunc = (h1, h2) => {
    return h1 + h2;
};
let a4 = arr4.reduce(newFunc);
console.log(a4);
