/**/
1.(arr.toString()) // this array use for to convert array from {arraey to string} which one is comma saparated value for example (1,2,3,4,5)


2.(arr.join(" and ") // this array use for separator like there is some numbers or words like (1,2,3,4,5) if i want to {give and or -} then we can use (arr.join(" and or -")) then in return we will see result like (1 and 2 and 3 and 4 and 5) or (1 - 2 - 3 - 4 - 5)


3.(arr.pop()) = this array remove last element from the element or commanded line. 


4.(arr.push()) = this array add a new element on the end of exicsting element.like we have an element(1, 2, 3, 4, 5) so if we use arr.push("Moin") then it will return me(1, 2, 3, 4, 5, Moin)


5.(arr.shift()) = this array remove first element from the exicsting element like we have an element(1, 2, 3, 4, 5) so if we use arr.shift() then it will return me(2, 3, 4, 5)


6.(arr.unshift(Moin)) = this array add a new element on the start of exicsting element like we have an element(1, 2, 3, 4, 5) so if we use(arr.unshift(Moin)) then it will return me(Moin, 1, 2, 3, 4, 5)

7. 	Note1: (.unshift & .push) this two array are simillar.unshift add new element on start & .push add new element on end.
    &&
    Note2: (.shift & .pop) this two array are simillar.shift remove first element & .pop remove last element.

8. delete = this is use for delete spacificie element from element line(like the line is { 1, 2, 3, 4, 5, 6} after using { delete a[2] then result will be { 1, 2, empty, 4, 5, 6}

9. Concat() = use to join new arrays

10..sort() = this array method use for to maintain proper seriel but it maintain proper seriel by alphabetically for example there is a element like[let a = (5, 1, 3, 2, 4, 11, 22, 55)] after using sort 	method sort will keep them on a proper line like [1, 11, 2, 22, 3, 4, 5, 55] . it also have an compare method but to run compare method we have to must use a function.
11..reverse() // it just change path

12..splice() = this array help us to do add number or remove number or words from an element, like we have an element[let number = [1, 2, 3, 4, 5] by using.splice we can remove number and simply add new numbers or new words on element.
    Note: if forget then have to see again Class 63(13: 40 min)

13..slice() = this array help us add a new arry, it means it can't change exicting arry but by using new name it can change it.
let splc = [1, 2, 3, 4, 5, 6];
let newsplc = splc.slice(2);
console.log(newsplc);

