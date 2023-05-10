let randomColor;

function whiteOrBlackButton() {
  const whiteButton = document.getElementById("whiteButton"); //build button from menuArray[0]
  whiteButton.onclick = (e) => {
    //set next cursor state and next button text
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
function unBuildGrid() {
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
      cellRow > 100 || cellRow < 0 || isNaN(cellRow );
      cellRow = prompt("enter 1 to 100 number", "not 101")
    ) {
      cellRow = Number(cellRow);
    }
    menuContainer.classList.toggle("none");
    unBuildGrid();
    gridBuilder();
  };
}
function changeColorButton() {
  const changeButton = document.getElementById("changeButton"); //build button from menuArray[0]
  changeButton.onclick = (e) => {
    //set next cursor state and next button text
    let a = randomColor;
    while(randomColor=="#000000" || randomColor == "#fffffff" || randomColor == a){
      randomColor= String(Math.floor((Math.random()) * 1000000));
      cursorColor="random";
      randomColor="#"+randomColor;}
      menuContainer.classList.toggle("none"); //close menu
    }

  };