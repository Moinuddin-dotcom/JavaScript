let a = document.getElementsByTagName("div")[0]
// a.innerHTML = a.innerHTML + "<h1>Hello World!</h1>"

let div = document.createElement("div")
div.innerHTML = "<h1>Hey this is a new line</h1>"
a.append(div) //it creats a new element at the end of the container
a.prepend(div) //it creats a new element at the start of the container
a.before(div) //it creats a new element before the container
a.after(div) //it creats a new element after the container
a.replaceWith(div) //it creats a new element after the container


// Note: Check all this formate one by one but doing comment out



