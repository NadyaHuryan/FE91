import { todoAll } from "./todoAll.js";

export const search = function (event) {
  const searchValue = event.target.value.trim();
  for (let index = 0; index < todoAll.length; index++) {
    const todoItem = todoAll[index];
    const dataKey = todoItem.id;
    const selector = `[data-key="${dataKey}"]`;
    const todoItemElement = document.querySelector(selector);
    todoItemElement.style.display = "grid";
    if (!todoItem.content.includes(searchValue)) {
      todoItemElement.style.display = `none`;
    }
  }
};