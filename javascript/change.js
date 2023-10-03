function change(id) {
    let title = document.querySelector("h2");
    let date = document.querySelector("#date");
    let description = document.querySelector("#description");
    let image = document.querySelector("#certification");

    switch (id) {
        case 1:
            title.innerText = "Introduction to network"
            date.innerText = "2020"
            image.src = "/img/certificates/IntroductionToNetwork.png";
            image.alt = "Introduction to network certifikát"
            break;
        case 2:
            date.innerText = "2021"
            break;
        case 3:
            title.innerText = "Tutorial css"
            date.innerText = "září 2023"
            image.src = "/img/certificates/Coursera%202UHDG42AG36X_page-0001.jpg"
            image.alt = "tutorial css certifikát"
            break;
        case 4:
            title.innerText = "Introduction to .NET Core"
            date.innerText = "říjen 2023"
            image.src = "/img/certificates/Coursera%20JKLR57RFHV6C_page-0001.jpg";
            image.alt = "Introduction to .NET Core certifikát"
            break;
        case 5:
            title.innerText = "React Basics"
            date.innerText = "září 2023"
            image.src = "/img/certificates/Coursera%20JVGEQWTZ36FX_page-0001.jpg";
            image.alt = "React Basics certifikát"
            break;
    }
}