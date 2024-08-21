//matches
let id1 = document.getElementById("id1")
console.log(id1)
console.log(id1.matches(".class")) //retuns false beacuse there is no class named class
console.log(id1.matches(".box")) //retuns true beacuse there is a class named box

//closest
console.log(spn1.closest(".box"))
console.log(spn1.closest("#spn1"))

//contains
let spn1 = document.getElementById("spn1")
console.log(id1.contains(spn1)) //checking is spn1 is inside id1 or not if yes then retuns true else false
console.log(spn1.contains(spn1)) //it rerurns true beacuse spn1 is same element
console.log(spn1.contains(id1)) //checking is id1 is inside spn1 or not if yes then retuns true else false
