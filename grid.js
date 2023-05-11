body.append(cellContainer);
cellContainer.classList.add("cellContainer");
document.body.append(instructions);
instructions.textContent="RightClick to Start";
instructions.classList.add('absolutePosition');

function gridBuilder() {
  //gridBuilder with "n" cells, CellsRows <=  100
  cell = cellRow * cellRow;
  while (cell > 0) {
    let divCell = document.createElement("div");
    cellContainer.append(divCell);
    divCell.classList.add("cell");
    divCell.style.width = Math.trunc(500 / cellRow) + "px"; // trunc helps fixing grid Differences
    divCell.style.height = Math.trunc(500 / cellRow) + "px";
    cell -= 1;
  }
}

function defaultBlackColor(e) {
  e.target.classList.add("defaultBlackColor");
  e.target.classList.remove("deleteWhiteColor");

}
function deleteWhiteColor(e) {
  e.target.classList.add("deleteWhiteColor");
  e.target.classList.remove("defaultBlackColor");
}
function randomColorChange(e) {
  e.target.style.backgroundColor = randomColor;
  e.target.classList.remove("deleteWhiteColor");
  e.target.classList.remove("defaultBlackColor");
}

function mouseOverGrid() {
  // This is the MouseOver Paint ()
  cellContainer.addEventListener(
    "mouseover",
    function (e) {
      switch (
        cursorColor //CursorColor change from Buttons
      ) {
        case "black":
          defaultBlackColor(e);
          break;
        case "white":
          deleteWhiteColor(e);
          break;
        case "random":
          randomColorChange(e);
          break;
      }
    },
    { capture: false }
  );
  if (cursorColor== "random") //This set next state color on white to delete randomColors
  cursorColor= "white";
}
