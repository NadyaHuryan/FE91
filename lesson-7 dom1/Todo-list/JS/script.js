
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
}

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
    let parsedTodos = JSON.parse(localStorage.getItem('todos'));
    let count = 0;
    for (let i = 0; parent.previousElementSibling !== null; i++, parent = parent.previousElementSibling){
        count ++
    }
    
    if (this.checked) {
        todoName.style.textDecoration = "line-through";
        
        parsedTodos[count].isChecked = true;
        localStorage.setItem('todos', JSON.stringify(parsedTodos));
    }   else { 
        todoName.style.textDecoration = "none";

        parsedTodos[count].isChecked = false;
        localStorage.setItem('todos', JSON.stringify(parsedTodos));
    }
}

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
        date: `${now.getHours()}:${now.getMinutes()} ${now.getDate()} ${month}`,
    }

    if (checkTodoValue(todoValue)){
        createNewTodo(todo);
        todos.push(todo);
        setName();
    }

    addInput.value = "";
}

let deleteAllTodo = function(){
    todoPannel.innerHTML = "";
    todos = [];
    localStorage.removeItem('todos');
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
        width: 730px;
        margin: 0 auto;
        border: 4px solid black;
        border-radius: 10px;
        margin-bottom: 20px;
    `;

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

if (obj.isChecked) {
    itemInput.innerHTML = `<b class="item-name" style="text-decoration: line-through">${obj.text}</b>`;
} else {
    itemInput.innerHTML = `<b class="item-name">${obj.text}</b>`
}

let selectedItem = document.createElement("input");
selectedItem.classList.add("selected__item");
selectedItem.setAttribute("type", "checkbox");
selectedItem.checked = obj.isChecked;
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

let container = document.createElement("div");
container.classList.add("container");
container.style.cssText = `
    min-height: 600px;
    max-height: max-content;
    width: 800px;
    padding-top: 20px;
    margin: 100px auto;
    border: 4px solid black;
    border-radius: 30px;
    background-color: #c7c6c6;
`;

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
delButton.addEventListener('click', function(){
    if(confirm('Выточно хотите удалить все заметки?')){
        deleteAllTodo()
    } else {
        alert('Ничего не удалено!')
    }
});

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
addInput.addEventListener('keyup', function(event){
    if (event.key === "Enter"){
        addNewTodo();
    }
});

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

let todoPannel = document.createElement("div");
todoPannel.classList.add("todo__pannel");
todoPannel.style.cssText = `
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: space-around;
    width: 760px;
`;

for (let i = 0; i < todos.length; i++) {
    createNewTodo(todos[i])
};

root.append(container);
container.append(buttonPannel, todoPannel);
buttonPannel.append(delButton, addInput, addButton);
});
