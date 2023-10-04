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
            break;
    }
}