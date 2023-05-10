function menuBuilder() {
  //  Menu Structure Builder
  document.body.append(menuContainer);
  menuContainer.classList.toggle("menu");
  menuContainer.classList.toggle("none");
  menuButtons.forEach((element) => {
    // Button Builder
    const button = document.createElement("div");
    menuContainer.appendChild(button);
    button.textContent = element;
    if (element == menuButtons[1]) {
      // Set a Center Button with a different Style
      button.classList.add("centerButton");
    }
    button.setAttribute("id", element + "Button"); //id for future use
    button.classList.add("button");
  });
}

function rightClickMenu() {
  //This is the "Open Menu" function
  window.oncontextmenu = (e) => {
    // set current cords for menu
    e.preventDefault();
    menuContainer.style.zIndex = "5";
    menuContainer.style.left = e.pageX + "px";
    menuContainer.style.top = e.pageY + "px";
    menuContainer.classList.toggle("none");
  };
  whiteOrBlackButton(); //This 3() are te possible button alternatives
  gridResolutionButton();
  changeColorButton();
}
