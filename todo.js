"use strict";

//Selectors

let root = document.getElementById("root");
root.style.cssText = `
    margin: 0 auto;
    width: 80%;
    background-color: rgb(193, 193, 193);
    border: 4px solid black;
    border-radius: 30px;
`;

//wrapper

let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
wrapper.style.cssText = `
    width: 80%;
    height: 100px;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

let deleteAllBtn = document.createElement("button");
deleteAllBtn.classList.add("deleteAll");
deleteAllBtn.textContent = "Delete All";
deleteAllBtn.style.cssText = `
    width: 20%;
    height: 45px;
    justify-content: center;
    display: flex;
    align-items: center;
    border: 3px solid black;
    border-radius: 10px;
    background-color: rgb(34, 195, 195);
    font-size: 20px;
`;

let inputTodo = document.createElement("input");
inputTodo.classList.add("input-todo");
inputTodo.setAttribute("type", "text");
inputTodo.setAttribute("placeholder", "Enter todo ...");
inputTodo.setAttribute("name", "input-todo");
inputTodo.setAttribute("id", "input-todo");
inputTodo.style.cssText = `
    width: 50%;
    height: 45px;
    text-align: center;
    border: 3px solid black;
    border-radius: 10px;
	background-color: azure;
	color: gray;
	font-size: 20px;
`;

let addBtn = document.createElement("button");
addBtn.classList.add("addBtn");
addBtn.textContent = "Add";
addBtn.style.cssText = `
    width: 20%;
    height: 45px;
    justify-content: center;
    display: flex;
    align-items: center;
    border: 3px solid black;
    border-radius: 10px;
    background-color: rgb(34, 195, 195);
    font-size: 20px;
`;

//Function

let todos = [];
let toDo;

//container
function renderForm(event, toDo) {
  if (inputTodo.value === "") return;

  if (!toDo) {
    toDo = {
      id: new Date().getTime(),
      date: new Date().toLocaleDateString(),
      text: inputTodo.value,
      isChecked: false,
    };
    inputTodo.value = "";
    todos.push(toDo);
  }

  let container = document.createElement("div");
  container.classList.add("container");
  container.id = toDo.id;
  root.append(container);
  container.style.cssText = `
        margin: 0 auto;
        width: 80%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        border: 3px solid black;
        border-radius: 10px;
    `;

  let checkToDo = document.createElement("input");
  checkToDo.classList.add("checkToDo");
  checkToDo.className = "checkToDo";
  checkToDo.type = "checkbox";
  checkToDo.checked = toDo.isChecked;
  // selectCard.id = 'selectCard';
  container.append(checkToDo);
  checkToDo.style.cssText = `
        margin-top: 22px;
        margin-left: 5px;
        width: 10%;
        height: 30px;
        justify-content: center;
        display: flex;
        align-items: center;
        border: 2px solid;
        border-radius: 7px;
        color: rgb(34, 195, 195);
    `;

  let textCard = document.createElement("div");
  textCard.classList.add("textCard");
  // textCard.innerHTML = 'Todo text';
  // textCard.id = 'textCard';
  //   textCard.type = "text";
  textCard.className = "textCard";
  textCard.textContent = toDo.text;
  container.append(textCard);
  textCard.style.cssText = `
        margin-top: 22px;
        margin-left: 5px;
        width: 60%;
        height: 35px;
        justify-content: center;
        display: flex;
        align-items: center;
        border-radius: 5px;
        background-color: rgb(238, 237, 237);
        font-size: 20px;
        text-align: center;
    `;

  let card = document.createElement("div");
  card.classList.add("card");
  container.append(card);
  card.style.cssText = `
        width: 16%;
    `;

  let deleteCardBtn = document.createElement("button");
  deleteCardBtn.classList.add("deleteCardBtn");
  deleteCardBtn.innerHTML = "╳";
  card.append(deleteCardBtn);
  // deleteCardBtn.id = 'deleteCardBtn';
  deleteCardBtn.style.cssText = `
        margin-top: 10px;
        margin-left: 45px;
        width: 40px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid;
        border-radius: 7px;
        background-color: rgb(34, 195, 195);
    `;

  let dateCard = document.createElement("button");
  dateCard.classList.add("dateCard");
  dateCard.innerHTML = toDo.date;
  card.append(dateCard);
  dateCard.style.cssText = `
        margin-top: 10px;
        width: 110px;
        height: 30px;
        justify-content: center;
        display: flex;
        align-items: center;
        border-radius: 3px;
        background-color: rgb(232, 231, 231);
        font-size: 20px;
    `;
}

//Function
const createDateFunc = () => {
    const date = new Date().toDateString().split(" ");
    const time = new Date().toTimeString().split(" ")[0].slice(0, -3);
    return `${time} ${date[2]} ${date[1]}`;
  };

//Event Listener

addBtn.addEventListener("click", renderForm);

addBtn.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    renderForm;
  }
});

deleteAllBtn.addEventListener("click", function () {
  let containers = document.querySelectorAll(".container");
  for (let container of containers) {
    container.remove();
  }
});

root.addEventListener("click", function (event) {
  if (event.target.className == "deleteCardBtn") {
    let target = event.target;
    target = target.parentNode;
    target.parentNode.remove();
  }
});

root.addEventListener("click", function (event) {
  if (event.target.className == "checkToDo") {
    let target = event.target;
    target.parentNode.style.background = "#F0E68C";
    target.nextElementSibling.style = "text-decoration: line-through";
    target.checked = true;
  }
});


//Append Elements

root.append(wrapper);
wrapper.append(deleteAllBtn, inputTodo, addBtn);
// container.append(selectCard, textCard, card);
// card.append(deleteCardBtn, dateCard);


// window.addEventListener("load", function (e) {
// 	let dataFromLocalStorage = localStorage.getItem("todos")
// 	todos = JSON.parse(dataFromLocalStorage)

// 	for (let todoElement of todos) {
// 		renderForm(e, todoElement)
// 	}
// });

// window.addEventListener("beforeunload", function () {
// 	localStorage.setItem("todos", JSON.stringify(todos))
// });