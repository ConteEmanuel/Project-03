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
function unBuildGrid(){
  while(cellContainer.firstChild){
    cellContainer.removeChild(cellContainer.firstChild);}
}
function gridResolutionButton () {
  const gridButton = document.getElementById('gridButton');
  gridButton.onclick = (e) => {
    cellRow=101;
    while(cellRow > 100){
    cellRow= prompt('How many cells/row do you want? Máx is 100cells', 'default is 16cells');
  }
    unBuildGrid();
    gridBuilder();
    menuContainer.classList.toggle("none"); 
  }
}
