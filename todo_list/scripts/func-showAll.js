import { todoWrapper } from "./todo-wrapper.js";

export const showAll = function () {
  const todoItemElement = todoWrapper.querySelectorAll(".todo__item");
  for (let i = 0; i < todoItemElement.length; i++) {
    todoItemElement[i].style.display = `grid`;
  }
};
