'use strict'


window.addEventListener("load", () => {

  let todos = []

  let loadPage = function () {
    let localTodos = localStorage.getItem("todos");
    if (localTodos) {
      todos = JSON.parse(localTodos);
    }
  }

  loadPage();

  let updateStorage = function () {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // изменение цвета кнопки при клике 

  let changeBgMouseDown = function () {
    this.style.background = `#6B8E23`
  }
  let changeBgMouseUp = function () {
    this.style.background = `#9ACD32`
  }

  //дата

  let currentDate = function () {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}.${month}.${year}`
  }


  let checkTaskValue = function (value) {
    if (value === "" || value === " ") {
      return false
    } else {
      return true
    }
  }

  let checkedTaskStyle = function () {

    let parent = this.closest(".task");
    let taskName = parent.querySelector(".task-name");
    (this.checked) ? taskName.style.cssText = `text-decoration: line-through; ` : taskName.style.textDecoration = "none";

    let taskCard = parent.querySelector(".task__list");
    (this.checked) ? taskCard.style.backgroundColor = "#C0C0C0" : taskCard.style.backgroundColor = "#FFFFFF";

    let taskDate = parent.querySelector(".task__date");
    (this.checked) ? taskDate.style.backgroundColor = "#C0C0C0" : taskDate.style.backgroundColor = "#FFFFFF";

    let parentLabel = this.closest("label")
    let checkbox = parentLabel.querySelector(".checkbox");
    if (this.checked) {
      checkbox.style.backgroundColor = "#9ACD32"
      checkbox.innerHTML = `&#10004;`;
    } else {
      checkbox.style.backgroundColor = "#FFFFFF"
      checkbox.innerHTML = ``;
    }

    let checkboxId = checkbox.getAttribute("id");
    let checked = todos.find((elem) => elem.id == checkboxId);
    checked.status = !checked.status;
    const objIndex = todos.findIndex((el) => el.Id == checkboxId);
    todos[objIndex] = checked;
    updateStorage();
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
    let taskFilter = todos.filter((item) => item.id !== taskId);

    parent.remove();
    todos = [...taskFilter];
    updateStorage();
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

    //  стилизация чекбокса

    let labelCheckbox = document.createElement("label");
    labelCheckbox.innerHTML = `<span></span>`;
    labelCheckbox.style.cssText = `
    cursor: pointer;
    `

    let spanLabel = labelCheckbox.firstElementChild;
    spanLabel.setAttribute("class", "checkbox");
    spanLabel.setAttribute("id", obj.id);
    if (obj.status) {
      spanLabel.style.cssText = `
      width: 40px;
      height: 40px;
      background: #9ACD32;
      border: 4px solid #000000;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
      spanLabel.innerHTML = `&#10004;`;
    } else {
      spanLabel.style.cssText = `
      width: 40px;
      height: 40px;
      background: #FFFFFF;
      border: 4px solid #000000;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
      spanLabel.innerHTML = ``;
    }

    let taskCheckbox = document.createElement("input");
    taskCheckbox.setAttribute("type", "checkbox");
    taskCheckbox.checked = obj.status;
    taskCheckbox.addEventListener("click", checkedTaskStyle);
    taskCheckbox.style.cssText = `
    display: none;
    `

    let taskList = document.createElement("div");
    taskList.classList.add("task__list");
    if (obj.status) {
      taskList.style.cssText = `
      width: 60%;
      color:#505050;
      background: #C0C0C0;
      text-align: center;
      padding: 20px 0;
      border-radius: 10px;
      `;
      taskList.innerHTML = `<span class="task-name" style="text-decoration: line-through">${obj.text}</span> `
    } else {
      taskList.style.cssText = `
      width: 60%;
      color:#505050;
      background: #FFFFFF;
      text-align: center;
      padding: 20px 0;
      border-radius: 10px;
      `;
      taskList.innerHTML = `<span class="task-name">${obj.text}</span> `
    };

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
    taskDate.innerHTML = `${currentDate()}`;
    if (obj.status) {
      taskDate.style.cssText = `
      width: 150px;
      color:#505050;
      background: #C0C0C0;
      text-align: center;
      padding: 10px 0;
      border-radius: 10px;
      `;
    } else {
      taskDate.style.cssText = `
      width: 150px;
      color:#505050;
      background: #FFFFFF;
      text-align: center;
      padding: 10px 0;
      border-radius: 10px;
      `;
    }

    taskPannel.prepend(task);
    task.append(labelCheckbox, taskList, taskWrap);
    labelCheckbox.append(spanLabel, taskCheckbox)
    taskWrap.append(taskButtonDelete, taskDate);
  }

  for (let i = 0; i < todos.length; i++) {
    createNewTask(todos[i])
  }

  // добавление таски

  let addNewTask = function () {
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
    todos = [];
    localStorage.removeItem("todos");
  };

  controlsButtonDeleteAll.addEventListener("click", deleteAllTasks);
  controlsButtonDeleteAll.addEventListener("click", function () {
    if (confirm("Вы точно хотите удалить все таски?")) {
      deleteAllTasks();
    } else {
      alert("Ничего удалено");
    }
  })
  // contolsTaskfield

  let contolsTaskfield = document.createElement("input");
  contolsTaskfield.classList.add("controls__taskfield");
  contolsTaskfield.setAttribute("type", "text");
  contolsTaskfield.setAttribute("placeholder", "Enter todo...");
  contolsTaskfield.setAttribute("text", "task-new");
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

  // APPEND elements

  root.appendChild(container);
  container.append(controls, taskPannel);
  controls.append(controlsButtonDeleteAll, contolsTaskfield, controlsButtonAdd);

});