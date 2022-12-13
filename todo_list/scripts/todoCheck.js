import { styleTodoItem, styleCheckLabel, styleCheck } from "./style.js";
import { checkTodoStatus } from "./func-checkTodoStatus.js";


 const obj = {};

export const todoCheckLabel = document.createElement("label");
todoCheckLabel.classList.add("todo__check-label");
todoCheckLabel.setAttribute("for", obj.id);
todoCheckLabel.style.cssText = `${styleCheckLabel}`;

export const todoCheck = document.createElement("input");
todoCheck.classList.add("todo__check");
todoCheck.setAttribute("type", "checkbox");
todoCheck.setAttribute("id", obj.id);
todoCheck.style.cssText = `${styleCheck}`;
todoCheck.checked = obj.status;
  todoCheck.addEventListener("change", checkTodoStatus); //! вызов функции изменения статуса
//   todoCheck.addEventListener("change", count); //! вызов функции счетчика

export const todoCheckUpgraded = document.createElement("span");
todoCheckUpgraded.classList.add("todo__check_upgraded");
todoCheckUpgraded.setAttribute("for", "todo");
