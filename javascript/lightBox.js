let index = 0;
let images = document.querySelectorAll("main img")

const showLightBox = (index) => {
    let image = document.querySelector(".lightBox img");
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector(".lightBox").style.display = "flex";
    image.src = images[index].src;
    image.alt= images[index].alt;
}
document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", showLightBox.bind(this, index), false);
    index++;
})

function cancel() {
    document.querySelector("body").style.overflow = "visible";
    document.querySelector(".lightBox").style.display = "none";

}
document.addEventListener('keydown', (event) => {
    if(event.keyCode === 27) {
        let modal = document.querySelector(".lightBox");
        if(modal.style.display === "flex") {
            cancel();
        }
    }
});