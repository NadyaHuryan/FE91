'use strict'

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
controlsButtonDeleteAll.style.cssText = `
  width: 180px;
  font-size: 28px;
  background-color: aquamarine;
  border: 4px solid #000000;
  border-radius: 15px;
  padding: 20px 0;
`;

// contolsTaskfield

let contolsTaskfield = document.createElement("input");
contolsTaskfield.classList.add("controls__taskfield");
contolsTaskfield.setAttribute("type", "text");
contolsTaskfield.setAttribute("placeholder", "Enter todo...");
contolsTaskfield.setAttribute("name", "new-task");
contolsTaskfield.style.cssText = `
  width: 400px;
  border: 4px solid black;
  border-radius: 15px;
  padding-left: 20px;
  font-size: 28px;
  text-align: center;
`;


// controlsButtonAdd

let controlsButtonAdd = document.createElement("button");
controlsButtonAdd.classList.add("controls__button-add");
controlsButtonAdd.innerHTML = `Add`;
controlsButtonAdd.style.cssText = `
  width: 180px;
  font-size: 28px;
  background-color: aquamarine;
  border: 4px solid #000000;
  border-radius: 15px;
  padding: 20px 0;
`;


// .task

let task = document.createElement("div");
task.classList.add("task");
task.style.cssText = `
  width: 90%;
  border: 4px solid black;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
`;

// taskButtonDone

let taskButtonDone = document.createElement("button");
taskButtonDone.classList.add("task__button-done");
taskButtonDone.innerHTML = `&#10004;`;
taskButtonDone.style.cssText = `
  width: 70px;
  height: 50px;
  font-size: 28px;
  background-color: aquamarine;
  border: 4px solid #000000;
  border-radius: 10px;
`;

// taskList

let taskList = document.createElement("div");
taskList.classList.add("task__list");
taskList.innerHTML = `Todo text`;
taskList.style.cssText = `
  width: 60%;
  color:#505050;
  background: #FFFFFF;
  text-align: center;
  padding: 20px 0;
  border-radius: 10px;
`;

// taskWrap

let taskWrap = document.createElement("div");
taskWrap.classList.add("task__wrap");
taskWrap.style.cssText = `
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

// taskButtonDelete

let taskButtonDelete = document.createElement("button");
taskButtonDelete.classList.add("task__button-delete");
taskButtonDelete.innerHTML = `&#10008;`;
taskButtonDelete.style.cssText = `
  width: 70px;
  height: 50px;
  font-size: 28px;
  background-color: aquamarine;
  border: 4px solid #000000;
  border-radius: 10px;
`;

// taskDate

let taskDate = document.createElement("div");
taskDate.classList.add("task__date");
taskDate.innerHTML = `01.12.2022`
taskDate.style.cssText = `
  width: 150px;
  height: 50px;
  color:#505050;
  background: #FFFFFF;
  text-align: center;
  padding: 10px 0;
  border-radius: 10px;
`;

// клонирование блока task

let task1 = task.cloneNode(true);
let taskButtonDone1 = taskButtonDone.cloneNode(true);
let taskList1 = taskList.cloneNode(true);
let taskWrap1 = taskWrap.cloneNode(true);
let taskButtonDelete1 = taskButtonDelete.cloneNode(true);
let taskDate1 = taskDate.cloneNode(true);

// APPEND elements

root.appendChild(container);
container.append(controls, task, task1);
controls.append(controlsButtonDeleteAll, contolsTaskfield, controlsButtonAdd);
task.append(taskButtonDone, taskList, taskWrap);
task1.append(taskButtonDone1, taskList1, taskWrap1);
taskWrap.append(taskButtonDelete, taskDate);
taskWrap1.append(taskButtonDelete1, taskDate1);
