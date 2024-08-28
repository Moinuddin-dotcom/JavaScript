let x = document.getElementsByTagName('span')[0]
console.log(x)
let y = document.getElementsByTagName('span')[0]
console.dir(y)

console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

//innerHTML - vaild for element nodes only
first.innerHTML //it will show the inner html of the element
first.innerHTML = "Write by innerHTML" //it will change the inner html of the element

//outerHTML
first.outerHTML //it will show the outer html of the element
first.outerHTML = "<div>This is outerHTML</div>" //it will change the outer html of the element

//text content
console.log(document.body.textContent)

