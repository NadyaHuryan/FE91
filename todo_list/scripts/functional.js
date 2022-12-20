import { styleCheckUpgraded } from "./style.js";
import { createNewTodo } from "./createNewTodo.js";
import {
  todoWrapper,
  optionInput,
  optionCountAll,
  optionCountCompleted,
  root,
  wrapper,
  container,
  optionBar,
  optionBarInputPanel,
  optionBarShowPanel,
  optionDeleteAll,
  optionAdd,
  optionDeleteLast,
  optionShowAll,
  optionShowCompleted,
  optionSearch,
} from "./components.js";

let todoAll = [];

export const loadPage = function () {
  const localTodoAll = localStorage.getItem("todoAll");
  if (localTodoAll) {
    todoAll = JSON.parse(localTodoAll);
  }
};

export const start = function () {
  for (let i = todoAll.length -1; i >= 0; i--) {
    createNewTodo(todoAll[i]);
    }
  count();
};

export const showCompleted = function () {
  const todoItemElement = todoWrapper.querySelectorAll(".todo__item");
  for (let i = 0; i < todoItemElement.length; i++) {
    if (!todoItemElement[i].querySelector(".todo__check").checked) {
      todoItemElement[i].style.display = `none`;
    }
  }
};

export const showAll = function () {
  const todoItemElement = todoWrapper.querySelectorAll(".todo__item");
  for (let i = 0; i < todoItemElement.length; i++) {
    todoItemElement[i].style.display = `grid`;
  }
};

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

export const deleteTodo = function (event) {
  const parent = event.target.closest(".todo__item");
  const todoId = parent.getAttribute("data-key");
  const todoFilter = todoAll.filter((item) => item.id !== todoId);
  if (confirm(`Вы точно хотите удалить эту задачу?`)) {
    parent.remove();
    todoAll = todoFilter;
    updateStorage();
  }
};

export const deleteLastTodo = function () {
  const todoItemLast = todoWrapper.firstElementChild;
  const lastId = todoItemLast.getAttribute("data-key");
  const todoFilter = todoAll.filter((item) => item.id !== lastId);
  if (confirm(`Вы точно хотите удалить последнюю введенную задачу?`)) {
    todoItemLast.remove();
    todoAll = todoFilter;
  }
  updateStorage();
};

export const deleteAllTodo = function () {
  if (todoAll.length !== 0 && confirm(`Вы точно хотите удалить все задачи?`)) {
    todoWrapper.innerHTML = "";
    todoAll = [];
  }
  updateStorage();
};

export const count = function () {
  const countAll = todoAll.length;
  const countCompleted = todoAll.filter((item) => item.status === true).length;
  optionCountCompleted.innerHTML = `Completed: ${countCompleted}`;
  optionCountAll.innerHTML = `All: ${countAll}`;
};

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
  updateStorage();
};

export const checkTodoValue = function (value) {
  if (value === "" || value === " ") {
    return false;
  } else {
    return true;
  }
};

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
    updateStorage();
  }
  optionInput.value = "";
};

export const updateStorage = function () {
  localStorage.setItem("todoAll", JSON.stringify(todoAll));
};

export const appElementsDock = function () {
  root.append(wrapper);
  wrapper.append(container);
  container.append(optionBar, todoWrapper);
  optionBar.append(optionBarInputPanel, optionBarShowPanel);
  optionBarInputPanel.append(
    optionDeleteAll,
    optionDeleteLast,
    optionInput,
    optionAdd
  );

  optionBarShowPanel.append(
    optionCountAll,
    optionCountCompleted,
    optionShowAll,
    optionShowCompleted,
    optionSearch
  );
};
