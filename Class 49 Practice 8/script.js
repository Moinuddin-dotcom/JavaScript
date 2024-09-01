// problem-3 started
document.getElementById("google").addEventListener("click", function () {
    window.location = 'https://www.google.com'
    newwindow.focus()
})
document.getElementById("facebook").addEventListener("click", function () {
    window.location.href = "https://www.facebook.com"
})
document.getElementById("twitter").addEventListener("click", function () {
    window.location.href = "https://www.twitter.com"
})
// problem-3 ended

// problem-5
setInterval(async function () {
    document.querySelector("#bulb").classList.toggle("bulb")
}, 500)