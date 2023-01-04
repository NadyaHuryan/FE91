import {cssRoot, cssWrapper, cssDeleteAllBtn, cssInputTodo, cssAddBtn, cssContainer, cssCheckTodo, cssTextCard} from './modules/style.js'
import {cssCard, cssDeleteCardBtn, cssDateCard} from './modules/style.js'

function getName () {
  const dataLocalStorage = localStorage.getItem("todos");
  return dataLocalStorage
};

function setName (data) {
  const sendDataToLocal = localStorage.setItem("todos", JSON.stringify(data));
  return sendDataToLocal
};

window.addEventListener("load", function (e) {
	let dataFromLocalStorage = localStorage.getItem("todos")
	todos = JSON.parse(dataFromLocalStorage)

	for (let todoElement of todos) {
		renderForm(e, todoElement)
	}
});

window.addEventListener("beforeunload", function () {
	localStorage.setItem("todos", JSON.stringify(todos))
});

//Selectors

let root = document.getElementById("root");
root.style.cssText = cssRoot;

//wrapper

let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
wrapper.style.cssText = cssWrapper;

let deleteAllBtn = document.createElement("button");
deleteAllBtn.classList.add("deleteAll");
deleteAllBtn.textContent = "Delete All";
deleteAllBtn.style.cssText = cssDeleteAllBtn;

let inputTodo = document.createElement("input");
inputTodo.classList.add("input-todo");
inputTodo.setAttribute("type", "text");
inputTodo.setAttribute("placeholder", "Enter todo ...");
inputTodo.setAttribute("name", "input-todo");
inputTodo.setAttribute("id", "input-todo");
inputTodo.style.cssText = cssInputTodo;

let addBtn = document.createElement("button");
addBtn.classList.add("addBtn");
addBtn.textContent = "Add";
addBtn.style.cssText = cssAddBtn;

//Function

let todos = [];
let toDo;

//container
function renderForm(event, toDo) {
  if (inputTodo.value === "") return;

  if (!toDo) {
    toDo = {
      id: new Date().getTime(),
      // date: new Date().toLocaleDateString(),
      date: createDateFunc(),
      text: inputTodo.value,
      isChecked: false,
    };
    inputTodo.value = "";
    todos.push(toDo);
    setName(todos);
  }

  let container = document.createElement("div");
  container.classList.add("container");
  container.id = toDo.id;
  root.append(container);
  container.style.cssText = cssContainer;

  let checkToDo = document.createElement("input");
  checkToDo.classList.add("checkToDo");
  checkToDo.className = "checkToDo";
  checkToDo.type = "checkbox";
  checkToDo.checked = toDo.isChecked;
  container.append(checkToDo);
  checkToDo.style.cssText = cssCheckTodo;

  let textCard = document.createElement("div");
  textCard.classList.add("textCard");
  textCard.className = "textCard";
  textCard.textContent = toDo.text;
  container.append(textCard);
  textCard.style.cssText = cssTextCard;

  let card = document.createElement("div");
  card.classList.add("card");
  container.append(card);
  card.style.cssText = cssCard;

  let deleteCardBtn = document.createElement("button");
  deleteCardBtn.classList.add("deleteCardBtn");
  deleteCardBtn.innerHTML = "╳";
  card.append(deleteCardBtn);
  deleteCardBtn.style.cssText = cssDeleteCardBtn;

  let dateCard = document.createElement("button");
  dateCard.classList.add("dateCard");
  dateCard.innerHTML = createDateFunc();
  card.append(dateCard);
  dateCard.style.cssText = cssDateCard;
}

//Function
const createDateFunc = () => {
    const date = new Date().toDateString().split(" ");
    const time = new Date().toTimeString().split(" ")[0].slice(0, -3);
    return `${time} ${date[2]} ${date[1]}`;
  };

//Event Listener

addBtn.addEventListener("click", renderForm);

inputTodo.addEventListener("keyup", function (event) {
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

