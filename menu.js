const menuButtons = ["paint", "change", "more"]; // from menuBuilder
const menuContainer = document.createElement("div"); // from menuBuilder

function menuBuilder() {    //Menu Structure Builder
    document.body.append(menuContainer);
    menuContainer.classList.add("menu");
    menuButtons.forEach((element) => {  // Button Builder
        const button = document.createElement("div");
        menuContainer.appendChild(button);
        button.textContent = element;
        if (element == menuButtons[1]) { // Set a Center bigger button
            button.classList.add("centerButton");
    }
    button.setAttribute("id", element + "Menu"); //id for future use
    button.classList.add("button");
    });
}

function rightClickMenu() { // set cords for menu
    window.oncontextmenu = (e) => {
        e.preventDefault();
        menuContainer.style.left = e.pageX + "px";
        menuContainer.style.top = e.pageY + "px";
    };
}
menuContainer.style.left = "-100px"; //Hide menu at load
menuBuilder();
rightClickMenu();
