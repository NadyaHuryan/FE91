import { todoWrapper } from "./todo-wrapper.js";

export   const showCompleted = function () {
  const todoItemElement = todoWrapper.querySelectorAll(".todo__item");
  for (let i = 0; i < todoItemElement.length; i++) {
    if (!todoItemElement[i].querySelector(".todo__check").checked) {
      todoItemElement[i].style.display = `none`;
    }
  }
};