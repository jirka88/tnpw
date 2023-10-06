function change(id) {
    let title = document.querySelector("h2");
    let date = document.querySelector("#date");
    let description = document.querySelector("#description");
    let image = document.querySelector("#certification");

    switch (id) {
        case 1:
            title.innerText = "IT Essentials"
            date.innerText = "červen 2020"
            image.src = "/img/certificates/ItEssentials.jpg";
            image.alt = "Cisco IT Essentials"
            break;
        case 2:
            title.innerText = "Introduction to network"
            date.innerText = "červenec 2021"
            image.src = "/img/certificates/IntroductionToNetwork.png";
            image.alt = "Cisco Introduction to network"
            break;
        case 3:
            title.innerText = "Switching, Routing and Wireless Essentials"
            date.innerText = "říjen 2022"
            image.src = "/img/certificates/CCNAv7.jpg"
            image.alt = "Cisco Switching, Routing and Wireless Essentials"
            break;
        case 4:
            title.innerText = "Tutorial css"
            date.innerText = "září 2023"
            image.src = "/img/certificates/Coursera%202UHDG42AG36X_page-0001.jpg"
            image.alt = "tutorial css certifikát"
            break;
        case 5:
            title.innerText = "Introduction to .NET Core"
            date.innerText = "říjen 2023"
            image.src = "/img/certificates/Coursera%20JKLR57RFHV6C_page-0001.jpg";
            image.alt = "Introduction to .NET Core certifikát"
            break;
        case 6:
            title.innerText = "React Basics"
            date.innerText = "září 2023"
            image.src = "/img/certificates/Coursera%20JVGEQWTZ36FX_page-0001.jpg";
            image.alt = "React Basics certifikát"
            description.innerText = "Po absolvování tohoto kurzu jsem se naučil vytvářet opakovaně použitelné komponenty pro dynamické zobrazení dat v reactu. Dále jsem se seznámil s efektivním využitím props k předávání dat mezi komponentami, což umožňuje vytvářet dynamické, interaktivní stránky a formuláře. Kurz mě také připravil na vytvoření webové aplikace v Reactu a zdokonalil moje dovednosti v moderním vývoji webu."
            break;
    }
}
function seeFullSize() {
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector(".modal").style.display = "flex";
    let image = document.querySelector("#certification");
    let modalImg = document.querySelector("#modalImg");
    modalImg.src = image.src;
    modalImg.alt = modalImg.alt;

}
function cancel() {
    document.querySelector("body").style.overflow = "visible";
    document.querySelector(".modal").style.display = "none";

}
document.addEventListener('keydown', (event) => {
    if(event.keyCode === 27) {
        let modal = document.querySelector(".modal");
        if(modal.style.display === "flex") {
            cancel();
        }
    }
}); 