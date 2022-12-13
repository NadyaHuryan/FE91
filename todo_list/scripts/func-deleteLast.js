import { todoAll } from "./todoAll.js";
import { todoWrapper } from "./todo-wrapper.js";


export const deleteLastTodo = function () {
  const todoItemLast = todoWrapper.firstElementChild;
  const lastId = todoItemLast.getAttribute("data-key");
  const todoFilter = todoAll.filter((item) => item.id !== lastId);
  if (confirm(`Вы точно хотите удалить последнюю введенную задачу?`)) {
    todoItemLast.remove();
    todoAll = todoFilter;
  }
//   updateStorage();
};