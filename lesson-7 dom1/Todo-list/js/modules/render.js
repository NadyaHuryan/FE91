
import { contolsTaskfield, controls, buttonDeleteAll, buttonAdd } from "./controls.js";
import { currentDate } from "./date.js";
import { updateStorage } from "./storage.js";
import {
  cssTaskPannel, cssLabelCheckbox, cssTaskCheckbox, cssTask,
  cssSpanLabelTrue, setTaskStyle, cssTaskListTrue, cssTaskWrapper, changeBgMouseDown,
  changeBgMouseUp, cssTaskButtonDelete, cssTaskDateTrue, cssTaskListFalse, cssSpanLabelFalse,
  cssTaskDateFalse, cssContainer, cssRoot
} from "./style.js";

export let todos = [];

let deleteTask = function () {
  let parent = this.closest(".task");
  let taskId = +parent.getAttribute("data-key");
  let taskFilter = todos.filter((item) => item.id !== taskId);

  parent.remove();
  todos = [...taskFilter];
  updateStorage();
}

export let createNewTask = function (obj) {
  let task = document.createElement("div");
  task.classList.add("task");
  task.setAttribute("data-key", obj.id);
  task.style.cssText = cssTask;

  let labelCheckbox = document.createElement("label");
  labelCheckbox.innerHTML = `<span></span>`;
  labelCheckbox.style.cssText = cssLabelCheckbox;

  let spanLabel = labelCheckbox.firstElementChild;
  spanLabel.setAttribute("class", "checkbox");
  spanLabel.setAttribute("id", obj.id);
  if (obj.status) {
    spanLabel.style.cssText = cssSpanLabelTrue;
    spanLabel.innerHTML = `&#10004;`;
  } else {
    spanLabel.style.cssText = cssSpanLabelFalse;
    spanLabel.innerHTML = ``;
  }

  let taskCheckbox = document.createElement("input");
  taskCheckbox.setAttribute("type", "checkbox");
  taskCheckbox.checked = obj.status;
  taskCheckbox.addEventListener("click", setTaskStyle);
  taskCheckbox.style.cssText = cssTaskCheckbox;

  let taskList = document.createElement("div");
  taskList.classList.add("task__list");
  if (obj.status) {
    taskList.style.cssText = cssTaskListTrue;
    taskList.innerHTML = `<span class="task-name" style="text-decoration: line-through">${obj.text}</span> `
  } else {
    taskList.style.cssText = cssTaskListFalse;
    taskList.innerHTML = `<span class="task-name">${obj.text}</span> `
  };

  let taskWrapper = document.createElement("div");
  taskWrapper.classList.add("task__wrapper");
  taskWrapper.style.cssText = cssTaskWrapper;

  let taskButtonDelete = document.createElement("button");
  taskButtonDelete.classList.add("task__button-delete");
  taskButtonDelete.innerHTML = `&#10008;`;
  taskButtonDelete.addEventListener("click", deleteTask)
  taskButtonDelete.addEventListener("mousedown", changeBgMouseDown);
  taskButtonDelete.addEventListener("mouseup", changeBgMouseUp);
  taskButtonDelete.style.cssText = cssTaskButtonDelete;

  let taskDate = document.createElement("div");
  taskDate.classList.add("task__date");
  taskDate.innerHTML = `${currentDate()}`;
  if (obj.status) {
    taskDate.style.cssText = cssTaskDateTrue;
  } else {
    taskDate.style.cssText = cssTaskDateFalse;
  }

  taskPannel.prepend(task);
  task.append(labelCheckbox, taskList, taskWrapper);
  labelCheckbox.append(spanLabel, taskCheckbox)
  taskWrapper.append(taskButtonDelete, taskDate);
}

export let loadPage = function () {
  let localTodos = localStorage.getItem("todos");
  if (localTodos) {
    todos = JSON.parse(localTodos);
  }
  buildPage();
}

export let buildPage = function () {
  for (let i = 0; i < todos.length; i++) {
    createNewTask(todos[i])
  }
}

export let clearTodos = function () {
  todos = [];
};

export let taskPannel = document.createElement("div");
taskPannel.classList.add("task_pannel");
taskPannel.style.cssText = cssTaskPannel;

let root = document.getElementById("root")
root.style.cssText = cssRoot;

let container = document.createElement("div");
container.classList.add("container");
container.style.cssText = cssContainer;

root.appendChild(container);
container.append(controls, taskPannel);
controls.append(buttonDeleteAll, contolsTaskfield, buttonAdd);

