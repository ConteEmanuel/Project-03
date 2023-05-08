const arrayMenu =["paint","change","more",] // from menuBuilder
const menuContainer = document.createElement('div') // from menuBuilder

////////////////////
function menuBuilder()
{document.body.append(menuContainer) //Menu added
menuContainer.classList.add("menu")
arrayMenu.forEach(element => { //Button added
const button = document.createElement('div')
menuContainer.appendChild(button)
button.textContent=element
if (element == arrayMenu[1]){
    button.classList.add("secondButton");
}
button.setAttribute('id', (element+"Menu"))
button.classList.add("button")
});
}
/////////////////
function rightClickMenu (){
    window.oncontextmenu = (e) => {
        e.preventDefault();
        menuContainer.style.left = e.pageX+"px";
        menuContainer.style.top = e.pageY+"px";
//        menuBuilder();
}
}
menuContainer.style.left="-100px";
menuBuilder();
rightClickMenu();