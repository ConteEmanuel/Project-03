const arrayMenu =["Paint","More","Change"]
const menuContainer = document.createElement('div')
document.body.append(menuContainer)
menuContainer.classList.add("menu")

arrayMenu.forEach(element => {
const button = document.createElement('div')
menuContainer.appendChild(button)
button.textContent=element
button.classList.add("button")
});

