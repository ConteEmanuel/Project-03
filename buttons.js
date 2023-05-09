function whiteOrBlack() {
    const whiteButton = document.getElementById("whiteButton");
    whiteButton.onclick = (e) => {
        if (cursorColor == "black") {
            cursorColor = "white";
        } else {
    cursorColor = "black";
    }
    menuContainer.classList.toggle("none");
    };
}
