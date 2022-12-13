import { styleTodoItem } from "./style.js";
 
const obj = {};

export const todoItem = document.createElement("div");
todoItem.classList.add("todo__item");
todoItem.setAttribute("data-key", obj.id);
todoItem.style.cssText = `${styleTodoItem}`;
