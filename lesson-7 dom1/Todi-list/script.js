"use strict"

let root = document.getElementById("root")

// .container

let container = document.createElement("div");
container.classList.add("container");
container.style.cssText = `
    height: 600px;
    width: 800px;
    padding-top: 20px;
    margin: 100px auto;
    border: 4px solid black;
    border-radius: 30px;
    background-color: #c7c6c6;
`;

//button pannel

let buttonPannel = document.createElement("div");
buttonPannel.classList.add("button__pannel");
buttonPannel.style.cssText = `
    display: flex;
    justify-content: space-around;
    padding-bottom: 40px;
`;

let delButton = document.createElement("button");
delButton.classList.add("del-all__button");
delButton.textContent = "Delete All";
delButton.style.cssText = `
    width: 150px;
    height: 70px;
    font-size: 23px;
    font-weight: bolder;
    color: blueviolet;
    border: 4px solid black;
    border-radius: 10px;
    background-color: aquamarine;
`;

let addInput = document.createElement("input");
addInput.classList.add("entering__todo");
addInput.setAttribute("type", "text");
addInput.setAttribute("placeholder", "Enter todo ...");
addInput.setAttribute("name", "todo_text");
addInput.style.cssText = `
    height: 70px;
    width: 400px;
    padding-left: 50px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 23px;
    font-weight: bolder;
    color: #c8c8ca;
    border: 4px solid black;
    border-radius: 10px;
`;

let addButton = document.createElement("button");
addButton.classList.add("add__button");
addButton.textContent = "Add";
addButton.style.cssText = `
    width: 140px;
    height: 70px;
    font-size: 23px;
    font-weight: bolder;
    color: blueviolet;
    border: 4px solid black;
    border-radius: 10px;
    background-color: aquamarine;
`;

//to do pannel

let todoPannel = document.createElement("div");
todoPannel.classList.add("todo__pannel");
todoPannel.style.cssText = `
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: space-around;
    height: 400px;
    width: 760px;
`;

let todoItem = document.createElement("div");
todoItem.classList.add("todo__item");
todoItem.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 150px;
    width: 755px;
    margin: 0 auto;
    border: 4px solid black;
    border-radius: 10px;
`;

let selectedItem = document.createElement("input");
selectedItem.classList.add("selected__item");
selectedItem.setAttribute("type", "checkbox");
selectedItem.style.cssText = `
    height: 45px;
    width: 65px;
    border: 4px solid black;
    border-radius: 7px;
    background-color: aquamarine;
`;

let itemInput = document.createElement("div");
itemInput.classList.add("item__input");
itemInput.style.cssText = `
    height: 70px;
    width: 450px;
    padding-left: 50px;
    background-color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 23px;
    line-height: 70px;
    font-weight: bolder;
    color: gray;
    border: 1px solid #c7c6c6;
    border-radius: 10px;
`;

let itemInputText = document.createElement("p");
itemInput.classList.add("item__input-text");

let rightPart = document.createElement("div");
rightPart.classList.add("right__part");
rightPart.style.cssText = `
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
`;

let delItemButton = document.createElement("button");
delItemButton.classList.add("del-item__button");
delItemButton.textContent = "X";
delItemButton.style.cssText = `
    height: 45px;
    width: 65px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 23px;
    line-height: 40px;
    font-weight: bolder;
    padding-bottom: 10px;
    border: 4px solid black;
    border-radius: 7px;
    background-color: aquamarine;
`;

let dateInput = document.createElement("div");
dateInput.classList.add("date");
dateInput.style.cssText = `
    height: 45px;
    width: 110px;
    padding-left: 15px;
    line-height: 40px;
    background-color: white;
    border: 1px solid #c7c6c6;
    border-radius: 10px;
`;

let dateInputText = document.createElement("p");
itemInput.classList.add("date-text");

// append elements

root.append(container);
container.append(buttonPannel, todoPannel);
buttonPannel.append(delButton, addInput, addButton);
todoPannel.append(todoItem);
todoItem.append(selectedItem, itemInput, rightPart);
itemInput.append(itemInputText);
rightPart.append(delItemButton, dateInput);
dateInput.append(dateInputText);