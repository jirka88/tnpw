function change(id) {
    let title = document.querySelector("h2");
    let date = document.querySelector("#date");
    let description = document.querySelector("#description");
    let image = document.querySelector("#certification");

    switch (id) {
        case 1:
            title.innerText = "IT Essentials"
            date.innerText = "červen 2020"
            description.innerText = "Během tohoto kurzu jsem získal základní znalosti o hardwaru a jeho správě, a to včetně způsobů, jak správně zacházet s počítačovým vybavením a provádět základní opravy či jak složit počítač a na něm nainstalovat operační systém. Kromě toho jsem se seznámil s různými periferiemi, která jsou připojená k zařízením, a naučil jsem se, jak je nastavit a spravovat. V další části kurzu byl i úvod do počítačových sítích. "
            image.src = "/img/certificates/ItEssentials.jpg";
            image.alt = "Cisco IT Essentials"
            break;
        case 2:
            title.innerText = "Introduction to network"
            date.innerText = "červenec 2021"
            description.innerText = "Kurz mě naučil základy síťového inženýrství, včetně vytváření a konfigurace lokálních sítí, správu adres IPv4 a IPv6, a zabezpečení sítě. Také jsem získal schopnosti konfigurovat routery, switche a koncová zařízení pro poskytování přístupu k lokálním i vzdáleným zdrojům a pro udržení konektivity mezi vzdálenými zařízeními. "
            image.src = "/img/certificates/IntroductionToNetwork.png";
            image.alt = "Cisco Introduction to network"
            break;
        case 3:
            title.innerText = "Switching, Routing and Wireless Essentials"
            date.innerText = "říjen 2022"
            description.innerText = "Tento kurz mě naučil konfigurovat a řešit problémy související s VLAN, bezdrátovými sítěmi a mezi-VLAN směrováním na routerech a switchech. Také jsem získal dovednosti v konfiguraci redundance v síti pomocí STP a EtherChannel. Díky práci s reálným hardwarem a simulátorem Cisco Packet Tracer jsem zlepšil své kritické myšlení a schopnosti řešit síťové problémy. Kurz zahrnoval i dynamické adresování a protokoly pro zajištění dostupnosti a spolehlivosti sítě."
            image.src = "/img/certificates/CCNAv7.jpg"
            image.alt = "Cisco Switching, Routing and Wireless Essentials"
            break;
        case 4:
            title.innerText = "Tutorial css"
            date.innerText = "září 2023"
            description.innerText= "Po absolvování W3Schools kurzu jsem získal pokročilé dovednosti v oblasti CSS, které mi umožňují vytvářet moderní a esteticky poutavé webové stránky. Nyní mám hlubší porozumění různým aspektům CSS."
            image.src = "/img/certificates/Coursera%202UHDG42AG36X_page-0001.jpg"
            image.alt = "tutorial css certifikát"
            break;
        case 5:
            title.innerText = "Introduction to .NET Core"
            date.innerText = "říjen 2023"
            description.innerText = "Během kurzu Introduction to .NET Core jsem získal znalosti a dovednosti v oblasti vývoje webových aplikací. První modul mě seznámil s klíčovými aspekty .NET Core, včetně jeho historie a nastavení vývojového prostředí. Druhý modul se zaměřoval na ASP.NET Core, kde jsem se naučil pracovat s MVC vzorem, routováním a akčními metodami. Třetí modul prohloubil mé znalosti v oblasti dependency injection, middleware a konfigurace, a poskytl mi praktické zkušenosti s vytvářením .NET Core aplikací od základů.";
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
    document.querySelector(".lightBox").style.display = "flex";
    let image = document.querySelector("#certification");
    let modalImg = document.querySelector("#modalImg");
    modalImg.src = image.src;
    modalImg.alt = image.alt;

}
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