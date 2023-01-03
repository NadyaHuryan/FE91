import {wrapper, 
    action, 
    deleteAll, 
    buttonDeleteAll,
    deleteLast, 
    buttonDeleteLast, 
    addItem, 
    buttonAddItem, 
    actionItem,
    actionItemInput,
    statusDiv,
    statusItemAll,
    statusItemCompleted,
    showAll,
    buttonShowAll,
    showCompleted,
    buttonShowCompleted,
    statusItem,
    statusItemInput,
    task} from "./variables.js";

import {rootStyle,
    buttonStyle,
    taskItemStyle, 
    checkboxStyle, 
    inputStyle, 
    taskTextStyle, 
    taskTextAreaStyle, 
    divCrossDateStyle,
    crossStyle,
    dateStyle} from "./style.js ";

import {updateStorage} from "./local.js";


export let main = function() {

    window.addEventListener("load", () => {

    let root = document.getElementById('root')
    root.style.cssText = rootStyle;

    let toDoes = [],
        checkedToDoes = [];

    let loadPage = function() {
            let localToDoData = localStorage.getItem("toDoes");
            let localCheckedToDoData = localStorage.getItem("checkedToDoes");
            if (localToDoData) {
                return toDoes = JSON.parse(localToDoData);
            }
            if (localCheckedToDoData) {
                return checkedToDoes = JSON.parse(localCheckedToDoData);
            }
    }; 

    loadPage();

    let allStatus = toDoes.length; 
    let allCompleted = checkedToDoes.length;

    let createNewToDo = function({id, statusCheck = false, nameItem, createDate}) {

        let taskItem = document.createElement("div");
            taskItem.classList.add("task__item-item");
            taskItem.style.cssText = taskItemStyle;
            taskItem.setAttribute("data-key", id);

        let taskCheckbox = document.createElement("div");
            taskCheckbox.classList.add("task__item-input");
            taskCheckbox.style.cssText = checkboxStyle;

        let taskCheckboxInput = document.createElement("input");
            taskCheckboxInput.setAttribute("type", "checkbox");
            taskCheckboxInput.style.cssText = inputStyle;      
            taskCheckboxInput.addEventListener("click", checkToDo);

        let taskText = document.createElement("div");
            taskText.classList.add("task__item", "text") ;
            taskText.style.cssText = taskTextStyle;

        let taskTextArea = document.createElement("div");
            taskTextArea.style.cssText = taskTextAreaStyle;
        
        let divCrossDate = document.createElement("div");
            divCrossDate.classList.add("task__item", "crass-date");
            divCrossDate.style.cssText = divCrossDateStyle;

        let cross = document.createElement("button");
            cross.innerHTML = "X";
            cross.classList.add("button-item");
            cross.style.cssText = crossStyle;
            cross.addEventListener("mouseover", () => cross.style.background = '#d417de');
            cross.addEventListener("mouseout", () => cross.style.cssText = crossStyle);

        let date = document.createElement("div");
            date.classList.add("button-item", "date");
            date.style.cssText = dateStyle;

        if (statusCheck) {
            taskItem.style.background = "#3d4042";
            taskItem.classList.toggle("checked");
            taskTextArea.innerHTML = `<p class="todo-name" style="text-decoration: line-through">${nameItem}</p>`;
            taskCheckboxInput.checked = true;
        } else {
            taskTextArea.innerHTML = `<p class="todo-name">${nameItem}</p>`
        };

        cross.addEventListener("click", deleteToDo);
        date.innerHTML = `${createDate}`;

        task.append(taskItem);
        taskItem.append(taskCheckbox, taskText, divCrossDate);
        taskCheckbox.append(taskCheckboxInput);
        taskText.append(taskTextArea);
        divCrossDate.append(cross, date);
    }

    let deleteToDo = function() {
        let parent = this.closest(".task__item-item");
        let todoId = +parent.getAttribute("data-key");
        let todoNameStatus = parent.querySelector(".todo-name").textContent;
        let statusName = toDoes.map(item => item.nameItem);
        let index = statusName.indexOf(todoNameStatus);
        let todoFilter = toDoes.filter( item => item.id !== todoId);

        let todoName = parent.querySelector(".todo-name").textContent;
        if (confirm(`Вы точно хотите удалить продукт ${todoName}`)) {
            parent.remove();
            toDoes = [...todoFilter];
            checkedToDoes.splice(index - 1, 1);
        }
        updateQuantity();
        updateQuantityCheck();
        updateStorage(toDoes, checkedToDoes);
    }

    let checkToDoValue = function(value) {
        if (value === "" || value === " ") {
            return false
        } else {
            return true
        }
    }

    let addNewToDo = function() {

        let dateOfCreation = new Date().getDate(),
            monthOfCreation = new Date().getMonth(),
            yearOfCreation = new Date().getFullYear(),
            dateValue = `${dateOfCreation}.${monthOfCreation}.${yearOfCreation}`;
        let tipValue = actionItemInput.value;

        let allId = toDoes.map((item) => item.id);

        let maxId;
        allId.sort((a,b) => a - b);
        if (allId.length === 0) {
            maxId = 1;
        } else {
            maxId = allId.at(-1) + 1;
        }
        let tip = {
            id: maxId,
            nameItem: tipValue,
            statusCheck: false,
            createDate: dateValue,
        }
        if (checkToDoValue(tipValue)) {
            createNewToDo(tip);
            toDoes.push(tip);
        }

        toDoes.value = "";
        actionItemInput.value = "";
        updateQuantity();
        updateStorage(toDoes, checkedToDoes);
    }

    let checkToDo = function() {
        let parent = this.closest(".task__item-item");    
        let todoNameItem = parent.querySelector(".todo-name");
        let todoIdValue = +parent.getAttribute("data-key");
        let statusName = toDoes.map(item => item.id);
        let index = statusName.indexOf(todoIdValue);
        if (this.checked) {
            todoNameItem.style.textDecoration = "line-through";
            parent.style.background = "#3d4042";
            parent.classList.toggle("checked");
            toDoes[index].statusCheck = true;
            checkedToDoes = toDoes.filter((item) => item.statusCheck == true);
        }  else {
            todoNameItem.style.textDecoration = "none";
            parent.style.background = "#D3D3D3";
            parent.classList.toggle("checked");
            toDoes[index].statusCheck = false;
            if (checkedToDoes.length == 1) {
                checkedToDoes.splice(0, 1);
            } else {
                checkedToDoes.splice(index - 1, 1);
            }
        }
        updateQuantityCheck(); 
        updateStorage(toDoes, checkedToDoes);
    }

    let deleteAllToDo = function() {
        task.innerHTML = "";
        toDoes = [];
        checkedToDoes = []
        updateQuantity();
        updateQuantityCheck();
        updateStorage(toDoes, checkedToDoes);
        localStorage.removeItem("toDoes");
        localStorage.removeItem("checkedToDoes");
    }

    let deleteLastToDo = function() {
        let todoIndex = toDoes.at(-1);
        let todoFilter = toDoes.filter( index => index !== todoIndex);
        let checkLast = task.lastChild.matches(".checked");
        let todoName = task.lastChild.querySelector(".todo-name").textContent;
        let statusName = toDoes.map(item => item.nameItem);
        let index = statusName.indexOf(todoName);

        if (confirm(`Вы точно хотите удалить продукт ${todoName}`)) {
            task.lastChild.remove();
            toDoes = [...todoFilter];
            if (checkedToDoes.length == 1 && checkLast) {
                checkedToDoes.splice(0, 1);
            } else {
                checkedToDoes.splice(index - 1, 1);
            }
        }
        updateQuantity();
        updateQuantityCheck();
        updateStorage(toDoes, checkedToDoes);
    }

    let showChecked = function() {
        let parent = task.querySelectorAll('.task__item-item');
        parent.forEach(function(item) {
            if (item.matches(".checked")) {
                item.style.display = `flex`;
            } else {
                item.style.display = `none`
            }
        })
    }

    let updateQuantityCheck = function() {
        allCompleted = checkedToDoes.length;
        document.querySelector(".completed").innerHTML = `Completed: ${allCompleted}`;
    }

    let updateQuantity = function() {
        allStatus = toDoes.length;
        document.querySelector(".all").innerHTML = `All: ${allStatus}`;
    }

    let showAllItems = function() {
        let parent = task.querySelectorAll('.task__item-item');
        parent.forEach(function(item) { 
                item.style.display = `flex`;
        })
    }

    for (let i = 0; i < toDoes.length; i++) {
        createNewToDo(toDoes[i])
    }

    let searchToDo = function() {
        let inputValue = statusItemInput.value.toLowerCase();
        let parent = task.querySelectorAll(".task__item-item");
        parent.forEach(function(item) { 
            if (item.querySelector(".todo-name").textContent.toLowerCase().includes(inputValue) || inputValue == ""){
                item.style.display = `flex`;
            } else {
                item.style.display = `none`;
            }
        })    
    }

    buttonDeleteAll.addEventListener("click", function() {
        let confirmChoise = confirm("Удалить?");
        if (confirmChoise) {
            deleteAllToDo();
        } else {
            alert("Ничего не удалили");
        }
    });
    buttonDeleteAll.addEventListener("mouseover", () => buttonDeleteAll.style.background = '#d417de');
    buttonDeleteAll.addEventListener("mouseout", () => buttonDeleteAll.style.cssText = buttonStyle);

    buttonDeleteLast.addEventListener("click", deleteLastToDo);
    buttonDeleteLast.addEventListener("mouseover", () => buttonDeleteLast.style.background = '#d417de');
    buttonDeleteLast.addEventListener("mouseout", () => buttonDeleteLast.style.cssText = buttonStyle);

    buttonAddItem.addEventListener("click", addNewToDo);
    buttonAddItem.addEventListener("mouseover", () => buttonAddItem.style.background = '#d417de');
    buttonAddItem.addEventListener("mouseout", () => buttonAddItem.style.cssText = buttonStyle);

    actionItemInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addNewToDo();
        }
    }); 

    statusItemAll.innerHTML = `All: ${allStatus}`;

    statusItemCompleted.innerHTML = `Completed: ${allCompleted}`;

    buttonShowAll.addEventListener("click", showAllItems);
    buttonShowAll.addEventListener("mouseover", () => buttonShowAll.style.background = '#d417de');
    buttonShowAll.addEventListener("mouseout", () => buttonShowAll.style.cssText = buttonStyle);

    buttonShowCompleted.addEventListener("click", showChecked);
    buttonShowCompleted.addEventListener("mouseover", () => buttonShowCompleted.style.background = '#d417de');
    buttonShowCompleted.addEventListener("mouseout", () => buttonShowCompleted .style.cssText = buttonStyle);

    statusItemInput.addEventListener("keyup", searchToDo);

    // append

    root.appendChild(wrapper);
    wrapper.append(action, statusDiv, task);
    action.append(deleteAll, deleteLast, actionItem, addItem);
    deleteAll.appendChild(buttonDeleteAll);
    deleteLast.appendChild(buttonDeleteLast);
    actionItem.appendChild(actionItemInput);
    addItem.appendChild(buttonAddItem);
    statusDiv.append(statusItemAll, statusItemCompleted, showAll, showCompleted, statusItem);
    showAll.appendChild(buttonShowAll);
    showCompleted.append(buttonShowCompleted);
    statusItem.append(statusItemInput);
    });
}