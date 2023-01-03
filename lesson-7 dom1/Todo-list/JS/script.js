import { createNewTodoStyle } from "./modules/styles.js";
import { buttonPannelStyle } from "./modules/styles.js";
import { containerStyle, } from "./modules/styles.js";
import { itemInputStyle } from "./modules/styles.js";
import { selectedItemStyle } from "./modules/styles.js";
import { rightPartStyle } from "./modules/styles.js";
import { delItemButtonStyle } from "./modules/styles.js";
import { dateInputStyle } from "./modules/styles.js";
import { delButtonStyle } from "./modules/styles.js";
import { addInputStyle } from "./modules/styles.js";
import { addButtonStyle } from "./modules/styles.js";
import { todoPannelStyle } from "./modules/styles.js";


window.addEventListener("load", () => {

let todos = [];

let getName = function() {
    let localTodos = localStorage.getItem('todos');
    if (localTodos) {
        todos = JSON.parse(localTodos);
    }
};

getName();

let setName = function() {
    localStorage.setItem('todos', JSON.stringify(todos));
};

let checkTodoValue = function(value) {
    if(value === '' || value === ' ') {
        return false
    } else {
        return true
    }
};

let checkTodoStatus = function() {
    let parent = this.closest('.todo__item');
    let todoName = parent.querySelector('.item-name');
    let todoId = +parent.getAttribute("data-key");
    let parsedTodos = JSON.parse(localStorage.getItem('todos'));
    let status = parsedTodos.find(item => item.id == todoId);
    
    if (this.checked) {
        todoName.style.textDecoration = "line-through"; 
        status.isChecked = true;
        localStorage.setItem('todos', JSON.stringify(parsedTodos));
    }   else { 
        todoName.style.textDecoration = "none";
        status.isChecked = false;
        localStorage.setItem('todos', JSON.stringify(parsedTodos));
    }
};

let deleteTodo = function() {
    let parent = this.closest('.todo__item');
    let todoId = +parent.getAttribute("data-key");
    let todoFilter = todos.filter( item => item.id !== todoId);

    let todoName  = parent.querySelector('.item-name').textContent;
    if (confirm(`Вы точно хотите удалить позицию ${todoName} ?`)) {
        parent.remove();
        todos = [...todoFilter];
        setName();
    }
};


let addNewTodo = function() {
    let todoValue = addInput.value;
    const now = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let month = now.getMonth();
    month = months[month]; 

    let allId = todos.map((item) => item.id);
    allId.sort((a,b) => a - b);
    let maxId;
    (todos.length === 0) ? maxId = 1 : maxId = allId.at(-1) + 1;

    let todo = {
        id: maxId,
        text: todoValue,
        isChecked: false,
        date: `${now.getHours()}:${now.getMinutes()}  ${now.getDate()} ${month}`,
    }

    if (checkTodoValue(todoValue)) {
        createNewTodo(todo);
        todos.push(todo);
        setName();
    }

    addInput.value = "";
};

let deleteAllTodo = function() {
    todoPannel.innerHTML = "";
    todos = [];
    localStorage.removeItem('todos');
};

let addHover = function () {
    this.style.backgroundColor = '#a0c1b6';
};

let removeHover = function () {
    this.style.backgroundColor = '#7fffd4';
};

let createNewTodo = function(obj) {
    let todoItem = document.createElement('div');
    todoItem.classList.add('todo__item');
    todoItem.setAttribute("data-key", obj.id);
    todoItem.style.cssText = createNewTodoStyle;

let itemInput = document.createElement('div');
    itemInput.classList.add('item__input');
    itemInput.style.cssText = itemInputStyle;

if (obj.isChecked) {
    itemInput.innerHTML = `<b class="item-name" style="text-decoration: line-through">${obj.text}</b>`;
} else {
    itemInput.innerHTML = `<b class="item-name">${obj.text}</b>`;
}

let selectedItem = document.createElement("input");
    selectedItem.classList.add("selected__item");
    selectedItem.setAttribute("type", "checkbox");
    selectedItem.checked = obj.isChecked;
    selectedItem.style.cssText = selectedItemStyle;
    selectedItem.addEventListener('click', checkTodoStatus);

let itemInputText = document.createElement("p");
    itemInput.classList.add("item__input-text");

let rightPart = document.createElement("div");
    rightPart.classList.add("right__part");
    rightPart.style.cssText = rightPartStyle;

let delItemButton = document.createElement("button");
    delItemButton.classList.add("del-item__button");
    delItemButton.innerHTML = "X";
    delItemButton.style.cssText = delItemButtonStyle;
    delItemButton.addEventListener('click', deleteTodo);
    delItemButton.addEventListener('mouseenter', addHover);
    delItemButton.addEventListener('mouseleave', removeHover);

let dateInput = document.createElement("div");
    dateInput.classList.add("date");
    dateInput.style.cssText = dateInputStyle;
    dateInput.innerHTML = obj.date;

let dateInputText = document.createElement("p");
    dateInputText.classList.add("date-text");

todoPannel.prepend(todoItem);
todoItem.append(selectedItem, itemInput, rightPart);
itemInput.append(itemInputText);
rightPart.append(delItemButton, dateInput);
dateInput.append(dateInputText);
};

let root = document.getElementById("root");

let container = document.createElement("div");
    container.classList.add("container");
    container.style.cssText = containerStyle;

let buttonPannel = document.createElement("div");
    buttonPannel.classList.add("button__pannel");
    buttonPannel.style.cssText = buttonPannelStyle;

let delButton = document.createElement("button");
    delButton.classList.add("del-all__button");
    delButton.textContent = "Delete All";
    delButton.style.cssText = delButtonStyle;
    delButton.addEventListener('click', function(){
        if(confirm('Выточно хотите удалить все заметки?')){
            deleteAllTodo()
        } else {
            alert('Ничего не удалено!')
        }
    });
    delButton.addEventListener('mouseenter', addHover);
    delButton.addEventListener('mouseleave', removeHover);


let addInput = document.createElement("input");
    addInput.classList.add("entering__todo");
    addInput.setAttribute("type", "text");
    addInput.setAttribute("placeholder", "Enter todo ...");
    addInput.setAttribute("name", "item-new");
    addInput.setAttribute("id", "item-new");
    addInput.style.cssText = addInputStyle;
    addInput.addEventListener('keyup', function(event){
        if (event.key === "Enter"){
            addNewTodo();
        }
    });


let addButton = document.createElement("button");
    addButton.classList.add("add__button");
    addButton.textContent = "Add";
    addButton.style.cssText = addButtonStyle;
    addButton.addEventListener('click', addNewTodo);
    addButton.addEventListener('mouseenter', addHover);
    addButton.addEventListener('mouseleave', removeHover);

let todoPannel = document.createElement("div");
    todoPannel.classList.add("todo__pannel");
    todoPannel.style.cssText = todoPannelStyle;

for (let i = 0; i < todos.length; i++) {
    createNewTodo(todos[i])
};

root.append(container);
container.append(buttonPannel, todoPannel);
buttonPannel.append(delButton, addInput, addButton);
});
