
import { cssControls, cssButtonDeleteAll, cssContolsTaskfield, cssButtonAdd } from "./style.js"
import { changeBgMouseDown, changeBgMouseUp } from "./style.js";
import { todos, createNewTask, taskPannel, clearTodos } from "./render.js";
import { currentDate } from "./date.js";
import { updateStorage } from "./storage.js";

let checkTaskValue = function (value) {
  if (value === "" || value === " ") {
    return false
  } else {
    return true
  }
}

export let addNewTask = function () {
  let taskValue = contolsTaskfield.value;

  let allId = todos.map((item) => item.id);
  allId.sort((a, b) => a - b);
  let maxId;
  (todos.length === 0) ? maxId = 1 : maxId = allId.at(-1) + 1;

  let todo = {
    id: maxId,
    date: currentDate(),
    text: taskValue,
    status: false,
  }
  if (checkTaskValue(taskValue)) {
    createNewTask(todo);
    todos.push(todo);
    updateStorage();
  }
  contolsTaskfield.value = "";
}

export let controls = document.createElement("div");
controls.classList.add("controls");
controls.style.cssText = cssControls;

let deleteAllTasks = function () {
  taskPannel.innerHTML = "";
  clearTodos()
  localStorage.removeItem("todos");
};

export let buttonDeleteAll = document.createElement("button");
buttonDeleteAll.classList.add("controls__button-delete-all");
buttonDeleteAll.innerHTML = `Delete All`;
buttonDeleteAll.addEventListener("mousedown", changeBgMouseDown);
buttonDeleteAll.addEventListener("mouseup", changeBgMouseUp);
buttonDeleteAll.style.cssText = cssButtonDeleteAll;
buttonDeleteAll.addEventListener("click", deleteAllTasks);
buttonDeleteAll.addEventListener("click", function () {
  if (confirm("Вы точно хотите удалить все таски?")) {
    deleteAllTasks();
  } else {
    alert("Ничего не удалено");
  }
});

export let contolsTaskfield = document.createElement("input");
contolsTaskfield.classList.add("controls__taskfield");
contolsTaskfield.setAttribute("type", "text");
contolsTaskfield.setAttribute("placeholder", "Enter todo...");
contolsTaskfield.setAttribute("text", "task-new");
contolsTaskfield.setAttribute("id", "task-new");
contolsTaskfield.style.cssText = cssContolsTaskfield;
contolsTaskfield.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addNewTask();
  }
});

export let buttonAdd = document.createElement("button");
buttonAdd.classList.add("controls__button-add");
buttonAdd.innerHTML = `Add`;
buttonAdd.addEventListener("click", addNewTask);
buttonAdd.addEventListener("mousedown", changeBgMouseDown);
buttonAdd.addEventListener("mouseup", changeBgMouseUp);
buttonAdd.style.cssText = cssButtonAdd;
