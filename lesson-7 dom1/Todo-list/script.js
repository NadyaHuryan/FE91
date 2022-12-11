"use strict"

let todoList = [
    {
    id: 1,
    name: 'do something',
    status: true,
    date: '06.12.2022'
    },
]

let checkTodoValue = function(value){
    if(value === '' || value === ' '){
        return false
    } else {
        return true
    }
}

let checkTodoStatus = function() {
    let parent = this.closest('.todo__item');
    let todoName = parent.querySelector('.item-name');
    (this.checked) ? todoName.style.textDecoration = "line-through" : todoName.style.textDecoration = "none";
}

let deleteTodo = function() {
    let parent = this.closest('.todo__item');
    let todoId = +parent.getAttribute("data-key");
    let todoFilter = todoList.filter( item => item.id === todoId);

    let todoName  = parent.querySelector('.item-name').textContent;
    if (confirm(`Вы точно хотите удалить позицию ${todoName} ?`)) {
        parent.remove();
        todoList = [...todoFilter];
    }
};

//Добавление заметки

let addNewTodo = function() {
    let todoValue = addInput.value;

    let allId = todoList.map((item) => item.id);
    allId.sort((a,b) => a - b);
    let maxId = allId.at(-1) + 1;

    let todo = {
        id: maxId,
        name: todoValue,
        status: false,
        date: '12.12.1212'
    }

    if (checkTodoValue(todoValue)){
        createNewTodo(todo);
        todoList.push(todo);
    }
    addInput.value = "";
}

// Очистить все элементы

let deleteAllTodo = function(){
    todoPannel.innerHTML = "";
}

let checkTodoAll = function(){
    let item = document.querySelectorAll('.todo__item');
    item.forEach(function(item){
        let todo = item.querySelector('.todoName'),
            status = item.querySelector("input[type='checkbox']");
        todo.style.textDecoration = 'line-through';
        status.checked = true;
    })
}

let createNewTodo = function(obj) {
    let todoItem = document.createElement('div');
    todoItem.classList.add('todo__item');
    todoItem.setAttribute("data-key", obj.id);
    todoItem.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 150px;
        width: 755px;
        margin: 0 auto;
        border: 4px solid black;
        border-radius: 10px;
        margin-bottom: 20px;
    `

let itemInput = document.createElement('div');
itemInput.classList.add('item__input');
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
if (obj.status) {
    itemInput.innerHTML = `<b class="item-name" style="text-decoration: line-through">${obj.name}</b>`;
} else {
    itemInput.innerHTML = `<b class="item-name">${obj.name}</b>`
}

let selectedItem = document.createElement("input");
selectedItem.classList.add("selected__item");
selectedItem.setAttribute("type", "checkbox");
selectedItem.checked = obj.status;
selectedItem.style.cssText = `
    height: 45px;
    width: 65px;
    border: 4px solid black;
    border-radius: 7px;
    background-color: aquamarine;
`;
selectedItem.addEventListener('click', checkTodoStatus);

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
delItemButton.innerHTML = "X";
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
delItemButton.addEventListener('click', deleteTodo);

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
dateInput.innerHTML = obj.date;

let dateInputText = document.createElement("p");
dateInputText.classList.add("date-text");

todoPannel.append(todoItem);
todoItem.append(selectedItem, itemInput, rightPart);
itemInput.append(itemInputText);
rightPart.append(delItemButton, dateInput);
dateInput.append(dateInputText);

};

let root = document.getElementById("root");

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
addInput.setAttribute("name", "item-new");
addInput.setAttribute("id", "item-new");
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
addButton.addEventListener('click', addNewTodo);

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

// append elements

root.append(container);
container.append(buttonPannel, todoPannel);
buttonPannel.append(delButton, addInput, addButton);

