let navbar = document.querySelector("nav");
let body = document.querySelector("body");
window.addEventListener("scroll", event => {
    let scrollTop = window.scrollY;
    if(scrollTop > 1) {
        navbar.style.transition = ".4s"
        navbar.style.background = "black";
    }
    else {
        navbar.style.background = "none";
    }
})
