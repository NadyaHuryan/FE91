import {cssHeader, cssHeaderDelete, cssAddHeaderInput, cssAddHeaderButton, cssWrapper, cssRoot, cssContainerItemGray,
    cssContainerItemGainsboro, cssContainerStatus, cssContainerTextCrossed, cssContainerText, cssContainerColumn, 
    cssDeleteButton, cssContainerDate} from "./modules/style.js"

window.addEventListener("load", () => {

    let todos = [];

    let loadPage = function() {
            let localTabData = localStorage.getItem("todos");
            if (localTabData) {
                todos = JSON.parse(localTabData);
            } 
        }

        loadPage();

        let updateStorage = function() {
            localStorage.setItem("todos",JSON.stringify(todos));
        }

    let checkTabValue = function(value) {
        if (value === "" || value === " ") {
            return false
        } else {
            return true
        }
    }

    let checkTabStatus = function() {
        let parent = this.closest(".container__item"); 
        let tabText = parent.querySelector(".container__text");
        let tabId = +parent.getAttribute("data-key");
        let tabIndex = todos.findIndex( item => item.id == tabId); 
        if (this.checked) {
            tabText.style.textDecoration = "line-through";
            parent.style.background = "gray";
            todos[tabIndex]["status"] = true;

        } else {
            tabText.style.textDecoration = "none";
            parent.style.background = "gainsboro";
            todos[tabIndex]["status"] = false;
        }
        updateStorage();
    }

    let deleteAllTabs = function () {
        container.innerHTML = "";
        todos = [];
        localStorage.removeItem("todos");
    }

    let deleteTab = function () {
        let parent = this.closest(".container__item"); 
        let tabId = +parent.getAttribute("data-key");
        let tabFilter = todos.filter( item => item.id!==tabId);

        let tabText = parent.querySelector(".container__text").textContent;
        if (confirm(`Вы точно хотите удалить заметку ${tabText}`)) {
            parent.remove();
            todos = [...tabFilter];
            updateStorage();
        }
    }

    let createNewTab = function({id, status, name, date}) {
        let container__item = document.createElement("div");
        container__item.classList.add("container__item");
        container__item.setAttribute("data-key", id);
    if (status) {
        container__item.style.cssText = cssContainerItemGray;
    } else {
        container__item.style.cssText = cssContainerItemGainsboro;
    }

        let container__status = document.createElement("input");
        container__status.setAttribute("type", "checkbox");
        container__status.checked = status;
        container__status.style.cssText = cssContainerStatus;
        container__status.addEventListener("click", checkTabStatus);

        let container__text = document.createElement("div");
        container__text.classList.add("container__text");
        container__text.innerHTML = `${name}`;
        if (status) {
            container__text.innerHTML = `${name}`;
            container__text.style.cssText = cssContainerTextCrossed;
        } else {
            container__text.innerHTML = `${name}`;
            container__text.style.cssText = cssContainerText;
        }

        let container__column = document.createElement("div");
        container__column.classList.add("container__column");
        container__column.style.cssText = cssContainerColumn;

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "X";
        deleteButton.style.cssText = cssDeleteButton;
        deleteButton.addEventListener("click", deleteTab);

        let container__date = document.createElement("div");
        container__date.classList.add("container__date");
        container__date.innerHTML = `${date}`;
        container__date.style.cssText = cssContainerDate;

        container.appendChild(container__item);
        container__item.append(container__status, container__text, container__column);
        container__column.append(deleteButton, container__date);

    }

    // добавление заметки
    let addNewTab = function() {
        let tabValue = addHeaderInput.value;

        
        let allId = todos.map((item) => item.id);
        allId.sort((a,b) => a - b);
        let maxId;
        (todos.length === 0) ? maxId = 1 : maxId = allId.at(-1) + 1;

        let todo = {
            id: maxId,
            name: tabValue,
            status: false,
            date: new Date().toDateString(),
        }
        if (checkTabValue(tabValue)) {
            createNewTab(todo);
            todos.push(todo);
            updateStorage();
        }
        addHeaderInput.value = "";
    }

    let root = document.getElementById("root")
    root.style.cssText = cssRoot;

    //wrapper

    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.style.cssText = cssWrapper;

    //header

    let header = document.createElement("header");
    header.classList.add("header");
    header.style.cssText = cssHeader;

    let headerDelete = document.createElement("button");
    headerDelete.classList.add("header__delete");
    headerDelete.innerHTML = `Delete all`;
    headerDelete.style.cssText = cssHeaderDelete;
    headerDelete.addEventListener("click", function() {
        if (confirm("Вы точно хотите удалить все заметки?")) {
            deleteAllTabs();
        } else {
            alert("Ничего удалено");
        }
    })

    let addHeaderInput = document.createElement("input");
    addHeaderInput.classList.add("header__input");
    addHeaderInput.setAttribute("type", "text");
    addHeaderInput.setAttribute("placeholder", "Enter todo …");
    addHeaderInput.style.cssText = cssAddHeaderInput;
    addHeaderInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addNewTab();
        }
    })

    let addHeaderButton = document.createElement("button");
    addHeaderButton.classList.add("header__add");
    addHeaderButton.innerHTML = `Add`;
    addHeaderButton.style.cssText = cssAddHeaderButton;
    addHeaderButton.addEventListener("click", addNewTab);

    //container

    let container = document.createElement("div");
    container.classList.add("container");

    for (let i = 0; i < todos.length; i++) {
        createNewTab(todos[i]);
    }

    // append elements

    root.appendChild(wrapper);
    wrapper.append(header, container);
    header.append(headerDelete, addHeaderInput, addHeaderButton);

});