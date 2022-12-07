'use strict'

window.addEventListener("load", () => {

    let tabData = [];

    let loadPage = function() {
            let localTabData = localStorage.getItem("tabData");
            if (localTabData) {
                tabData = JSON.parse(localTabData);
            } 
            console.log(tabData);
        }

        loadPage();

        let updateStorage = function() {
            localStorage.setItem("tabData",JSON.stringify(tabData));
        }

    let checkTabValue = function(value) {
        if (value === "" || value === " ") {
            return false
        } else {
            return true
        }
    }

    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    let checkTabStatus = function() {
        let parent = this.closest(".container__item"); 
        let tabText = parent.querySelector(".container__text");
        if (this.checked) {
            tabText.style.textDecoration = "line-through";
            parent.style.background = "gray";

        } else {
            tabText.style.textDecoration = "none";
            parent.style.background = "gainsboro";
        }
    }

    let deleteAllTabs = function () {
        container.innerHTML = "";
        tabData = [];
        localStorage.removeItem("tabData");
    }

    let deleteTab = function () {
        let parent = this.closest(".container__item"); 
        let tabId = +parent.querySelector(".data-key");
        let tabFilter = tabData.filter( item => item.id!==tabId);

        let tabText = parent.querySelector(".container__text").textContent;
        if (confirm(`Вы точно хотите удалить заметку ${tabText}`)) {
            parent.remove();
            tabData = [...tabFilter];
            updateStorage();
        }
    }

    let createNewTab = function(obj) {
        let container__item = document.createElement("div");
        container__item.classList.add("container__item");
        container__item.setAttribute("data-key", obj.id);
        container__item.style.cssText = `
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
        container__status.addEventListener("click", checkTabStatus);

        let container__text = document.createElement("div");
        container__text.classList.add("container__text");
        container__text.innerHTML = `${obj.name}`;
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
        deleteButton.addEventListener("click", deleteTab);

        let container__date = document.createElement("div");
        container__date.classList.add("container__date");
        container__date.innerHTML = `${obj.date}`;
        container__date.style.cssText = `
            background-color: white;
            padding: 2px 20px;
            border-radius: 6px;
            font-size: 10px;
        `;

        container.appendChild(container__item);
        container__item.append(container__status, container__text, container__column);
        container__column.append(deleteButton, container__date);

    }

    // добавление заметки
    let addNewTab = function() {
        let tabValue = addHeaderInput.value;

        
        let allId = tabData.map((item) => item.id);
        allId.sort((a,b) => a - b);
        let maxId = allId.at(-1) + 1;

        let product = {
            id: maxId,
            name: tabValue,
            status: false,
            date: new Date().toDateString(),
        }
        if (checkTabValue(tabValue)) {
            createNewTab(product);
            tabData.push(product);
            updateStorage();
        }
        addHeaderInput.value = "";
    }

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

    let headerDelete = document.createElement("button");
    headerDelete.classList.add("header__delete");
    headerDelete.innerHTML = `Delete all`;
    headerDelete.style.cssText = `
        padding: 10px;
        border: 2px solid black;
        border-radius: 8px;
    `;
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
    addHeaderInput.style.cssText = `
        text-align: center;
        border: 2px solid black;
        border-radius: 8px;
    `;
    addHeaderInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addNewTab();
        }
    })

    let addHeaderButton = document.createElement("button");
    addHeaderButton.classList.add("header__add");
    addHeaderButton.innerHTML = `Add`;
    addHeaderButton.style.cssText = `
        padding: 10px;
        border: 2px solid black;
        border-radius: 8px;
    `;
    addHeaderButton.addEventListener("click", addNewTab);

    //container

    let container = document.createElement("div");
    container.classList.add("container");

    let arr = ["Todo text 1", "Todo text 2", "Todo text 3"];

    for (let i = 0; i < tabData.length; i++) {
        createNewTab(tabData[i]);
    }

    // append elements

    root.appendChild(wrapper);
    wrapper.append(header, container);
    header.append(headerDelete, addHeaderInput, addHeaderButton);

});