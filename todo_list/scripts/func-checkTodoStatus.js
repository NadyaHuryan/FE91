import { todoAll } from "./todoAll.js";
import { styleCheckUpgraded } from "./style.js";


export const checkTodoStatus = function (event) {
  const parent = event.target.closest(".todo__check-label");
  const todoCheckUpgraded = parent.querySelector(".todo__check_upgraded");
  const todoItemElement = parent.closest(".todo__item");
  const todoContentElement = todoItemElement.querySelector(".todo__content");
  const todoId = todoItemElement.getAttribute("data-key");
  const todoItemIndex = todoAll.findIndex((item) => item.id === todoId);
  if (event.target.checked) {
    todoCheckUpgraded.style.cssText = `${styleCheckUpgraded}`;
    todoItemElement.style.background = `#4D6D9A`;
    todoContentElement.style.textDecoration = `line-through`;
    todoAll[todoItemIndex]["status"] = true;
  } else {
    todoCheckUpgraded.style.cssText = `display: none;`;
    todoItemElement.style.background = `none`;
    todoContentElement.style.textDecoration = `none`;
    todoAll[todoItemIndex]["status"] = false;
  }
//   updateStorage();
};
