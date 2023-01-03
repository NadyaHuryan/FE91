import {wrapperStyle, 
        divButtonAction, 
        divButtonStatus,
        buttonStyle,  
        inputStyle, 
        containerStyle, 
        actionItemStyle, 
        statusItemStyle} from './style.js'

export let wrapper = document.createElement("div");
           wrapper.classList.add("wrapper");
           wrapper.style.cssText = wrapperStyle;

export let action = document.createElement("div");
           action.classList.add("action");
           action.style.cssText = containerStyle;

export let deleteAll = document.createElement("div");
           deleteAll.classList.add("button");
           deleteAll.style.cssText = divButtonAction;

export let buttonDeleteAll = document.createElement("button");
           buttonDeleteAll.classList.add("button-item");
           buttonDeleteAll.innerHTML = "Delete All";
           buttonDeleteAll.style.cssText = buttonStyle;

export let deleteLast = document.createElement("div");
           deleteLast.classList.add("button");
           deleteLast.style.cssText = divButtonAction;
 
export let buttonDeleteLast = document.createElement("button");
           buttonDeleteLast.classList.add("button-item");
           buttonDeleteLast.innerHTML = "Delete Last";
           buttonDeleteLast.style.cssText = buttonStyle;

export let addItem = document.createElement("div");
           addItem.classList.add("button");
           addItem.style.cssText = divButtonAction;

export let buttonAddItem = document.createElement("button");
           buttonAddItem.classList.add("button-item");
           buttonAddItem.innerHTML = "Add";
           buttonAddItem.style.cssText = buttonStyle;

export let actionItem = document.createElement("div");
           actionItem.classList.add("actionItem");
           actionItem.style.cssText = actionItemStyle;

export let actionItemInput = document.createElement("input");
           actionItemInput.setAttribute("type", "text");
           actionItemInput.setAttribute("placeholder", "Enter ToDo...");
           actionItemInput.style.cssText = inputStyle;

export let statusDiv = document.createElement("div");
           statusDiv.classList.add("status");
           statusDiv.style.cssText = containerStyle;

export let statusItemAll = document.createElement("div");
           statusItemAll.classList.add("status__item", "all");

export let statusItemCompleted = document.createElement("div");
           statusItemCompleted.classList.add("status__item", "completed");

export let showAll = document.createElement("div");
           showAll.classList.add("button");
           showAll.style.cssText = divButtonStatus;

export let buttonShowAll = document.createElement("button");
           buttonShowAll.classList.add("button-item");
           buttonShowAll.innerHTML = "Show All";
           buttonShowAll.style.cssText = buttonStyle;    

export let showCompleted = document.createElement("div");
           showCompleted.classList.add("button");
           showCompleted.style.cssText = divButtonStatus;

export let buttonShowCompleted = document.createElement("button");
           buttonShowCompleted.classList.add("button-item");
           buttonShowCompleted.innerHTML = "Show Completed";
           buttonShowCompleted.style.cssText = buttonStyle;

export let statusItem = document.createElement("div");
           statusItem.style.cssText = statusItemStyle;

export let statusItemInput = document.createElement("input");
           statusItemInput.classList.add("status__item");
           statusItemInput.setAttribute("type", "text");
           statusItemInput.setAttribute("placeholder", "Search...");
           statusItemInput.style.cssText = inputStyle;

export let task = document.createElement("div");
           task.classList.add("task");