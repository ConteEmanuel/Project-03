function whiteOrBlack() {
  const whiteButton = document.getElementById("whiteButton"); //build button from menuArray[0]
  whiteButton.onclick = (e) => {    //set next cursor state and next button text
    if (cursorColor == "black") {
      cursorColor = "white";
      whiteButton.textContent = "black";
    } else {
      cursorColor = "black";
      whiteButton.textContent = "white";
    }
    menuContainer.classList.toggle("none"); //close menu
  };
}
