'use strict'

let root = document.getElementById("root")
root.style.cssText = `
    width: 500px;
    border: 2px solid black;
    border-radius: 8px;
    background-color: #e6ab07;
    margin: 0 auto;
    margin-top: 50px;
    padding-bottom: 50px;
`;

//wrapper

let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
wrapper.style.cssText = `
    width: 450px;
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
//УДАЛИТЬ ВСЕ
let header__delete = document.createElement("button");
header__delete.classList.add("header__delete");
header__delete.innerHTML = `Удалить всё`;
header__delete.style.cssText = `
    background-color: #cc07e6;
    padding: 10px;
    border: 2px solid black;
    border-radius: 8px;
`;

let header__input = document.createElement("input");
header__input.classList.add("header__input");
header__input.setAttribute("type", "text");
header__input.setAttribute("placeholder", "Добавьте товар...");
header__input.style.cssText = `
    text-align: center;
    border: 2px solid black;
    border-radius: 8px;
`;
//ДОБАВИТЬ
let header__add = document.createElement("button");
header__add.classList.add("header__add");
header__add.innerHTML = `Добавить`;
header__add.style.cssText = `
    background-color: #cc07e6;
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
    
`

// append elements

root.appendChild(wrapper);
wrapper.appendChild(header);
header.append(header__delete, header__input, header__add);

let arr = ["Утюг", "Ноутбук", "Телевизор"];

for (let i = 0; i < arr.length; i++) {

    let container = document.createElement("div");
    container.classList.add("container");
    container.style.cssText = `
        background-color: #3be607;
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 2px solid black;
        border-radius: 8px;
        margin-bottom: 20px;
`;

    //ЧЕК БОКС
    let container__status = document.createElement("input");
    container__status.setAttribute("type", "checkbox");
    container__status.style.cssText = `
    width: 25px;
    height: 25px;
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
        width: 25px;
        height: 25px;
    `;

    //ДАТА 
    let container__date = document.createElement("div");
    container__date.classList.add("container__date");
    container__date.innerHTML = `Дата`;
    container__date.style.cssText = `
        background-color: #d8db18;
        padding: 2px 20px;
        border-radius: 4px;
    `;
    //append
    wrapper.appendChild(container);
    container.append(container__status, container__text, container__column);
    container__column.append(deleteButton, container__date);

}