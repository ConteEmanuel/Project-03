const cellContainer = document.createElement('div');
document.body.append(cellContainer);
cellContainer.classList.add('cellContainer');
let cellRow=16
,   cell="";

function gridBuilder(){
    cell = cellRow * cellRow;
    while(cell > 0){
        let divCell = document.createElement('div');
        cellContainer.append(divCell);
        divCell.classList.add('cell');
        divCell.style.width = 760/cellRow + "px";
        divCell.style.height = 760/cellRow + "px";
        cell-=1;
    }
}
//gridBuilder()
function defaultBlackColor(e){
    e.target.classList.add('defaultBlackColor')
}

function mouseOverGrid(){
    cellContainer.addEventListener('mouseover', 
    function (e) {
      defaultBlackColor(e);
    },
    { capture: false }
  );
}
//mouseOverGrid();
