import { todoAll } from "./todoAll.js";
import { createNewTodo } from "./func-CreateNewTodo.js";
import { optionInput } from "./input-enter.js";
export const checkTodoValue = function (value) {
  if (value === "" || value === " ") {
    return false;
  } else {
    return true;
  }
};

//! добавление новой задачи
export const addNewTodo = function () {
  const todoValue = optionInput.value;

  const allId = todoAll.map((item) => item.id);
  allId.sort((a, b) => a - b);
  let maxId = 0;
  if (allId.length == 0) {
    maxId = 1;
  } else {
    maxId = +allId.at(-1) + 1;
  }

  const todo = {
    id: String(maxId),
    content: todoValue,
    status: false,
    data: `${new Date().toLocaleDateString()}`,
  };
  if (checkTodoValue(todoValue)) {
    createNewTodo(todo);
    todoAll.unshift(todo);
    // updateStorage();
  }
  optionInput.value = "";
};