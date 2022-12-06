'use strict'

let tasksAll = [
  {
    id: 1,
    name: "Сделать ДЗ",
    status: false,
  },
  {
    id: 13,
    name: "Убрать дом",
    status: false,
  }
]

// изменение цвета кнопки при клике 

let changeBgMouseDown = function () {
  this.style.background = `#6B8E23`
}
let changeBgMouseUp = function () {
  this.style.background = `#9ACD32`
}

// current date

let dateNow = new Date();


let checkTaskValue = function (value) {
  if (value === "" || value === " ") {
    return false
  } else {
    return true
  }
}

let checkTaskStatus = function () {
  let parent = this.closest(".task");
  let taskName = parent.querySelector(".task-name");
  (this.checked) ? taskName.style.cssText = `text-decoration: line-through; ` : taskName.style.textDecoration = "none";

  let taskCard = parent.querySelector(".task__list");
  (this.checked) ? taskCard.style.backgroundColor = "#C0C0C0" : taskCard.style.backgroundColor = "white";

  let taskDate = parent.querySelector(".task__date");
  (this.checked) ? taskDate.style.backgroundColor = "#C0C0C0" : taskDate.style.backgroundColor = "white";
}

let taskPannel = document.createElement("div");
taskPannel.classList.add("task_pannel");
taskPannel.style.cssText = `
  width: 90%;
  `;

// удаление таски

let deleteTask = function () {
  let parent = this.closest(".task");
  let taskId = +parent.getAttribute("data-key");
  let taskFilter = tasksAll.filter((item) => item.id !== taskId);

  parent.remove();
  tasksAll = [...taskFilter];
}

//  создание блока с тасками

let createNewTask = function (obj) {
  let task = document.createElement("div");
  task.classList.add("task");
  task.setAttribute("data-key", obj.id);
  task.style.cssText = `
  border: 4px solid black;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  `;

  let taskStatus = document.createElement("input");
  taskStatus.setAttribute("type", "checkbox");
  taskStatus.checked = obj.status;
  taskStatus.addEventListener("click", checkTaskStatus);


  let taskList = document.createElement("div");
  taskList.classList.add("task__list");
  taskList.style.cssText = `
  width: 60%;
  color:#505050;
  background: #FFFFFF;
  text-align: center;
  padding: 20px 0;
  border-radius: 10px;
  `;
  if (obj.status) {
    taskList.innerHTML = `<span class="task-name" style="text-decoration: line-through">${obj.name}</span> `
  } else {
    taskList.innerHTML = `<span class="task-name">${obj.name}</span> `
  }

  let taskWrap = document.createElement("div");
  taskWrap.classList.add("task__wrap");
  taskWrap.style.cssText = `
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  `;

  let taskButtonDelete = document.createElement("button");
  taskButtonDelete.classList.add("task__button-delete");
  taskButtonDelete.innerHTML = `&#10008;`;
  taskButtonDelete.addEventListener("click", deleteTask)
  taskButtonDelete.addEventListener("mousedown", changeBgMouseDown);
  taskButtonDelete.addEventListener("mouseup", changeBgMouseUp);
  taskButtonDelete.style.cssText = `
  width: 70px;
  height: 50px;
  font-size: 28px;
  background-color: #9ACD32;
  border: 4px solid #000000;
  border-radius: 10px;
  cursor: pointer;
  `;

  let taskDate = document.createElement("div");
  taskDate.classList.add("task__date");
  taskDate.innerHTML = dateNow.toLocaleDateString('KR-ko');
  taskDate.style.cssText = `
  width: 150px;
  color:#505050;
  background: #FFFFFF;
  text-align: center;
  padding: 10px 0;
  border-radius: 10px;
  `;

  taskPannel.append(task);
  task.append(taskStatus, taskList, taskWrap);
  taskWrap.append(taskButtonDelete, taskDate);
}

for (let i = 0; i < tasksAll.length; i++) {
  createNewTask(tasksAll[i])
}

// добавление таски

let addNewTask = function () {
  let taskValue = contolsTaskfield.value;

  let allId = tasksAll.map((item) => item.id);
  allId.sort((a, b) => a - b);
  let maxId = allId.at(-1) + 1;

  let newTask = {
    id: maxId,
    name: taskValue,
    status: false,
  }
  if (checkTaskValue(taskValue)) {
    createNewTask(newTask);
    tasksAll.push(newTask);
  }
  contolsTaskfield.value = "";
}

let root = document.getElementById("root")
root.style.cssText = `
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  margin: 30px auto;
  width: 900px;
  border: 4px solid black;
  border-radius: 40px;
  background-color: lightgrey;
  padding-bottom: 70px;
  `;

// container

let container = document.createElement("div");
container.classList.add("container");
container.style.cssText = `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: 505050;
  `;

// .controls

let controls = document.createElement("div");
controls.classList.add("controls");
controls.style.cssText = `
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  margin-bottom: 40px;
  `;

// controlsButtonDeleteAll

let controlsButtonDeleteAll = document.createElement("button");
controlsButtonDeleteAll.classList.add("controls__button-delete-all");
controlsButtonDeleteAll.innerHTML = `Delete All`;
controlsButtonDeleteAll.addEventListener("mousedown", changeBgMouseDown);
controlsButtonDeleteAll.addEventListener("mouseup", changeBgMouseUp);
controlsButtonDeleteAll.style.cssText = `
  width: 180px;
  font-size: 28px;
  background-color: #9ACD32;
  border: 4px solid #000000;
  border-radius: 15px;
  padding: 20px 0;
  cursor: pointer;
  `;

// удалить все эл-ты

let deleteAllTasks = function () {
  taskPannel.innerHTML = "";
};

controlsButtonDeleteAll.addEventListener("click", deleteAllTasks);

// contolsTaskfield

let contolsTaskfield = document.createElement("input");
contolsTaskfield.classList.add("controls__taskfield");
contolsTaskfield.setAttribute("type", "text");
contolsTaskfield.setAttribute("placeholder", "Enter todo...");
contolsTaskfield.setAttribute("name", "task-new");
contolsTaskfield.setAttribute("id", "task-new");
contolsTaskfield.style.cssText = `
  width: 400px;
  border: 4px solid black;
  border-radius: 15px;
  padding-left: 20px;
  font-size: 28px;
  text-align: center;
  `;

// добавление task при клике на enter

contolsTaskfield.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addNewTask();
  }
})

let controlsButtonAdd = document.createElement("button");
controlsButtonAdd.classList.add("controls__button-add");
controlsButtonAdd.innerHTML = `Add`;
controlsButtonAdd.addEventListener("click", addNewTask);
controlsButtonAdd.addEventListener("mousedown", changeBgMouseDown);
controlsButtonAdd.addEventListener("mouseup", changeBgMouseUp);
controlsButtonAdd.style.cssText = `
  width: 180px;
  font-size: 28px;
  background-color:#9ACD32;
  border: 4px solid #000000;
  border-radius: 15px;
  padding: 20px 0;
  cursor: pointer;
  `;

// taskButtonDone стилизация чекбокса

// let taskButtonDone = document.createElement("button");
// taskButtonDone.classList.add("task__button-done");
// taskButtonDone.innerHTML = `&#10004; `;
// taskButtonDone.style.cssText = `
//   width: 70px;
//   height: 50px;
//   font-size: 28px;
//   background-color: aquamarine;
//   border: 4px solid #000000;
//   border-radius: 10px;
//   cursor: pointer;
// `;


// APPEND elements

root.appendChild(container);
container.append(controls, taskPannel);
controls.append(controlsButtonDeleteAll, contolsTaskfield, controlsButtonAdd);
