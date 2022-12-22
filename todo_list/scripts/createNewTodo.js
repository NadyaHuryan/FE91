import {
  styleButton,
  styleButtonHover,
  styleTodoItem,
  styleCheckLabel,
  styleCheck,
  styleContent,
  styleDelete,
  styleData,
  styleCheckUpgraded,
} from "./style.js";

import { todoWrapper } from "./components.js";
import { count, deleteTodo, checkTodoStatus } from "./functional.js";

export const createNewTodo = function (obj) {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo__item");
  todoItem.setAttribute("data-key", obj.id);
  todoItem.style.cssText = `${styleTodoItem}`;

  const todoCheck = document.createElement("input");
  todoCheck.classList.add("todo__check");
  todoCheck.setAttribute("type", "checkbox");
  todoCheck.setAttribute("id", obj.id);
  todoCheck.style.cssText = `${styleCheck}`;
  todoCheck.checked = obj.status;
  todoCheck.addEventListener("change", checkTodoStatus);
  todoCheck.addEventListener("change", count);

  const todoCheckLabel = document.createElement("label");
  todoCheckLabel.classList.add("todo__check-label");
  todoCheckLabel.setAttribute("for", obj.id);
  todoCheckLabel.style.cssText = `${styleCheckLabel}`;

  const todoCheckUpgraded = document.createElement("span");
  todoCheckUpgraded.classList.add("todo__check_upgraded");
  todoCheckUpgraded.setAttribute("for", "todo");

  const todoContent = document.createElement("div");
  todoContent.classList.add("todo__content");
  todoContent.style.cssText = `${styleContent}`;
  if (obj.status) {
    todoContent.innerHTML = `${obj.content}`;
    todoContent.style.textDecoration = `line-through`;
    todoCheckUpgraded.style.cssText = `${styleCheckUpgraded}`;
    todoItem.style.background = `#4D6D9A`;
  } else {
    todoContent.innerHTML = `${obj.content}`;
    todoCheckUpgraded.style.cssText = `display: none;`;
    todoItem.style.background = `none`;
    todoContent.style.textDecoration = `none`;
  }

  const todoDelete = document.createElement("button");
  todoDelete.classList.add("todo__delete");
  todoDelete.innerHTML = `X`;
  todoDelete.style.cssText = `
     ${styleDelete}
     ${styleButton};
    `;
  todoDelete.addEventListener("mouseover", function () {
    this.style.cssText = `
     ${styleDelete}
     ${styleButtonHover}
    `;
  });
  todoDelete.addEventListener("mouseout", function () {
    this.style.cssText = `
     ${styleDelete}
     ${styleButton}
    `;
  });
  todoDelete.addEventListener("click", deleteTodo);
  todoDelete.addEventListener("click", count);

  const todoDate = document.createElement("div");
  todoDate.classList.add("todo__date");
  todoDate.innerHTML = `${obj.data}`;
  todoDate.style.cssText = `${styleData}`;

  todoCheckLabel.append(todoCheck, todoCheckUpgraded);
  todoItem.append(todoCheckLabel, todoContent, todoDelete, todoDate);
  todoWrapper.prepend(todoItem);
};
