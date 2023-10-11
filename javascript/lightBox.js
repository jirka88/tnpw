let index = 0;
let images = document.querySelectorAll("main img")
let image = document.querySelector(".lightBox img");
const showLightBox = (indexLocal) => {
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector(".lightBox").style.display = "flex";
    image.src = images[indexLocal].src;
    image.alt = images[indexLocal].alt;
    index = indexLocal;
}

function cancel() {
    document.querySelector("body").style.overflow = "visible";
    document.querySelector(".lightBox").style.display = "none";

}

document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", showLightBox.bind(this, index), false);
    index++;
})

document.querySelector("button.back").addEventListener("click", () => {
    if(index === 0) {
        return;
    }
    index--;
    image.src = images[index].src;
    image.alt = images[index].alt;
});
document.querySelector("button.next").addEventListener("click", () => {
    if(index === images.length) {
        return;
    }
    index++;
    image.src = images[index].src;
    image.alt = images[index].alt;
});
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        let modal = document.querySelector(".lightBox");
        if (modal.style.display === "flex") {
            cancel();
        }
    }
});