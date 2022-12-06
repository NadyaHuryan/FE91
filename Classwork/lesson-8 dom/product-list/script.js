'use strict'

let root = document.getElementById("root")
root.style.cssText = `
    width: 800px;
    border: 1px solid black;
    margin: 50px auto;
    font-size: 18px;

`;

/*
//header
let header = document.createElement("header");
header.classList.add("header");
header.innerHTML = "Приложение по добавлению товара";
header.style.cssText = `
    background-color: grey;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: white;
    margin-bottom: 20px;
`;

// .container
let container = document.createElement("div");
container.classList.add("container");

// .infoPanel
let infoPanel = document.createElement("div");
infoPanel.classList.add("info-panel");
infoPanel.style.cssText = `
    display: flex;
    margin-bottom: 20px;
    column-gap: 20px;
`

let infoPanelCount = document.createElement("div");
infoPanelCount.classList.add("info-panel__count");
infoPanelCount.innerHTML = `Количество: <span>3</span>`;

let infoPanelBought= document.createElement("div");
infoPanelBought.classList.add("info-panel__bought");
infoPanelBought.innerHTML = `Куплено: <span>3</span>`;

// .addPanel
let addPanel = document.createElement("div");
addPanel.classList.add("add-panel");
addPanel.style.cssText = `
    margin-bottom: 20px;
`

let addPanelInput = document.createElement("input");
addPanelInput.classList.add("add-panel__textfield");
addPanelInput.setAttribute("type", "text");
addPanelInput.setAttribute("placeholder", "Добавить новый продукт");
addPanelInput.setAttribute("name", "product-new");
addPanelInput.style.cssText = `
    width: 80%;
`;
let addPanelButton = document.createElement("button");
addPanelButton.classList.add("add-panel__button");
addPanelButton.textContent = "+"

let listPanel = document.createElement("div");
listPanel.classList.add("list-panel");

// элементы корзины
let arr = ["Йогурт", "Кровать", "Шторы"];

for (let i = 0; i < arr.length; i++) {
    let listPanelItem = document.createElement("div");
    listPanelItem.classList.add("list-panel__item");
    listPanelItem.style.cssText = `
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    `

    let listPanelProduct = document.createElement("div");
    listPanelProduct.classList.add("list-panel__product");
    listPanelProduct.style.cssText = ``;
    listPanelProduct.innerHTML = `<b>${arr[i]}</b>`

    let listPanelStatus = document.createElement("input");
    listPanelStatus.setAttribute("type", "checkbox");

    let listPanelDelete = document.createElement("button");
    listPanelDelete.innerHTML = "X";

    listPanel.appendChild(listPanelItem)
    listPanelItem.append(listPanelProduct, listPanelStatus, listPanelDelete);
}

let deletePanel = document.createElement("div");
deletePanel.classList.add("delete-panel");
deletePanel.style.cssText = `
    display: flex;
    justify-content: space-between;
`;

let deletePanelSelect = document.createElement("button");
deletePanelSelect.innerHTML = "Отметить все";
let deletePanelDelete = document.createElement("button");
deletePanelDelete.innerHTML = "Удалить все";


// append elements

root.append(header, container);
container.append(infoPanel, addPanel, listPanel, deletePanel);
infoPanel.append(infoPanelCount, infoPanelBought)
addPanel.append(addPanelInput, addPanelButton)
deletePanel.append(deletePanelSelect, deletePanelDelete)
*/