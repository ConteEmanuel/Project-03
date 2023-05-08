const arrayMenu =["Paint","More","Change"];
const menuContainer = document.createElement('div');
document.body.append(menuContainer);

arrayMenu.forEach(element => {
const div = document.createElement('div')
menuContainer.append(div)
});

