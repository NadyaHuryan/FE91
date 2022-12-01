'use strict'

let root = document.getElementById("root")
root.style.cssText = `
    width: 500px;
    border: 2px solid black;
    border-radius: 8px;
    background-color: gainsboro;
    margin: 0 auto;
    padding-bottom: 50px;
`;

//wrapper

let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
wrapper.style.cssText = `
    width: 400px;
    margin: 0 auto;
`;

//header

let header = document.createElement("header");
header.classList.add("header");
header.style.cssText = `
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    padding-top: 30px;
`;

let header__delete = document.createElement("button");
header__delete.classList.add("header__delete");
header__delete.innerHTML = `Delete all`;
header__delete.style.cssText = `
    padding: 10px;
    border: 2px solid black;
    border-radius: 8px;
`;

let header__input = document.createElement("input");
header__input.classList.add("header__input");
header__input.setAttribute("type", "text");
header__input.setAttribute("placeholder", "Enter todo …");
header__input.style.cssText = `
    text-align: center;
    border: 2px solid black;
    border-radius: 8px;
`;

let header__add = document.createElement("button");
header__add.classList.add("header__add");
header__add.innerHTML = `Add`;
header__add.style.cssText = `
    padding: 10px;
    border: 2px solid black;
    border-radius: 8px;
`;

//container

let container = document.createElement("div");
container.classList.add("container");
container.style.cssText = `
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 2px solid black;
    border-radius: 8px;
    margin-bottom: 20px;
`;

// append elements

root.appendChild(wrapper);
wrapper.appendChild(header);
header.append(header__delete, header__input, header__add);

let arr = ["Todo text 1", "Todo text 2", "Todo text 3"];

for (let i = 0; i < arr.length; i++) {

    let container = document.createElement("div");
    container.classList.add("container");
    container.style.cssText = `
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 2px solid black;
        border-radius: 8px;
        margin-bottom: 20px;
`;

    let container__status = document.createElement("input");
    container__status.setAttribute("type", "checkbox");
    container__status.style.cssText = `
        width: 20px;
        height: 20px;
    `;

    let container__text = document.createElement("div");
    container__text.classList.add("container__text");
    container__text.innerHTML = `${arr[i]}`;
    container__text.style.cssText = `
        width: 250px;
        padding: 10px 0;
        background-color: white;
        text-align: center;
        border-radius: 6px;
    `;

    let container__column = document.createElement("div");
    container__column.classList.add("container__column");
    container__column.style.cssText = `
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-end;
    `;

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.style.cssText = `
        width: 20px;
        height: 20px;
    `;

    let container__date = document.createElement("div");
    container__date.classList.add("container__date");
    container__date.innerHTML = `Date`;
    container__date.style.cssText = `
        background-color: white;
        padding: 2px 20px;
        border-radius: 6px;
    `;

    wrapper.appendChild(container);
    container.append(container__status, container__text, container__column);
    container__column.append(deleteButton, container__date);

}