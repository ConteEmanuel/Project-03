function whiteOrBlack() {
    const whiteButton = document.getElementById("whiteButton");
    whiteButton.onclick = (e) => {
        if (cursorColor == "black") {
            cursorColor = "white";
            whiteButton.textContent="black";
        } else {
            cursorColor = "black";
            whiteButton.textContent="white";
        }
    menuContainer.classList.toggle("none");
    };
}
