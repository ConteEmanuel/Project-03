function whiteOrBlackButton() {
  const whiteButton = document.getElementById("whiteButton"); //build button from menuArray[0]
  if (initialWhiteColor == 1) {
    // This set WhiteColor Button Text only the first time
    whiteButton.textContent = "black";
    initialWhiteColor = 0;
  }

  whiteButton.onclick = (e) => {
    if (initialWhiteColor == 1) {
      // This set WhiteColor Button Text only the first time
      whiteButton.textContent = "black";
      initialWhiteColor = 0;
    }
    if (cursorColor != "random") {
      lastColor = cursorColor;
    }
    //set next cursor state and next button text
    switch (cursorColor) {
      case "black": {
        cursorColor = "white";
        whiteButton.textContent = "black";
        break;
      }
      case "white": {
        cursorColor = "black";
        whiteButton.textContent = "white";
        break;
      }
      case "random": {
        cursorColor = lastColor;
        switch (lastColor) {
          case "white": {
            whiteButton.textContent = "black";
            break;
          }
          case "black": {
            whiteButton.textContent = "white";
            break;
          }
        }
      }
    }
    menuContainer.classList.toggle("none"); //close menu when click}
  };
}

function unBuildGrid() {
  //This remove all Existent Child Cells
  while (cellContainer.firstChild) {
    cellContainer.removeChild(cellContainer.firstChild);
  }
}

function gridResolutionButton() {
  const gridButton = document.getElementById("gridButton");
  gridButton.onclick = (e) => {
    cellRow = -1;
    for (
      cellRow;
      cellRow > 100 || cellRow < 0 || isNaN(cellRow); //keep prompt until get a number from 1 to 100
      cellRow = prompt("Choose Grid Resolution", "Enter a number from 1 to 100")
    ) {
      cellRow = Number(cellRow);
    }
    menuContainer.classList.toggle("none");
    unBuildGrid(); //"unBuild" Current grid and "reBuild" Grid
    gridBuilder();
  };
}
function randomColorButton() {
  const randomButton = document.getElementById("randomButton");
  randomButton.onclick = (e) => {
    //set next cursor state != from the last
    let a = randomColor;
    while (
      randomColor == "#000000" ||
      randomColor == "#fffffff" ||
      randomColor == a
    ) {
      //a helps to change the last color used
      randomColor = String(Math.floor(Math.random() * 1000000));
      cursorColor = "random";
      randomColor = "#" + randomColor;
    } // this make the #sixDigits RGB format
    menuContainer.classList.toggle("none"); //close menu
  };
}
