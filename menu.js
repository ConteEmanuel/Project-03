const arrayMenu =["Paint","Change","More",]
const menuContainer = document.createElement('div')
document.body.append(menuContainer)
menuContainer.classList.add("menu")

arrayMenu.forEach(element => {
const button = document.createElement('div')
menuContainer.appendChild(button)
button.textContent=element
if (element == arrayMenu[1]){
    button.classList.add("secondButton");
}
button.classList.add("button")
});