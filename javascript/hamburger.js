let bars = document.querySelectorAll(".bar")
let hamburger = document.querySelector(".hamburger")
let links = document.querySelector(".links")
let nav = document.querySelector("nav");
let icons = document.querySelector(".icons")

hamburger.addEventListener("click", event => {
    bars.forEach(bar => {
        bar.classList.toggle("activated")
    })
    links.classList.toggle("activated")
    nav.classList.toggle("activated")
    icons.classList.toggle("activated")
})