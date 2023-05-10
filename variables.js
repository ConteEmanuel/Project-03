// from menu.js
const menuButtons = ["white", "change", "grid"];
const menuContainer = document.createElement("div");
//from grid.js

const backgroundGrid = document.createElement("div");
const cellContainer = document.createElement("div");
let cellRow = 16,
  cell = "",
  cursorColor = "black";

//from buttons.js
let randomColor;
