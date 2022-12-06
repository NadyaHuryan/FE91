'use strict'


let root = document.getElementById("root")
root.style.cssText = `
    width: 600px;
    border: 2px solid black;
    margin: 50px auto;
    font-size: 18px;
    border-radius: 30px;
    background-color: lightgrey;
    padding-bottom: 50px;
`;

// wrapper
let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
wrapper.style.cssText = `
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
justify-content: space-between;
`

// header

let header = document.createElement("div");
header.classList.add("wrapper__header");
header.style.cssText = `
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
padding: 20px;
justify-content: space-between;
`

let deleteAll = document.createElement("button");
deleteAll.classList.add("header__button__deleteAll");
deleteAll.textContent = "Delete All";
deleteAll.style.cssText = `
width: 22%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
border: 2px solid black;
background-color: #39d5cc;
border-radius: 10px;
color: #665f5f;
`;

let addButton = document.createElement("button");
addButton.classList.add("header__button__addButton");
addButton.textContent = "Add";
addButton.style.cssText = `
width: 22%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
border: 2px solid black;
background-color: #39d5cc;
border-radius: 10px;
color: #665f5f;
`;

let enterTodo = document.createElement("input");
enterTodo.classList.add("header__input__enterTodo");
enterTodo.setAttribute("placeholder", "Enter todo ...");
enterTodo.setAttribute("type", "text");
enterTodo.setAttribute("name", "todo");
enterTodo.style.cssText = `
width: 45%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
border: 2px solid black;
background-color: whitesmoke;
border-radius: 10px;
color: #665f5f;
`;



// listTodo

let listTodo = document.createElement("div");
listTodo.classList.add("wrapper__listTodo");
listTodo.style.cssText = `
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
justify-content: space-between;
row-gap: 15px;
`

let itemTodo = document.createElement("div");
itemTodo.classList.add("listTodo__itemTodo");
itemTodo.style.cssText = `
width: 100%;
border: 2px solid black;
border-radius: 20px;
background-color: lightgrey;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
padding: 10px 0px;
`;

let doneItem = document.createElement("checkbox");
doneItem.classList.add("listTodo__itemTodo__doneItem");
doneItem.innerHTML = "✓";
doneItem.style.cssText = `
    height: 33px;
    width: 10%;
    border: 3px solid black;
    border-radius: 5px;
    background-color: #39d5cc;
    display: flex;
    align-items: center;
    justify-content: center;
`;

let inputItem = document.createElement("input");
inputItem.classList.add("listTodo__itemTodo__inputItem");
inputItem.setAttribute("type", "text");
inputItem.setAttribute("placeholder", "Todo text");
inputItem.setAttribute("name", "inputItem__textTodo");
inputItem.style.cssText = `
    height: 50px;
    width: 60%;
    color: gray;
    border: 1px solid #c7c6c6;
    border-radius: 5px;
    text-align: center;
    font-size: 20px;
`;

let addedItem = document.createElement("div");
addedItem.classList.add("listTodo__itemTodo__addedItem");
addedItem.style.cssText = `
    display: flex;
    width: 15%;
    height: 80px;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
`;

let deleteItem = document.createElement("button");
deleteItem.classList.add("listTodo__itemTodo__addedItem__deleteItem");
deleteItem.innerHTML = "x";
deleteItem.style.cssText = `
    height: 33%;
    width: 50%;
    padding: 5px;
    font-size: 20px;
    border: 3px solid black;
    border-radius: 5px;
    background-color: #39d5cc;
    display: flex;
    align-items: center;
    justify-content: center;
`;

let dateItem = document.createElement("input");
dateItem.classList.add("listTodo__itemTodo__addedItem__dateItem");
dateItem.setAttribute("placeholder", "Date");
dateItem.setAttribute("type", "datetime-local");
dateItem.setAttribute("name", "dateItem")
dateItem.style.cssText = `
    height: 38%;
    width: 100%;
    border: 1px solid #c7c6c6;
    border-radius: 5px;
`;


// Repeat

let itemTodo1 = itemTodo.cloneNode(true);
let doneItem1 = doneItem.cloneNode(true);
let inputItem1 = inputItem.cloneNode(true);
let addedItem1 = addedItem.cloneNode(true);
let deleteItem1 = deleteItem.cloneNode(true);
let dateItem1 = dateItem.cloneNode(true);

root.append(wrapper);
wrapper.append(header, listTodo);
header.append(deleteAll, enterTodo, addButton);
listTodo.append(itemTodo, itemTodo1);
itemTodo.append(doneItem, inputItem, addedItem);
addedItem.append(deleteItem, dateItem);
itemTodo1.append(doneItem1, inputItem1, addedItem1);
addedItem1.append(deleteItem1, dateItem1);