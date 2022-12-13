import { todoAll } from "./todoAll.js";

export   const deleteTodo = function (event) {
  const parent = event.target.closest(".todo__item");
  const todoId = parent.getAttribute("data-key");
  const todoFilter = todoAll.filter((item) => item.id !== todoId);
  if (confirm(`Вы точно хотите удалить эту задачу?`)) {
    parent.remove();
    todoAll = todoFilter;
   //  updateStorage();
  }
};