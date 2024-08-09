console.log(console)

console.log("Hey this is moin") //Universal log

console.error("Hey this is moin's account you are not moin") // Return err 

console.assert(55 > 66) // return err if false
console.assert(77 > 66) // return undefined if true undefined means command is true

console.clear() // clear all console

let obj = {
    a: 1,
    b: 2,
    c: 3
}
console.table(obj) // creat a table format in browser console

console.warn("Dont tell your age") // it gives warning
console.info("Hey this is moin") // it gives info and similar to console.log
//time_timeEnd it calculate the time between time and timeEnd
console.time("p1")
console.timeEnd("p1")