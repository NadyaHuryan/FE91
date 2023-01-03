import { todos } from "./render.js";

export let cssTask = `
border: 4px solid black;
border-radius: 25px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
margin-bottom: 20px;
`;

export let cssTaskPannel = `
width: 90%;
`;

export let cssLabelCheckbox = `
cursor: pointer;
`;

export let cssSpanLabelTrue = `
width: 40px;
height: 40px;
background: #9ACD32;
border: 4px solid #000000;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
`;

export let cssSpanLabelFalse = `
width: 40px;
height: 40px;
background: #FFFFFF;
border: 4px solid #000000;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
`;

export let cssTaskCheckbox = `
display: none;
`;

export let cssTaskListTrue = `
width: 60%;
color:#505050;
background: #C0C0C0;
text-align: center;
padding: 20px 0;
border-radius: 10px;
`;

export let cssTaskListFalse = `
width: 60%;
color:#505050;
background: #FFFFFF;
text-align: center;
padding: 20px 0;
border-radius: 10px;
`;

export let cssTaskWrapper = `
height: 150px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-end;
`;

export let cssTaskButtonDelete = `
width: 70px;
height: 50px;
font-size: 28px;
background-color: #9ACD32;
border: 4px solid #000000;
border-radius: 10px;
cursor: pointer;
`;

export let cssTaskDateTrue = `
width: 150px;
color:#505050;
background: #C0C0C0;
text-align: center;
padding: 10px 0;
border-radius: 10px;
`;

export let cssTaskDateFalse = `
width: 150px;
color:#505050;
background: #FFFFFF;
text-align: center;
padding: 10px 0;
border-radius: 10px;
`;

export let cssRoot = `
font-family: Arial, Helvetica, sans-serif;
font-size: 28px;
margin: 30px auto;
width: 900px;
border: 4px solid black;
border-radius: 40px;
background-color: lightgrey;
padding-bottom: 70px;
`;

export let cssContainer = `
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
color: 505050;
`;

export let cssControls = `
width: 90%;
display: flex;
justify-content: space-between;
padding-top: 20px;
margin-bottom: 40px;
`;

export let cssButtonDeleteAll = `
width: 180px;
font-size: 28px;
background-color: #9ACD32;
border: 4px solid #000000;
border-radius: 15px;
padding: 20px 0;
cursor: pointer;
`;

export let cssContolsTaskfield = `
width: 400px;
border: 4px solid black;
border-radius: 15px;
padding-left: 20px;
font-size: 28px;
text-align: center;
`;

export let cssButtonAdd = `
width: 180px;
font-size: 28px;
background-color:#9ACD32;
border: 4px solid #000000;
border-radius: 15px;
padding: 20px 0;
cursor: pointer;
`;

import { updateStorage } from "./storage.js";

export let setTaskStyle = function () {

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
  let isChecked = todos.find((elem) => elem.id == checkboxId);
  isChecked.status = !isChecked.status;
  const objIndex = todos.findIndex((el) => el.Id == checkboxId);
  todos[objIndex] = isChecked;
  updateStorage();
};

export let changeBgMouseDown = function () {
  this.style.background = `#6B8E23`
};

export let changeBgMouseUp = function () {
  this.style.background = `#9ACD32`
};