import { todoAll } from "./todoAll.js";
import { todoWrapper } from "./todo-wrapper.js";

export const deleteAllTodo = function () {
  if (todoAll.length !== 0 && confirm(`Вы точно хотите удалить все задачи?`)) {
    todoWrapper.innerHTML = "";
    todoAll = [];
  }
  // updateStorage();
};