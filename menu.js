const arrayMenu =["paint","change","more",]
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
button.setAttribute('id', (element+"Menu"))
button.classList.add("button")
});