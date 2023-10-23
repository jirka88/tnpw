let index = 0;
let images = document.querySelectorAll("main img")
let image = document.querySelector(".lightBox img");
const changeImage = (index) => {
    image.src = images[index].src;
    image.alt = images[index].alt;
}
const showLightBox = (indexLocal) => {
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector(".lightBox").style.display = "flex";
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
    changeImage(index)
});
document.querySelector("button.next").addEventListener("click", () => {
    if(index === images.length) {
        return;
    }
    index++;
    changeImage(index)
});
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        let modal = document.querySelector(".lightBox");
        if (modal.style.display === "flex") {
            cancel();
        }
    }
});