const backgroundGrid = document.createElement('div');
document.body.append(backgroundGrid);
backgroundGrid.classList.add('defaultBlackColor') // this helps to fix grid overflow effect
backgroundGrid.style.zIndex = "3"
const cellContainer = document.createElement('div');
backgroundGrid.append(cellContainer);
cellContainer.classList.add('cellContainer');
let cellRow = 16,
  cell = "",
  cursorColor = "black";

function gridBuilder() {
  cell = cellRow * cellRow;
  while (cell > 0) {
    let divCell = document.createElement('div');
    cellContainer.append(divCell);
    divCell.classList.add('cell');
    divCell.style.width = Math.trunc(760 / cellRow) + "px"; // trunc fixes grid Differences
    divCell.style.height = Math.trunc(760 / cellRow) + "px";
    cell -= 1;
  }
}
//gridBuilder()
function defaultBlackColor(e) {
  e.target.classList.add('defaultBlackColor');
  e.target.classList.remove('deleteWhiteColor');
  backgroundGrid.classList.add('defaultBlackColor');
  backgroundGrid.classList.remove('deleteWhiteColor');
}
function deleteWhiteColor(e) {
  e.target.classList.add('deleteWhiteColor');
  e.target.classList.remove('defaultBlackColor');
  backgroundGrid.classList.add('deleteWhiteColor');
  backgroundGrid.classList.remove('defaultBlackColor');
}
function randomColorChange(e)  {
  e.target.style.backgroundColor = randomColor;
  e.target.classList.remove('deleteWhiteColor');
  e.target.classList.remove('defaultBlackColor');
  backgroundGrid.style.backgroundColor = randomColor;
  backgroundGrid.classList.remove('deleteWhiteColor');
  backgroundGrid.classList.remove('defaultBlackColor');

}

function mouseOverGrid() {
  cellContainer.addEventListener(
    "mouseover",
    function (e) {
      switch (cursorColor) {
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
}
//mouseOverGrid();
