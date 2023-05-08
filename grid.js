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
        divCell.style.width = 220/cellRow + "px";
        divCell.style.height = 220/cellRow + "px";
        cell-=1;
    }
}
gridBuilder()