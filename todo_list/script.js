"use strict";

const { log } = console;

let todoAll = [
  { id: "1", content: "todo text 1", status: true, data: "4.12.2022" },
  { id: "6", content: "todo text 2", status: false, data: "4.12.2022" },
  { id: "3", content: "todo text 3", status: false, data: "4.12.2022" },
];

const countAll = todoAll.length;
const countCompleted = todoAll.filter((item) => item.status === true).length;

//! Счетчик
const count = function () {
  const countAll = todoAll.length;
  const countCompleted = todoAll.filter((item) => item.status === true).length;
  optionCountCompleted.innerHTML = `Completed: ${countCompleted}`;
  optionCountAll.innerHTML = `All: ${countAll}`;
};

// !Изменение статуса выполнения
const checkTodoStatus = function (event) {
  const parent = event.target.closest(".todo__check-label");
  const todoCheckUpgraded = parent.querySelector(".todo__check_upgraded");
  const todoItemElement = parent.closest(".todo__item");
  const todoContentElement = todoItemElement.querySelector(".todo__content");
  const todoId = todoItemElement.getAttribute("data-key");
  const todoItemIndex = todoAll.findIndex((item) => item.id === todoId);
  if (event.target.checked) {
    todoCheckUpgraded.style.cssText = `
   position: absolute;
   display: block;
   width: 15px;
   height: 25px;
   border: solid #747474;
   border-radius: 3px;
   border-width: 0 5px 5px 0;
   transform: translateY(-50%);
   transform: rotate(45deg);
   top: 15%;
   left: 15px;
   z-index: 2;
    `;
    todoItemElement.style.background = `#4D6D9A`;
    todoContentElement.style.textDecoration = `line-through`;
    todoAll[todoItemIndex]["status"] = true;
  } else {
    todoCheckUpgraded.style.cssText = `display: none;`;
    todoItemElement.style.background = `none`;
    todoContentElement.style.textDecoration = `none`;
    todoAll[todoItemIndex]["status"] = false;
  }
};

// !Удаление текущей задачи
const deleteTodo = function (event) {
  const parent = event.target.closest(".todo__item");
  const todoId = parent.getAttribute("data-key");
  const todoFilter = todoAll.filter((item) => item.id !== todoId);
  if (confirm(`Вы точно хотите удалить эту задачу?`)) {
    parent.remove();
    todoAll = todoFilter;
  }
};

//! Удаление всех задач
const deleteAllTodo = function () {
  if (todoAll.length !== 0 && confirm(`Вы точно хотите удалить все задачи?`)) {
    todoWrapper.innerHTML = "";
    todoAll = [];
  }
};

//! Удаление последней задачи
const deleteLastTodo = function () {
  const todoItemLast = todoWrapper.lastElementChild;
  const lastId = todoItemLast.getAttribute("data-key");
  const todoFilter = todoAll.filter((item) => item.id !== lastId);
  if (confirm(`Вы точно хотите удалить последнюю задачу?`)) {
    todoItemLast.remove();
    todoAll = todoFilter;
  }
};

// !Создание новой задачи
//  *функция проверки на пустую строку
const checkTodoValue = function (value) {
  if (value === "" || value === " ") {
    return false;
  } else {
    return true;
  }
};

const createNewTodo = function (obj) {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo__item");
  todoItem.setAttribute("data-key", obj.id);
  todoItem.style.cssText = `
   width: 100%;
   padding: 10px 10px;
   border-radius: 10px;
   border: 2px solid #4D6D9A;
   display: grid;
   grid-template-columns: 60px 1fr 100px;
   grid-template-rows: 1fr 1fr;
   gap: 15px;
   align-items: center;
   justify-items: stretch;
    `;

  const todoCheckLabel = document.createElement("label");
  todoCheckLabel.classList.add("todo__check-label");
  todoCheckLabel.setAttribute("for", obj.id);
  todoCheckLabel.style.cssText = `
   display: block;
   position: relative;
   grid-row-start: 1;
   grid-row-end: span 2;
   width: 50px;
   height: 50px;
   border-radius: 10px;
   border: 2px solid #4D6D9A;
   background-color: #EDB5BF;
`;

  const todoCheck = document.createElement("input");
  todoCheck.classList.add("todo__check");
  todoCheck.setAttribute("type", "checkbox");
  todoCheck.setAttribute("id", obj.id);
  todoCheck.style.cssText = `
   opacity: 0;
   width: 100%;
   height: 100%;
    `;
  todoCheck.checked = obj.status;
  todoCheck.addEventListener("change", checkTodoStatus); //! вызов функции изменения статуса
  todoCheck.addEventListener("change", count); //! вызов функции счетчика

 const todoCheckUpgraded = document.createElement("span");
  todoCheckUpgraded.classList.add("todo__check_upgraded");
  todoCheckUpgraded.setAttribute("for", "todo");

 const todoContent = document.createElement("div");
  todoContent.classList.add("todo__content");
  todoContent.style.cssText = `
     color: #FFFFFF;
     border-radius: 10px;
     border: 2px solid #4D6D9A;
     background-color: #86B3D1;
     font-size: 18px;
     min-height: 50px;
     grid-row-start: 1;
     grid-row-end: span 2;
     display: flex;
     justify-content: center;
     align-items: center;
    `;
  if (obj.status) {
    todoContent.innerHTML = `${obj.content}`;
    todoContent.style.textDecoration = `line-through`;
    todoCheckUpgraded.style.cssText = `
   position: absolute;
   display: block;
   width: 15px;
   height: 25px;
   border: solid #747474;
   border-radius: 3px;
   border-width: 0 5px 5px 0;
   transform: translateY(-50%);
   transform: rotate(45deg);
   top: 15%;
   left: 15px;
   z-index: 2;
    `;
    todoItem.style.background = `#4D6D9A`;
  } else {
    todoContent.innerHTML = `${obj.content}`;
    todoCheckUpgraded.style.cssText = `display: none;`;
    todoItem.style.background = `none`;
    todoContent.style.textDecoration = `none`;
  }

  const todoDelete = document.createElement("button");
  todoDelete.classList.add("todo__delete");
  todoDelete.innerHTML = `X`;
  todoDelete.style.cssText = `
     width: 50px;
     height: 50px;
     justify-self: end;
  ${button};
  `;
  todoDelete.addEventListener("mouseover", function () {
    this.style.cssText = `
     width: 50px;
     height: 50px;
     justify-self: end;
    ${buttonHover}
    `;
  });

  todoDelete.addEventListener("mouseout", function () {
    this.style.cssText = `
     width: 50px;
     height: 50px;
     justify-self: end;
    ${button}
    `;
  });

  const todoDate = document.createElement("div");
  todoDate.classList.add("todo__date");
  todoDate.innerHTML = `${obj.data}`;
  todoDate.style.cssText = `
   font-family: "Poppins", sans-serif;
   font-size: 16px;
   width: 100%;
   height: 100%;
   color: #FFFFFF;
   border-radius: 10px;
   border: 2px solid #4D6D9A;
   background-color: #86B3D1;
   display: flex;
   align-items: center;
   justify-content: center;
  `;

  todoDelete.addEventListener("click", deleteTodo); //! вызов функции удаления текущего элемента
  todoDelete.addEventListener("click", count); //! вызов функции счетчика

  todoCheckLabel.append(todoCheck, todoCheckUpgraded);
  todoItem.append(todoCheckLabel, todoContent, todoDelete, todoDate);
  todoWrapper.appendChild(todoItem);
};

//! добавление новой задачи
const addNewTodo = function () {
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
    todoAll.push(todo);
  }
  optionInput.value = "";

  log("allId", allId);
  log("maxId", maxId);
};

//! сортировка выполненных задач (показать выполненные)
const showCompleted = function () {
  const todoItemElement = todoWrapper.querySelectorAll(".todo__item");
  for (let i = 0; i < todoItemElement.length; i++) {
    if (!todoItemElement[i].querySelector(".todo__check").checked) {
      todoItemElement[i].style.display = `none`;
    }
    console.log(todoItemElement[i].querySelector(".todo__check").checked);
  }
  console.log("todoItemElement", todoItemElement);
};

//! показать все задачи
const showAll = function () {
  const todoItemElement = todoWrapper.querySelectorAll(".todo__item");
  for (let i = 0; i < todoItemElement.length; i++) {
    todoItemElement[i].style.display = `grid`;
  }
};

// ! Создание переменных для стилей элементов, стилизация тегов HTML-документа
const button = `
   cursor: pointer;
   color: #747474;
   font-family: "Poppins", sans-serif;
   font-size: 18px;
   height: 50px;
   border-radius: 10px;
   border: 2px solid #4D6D9A;
   background-color: #EDB5BF;
   box-shadow: 0 10px 5px -5px rgba(30, 129, 204, 0.2);
   transition: 0.4s ease-in-out;
`;

const buttonHover = `
   background: #a67f86;
   color: #FFFFFF;
   font-weight: 600;
   cursor: pointer;
   font-family: "Poppins", sans-serif;
   font-size: 18px;
   height: 50px;
   border-radius: 10px;
   border: 2px solid #4D6D9A;
   box-shadow: 0 10px 5px -5px rgba(30, 129, 204, 0.2);
   transition: 0.4s ease-in-out;
`;

const root = document.getElementById("root");
root.style.cssText = `
   padding: 50px 50px;
   color: #747474;
   font-family: "Poppins", sans-serif;
   font-size: 18px;
`;

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
wrapper.style.cssText = `
   background-color: #5F6366;
   margin: 0 auto;
   width: 1024px;
   border-radius: 20px;
   padding: 25px 50px;
`;

// //! Создание элемента: container
const container = document.createElement("div");
container.classList.add("container");
container.style.cssText = `
width: 100%;
   padding: 30px;
   border: 4px solid #4D6D9A;
   border-radius: 20px;
   background-color: #99CED3;
   display: flex;
   flex-direction: column;
   gap: 30px;
`;

//! Создание элементов блока: option-bar
const optionBar = document.createElement("div");
optionBar.classList.add("option-bar");
optionBar.style.cssText = `
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 15px;
   position: sticky;
   top: 0;
   border-radius: 20px;
   background-color: #99CED3;
   padding: 10px;
   z-index: 5;
`;

// ! Создание элементов блока: option-bar__input-panel
const optionBarInputPanel = document.createElement("div");
optionBarInputPanel.classList.add("option-bar__input-panel");
optionBarInputPanel.style.cssText = `
   display: grid;
   grid-template-columns: 120px 120px 1fr 120px;
   gap: 15px;
`;

const optionDeleteAll = document.createElement("button");
optionDeleteAll.classList.add("option__delete-all");
optionDeleteAll.innerHTML = `Delete All`;
optionDeleteAll.style.cssText = `
width: 120px;
${button}
`;
optionDeleteAll.addEventListener("mouseover", function () {
  this.style.cssText = `${buttonHover}`;
});
optionDeleteAll.addEventListener("mouseout", function () {
  this.style.cssText = `${button}`;
});
optionDeleteAll.addEventListener("click", deleteAllTodo); // ! вызов функции удаления всех элементов
optionDeleteAll.addEventListener("click", count); // ! вызов функции счетчика

const optionDeleteLast = document.createElement("button");
optionDeleteLast.classList.add("option__delete-last");
optionDeleteLast.innerHTML = `Delete Last`;
optionDeleteLast.style.cssText = `
width: 120px;
${button}
`;
optionDeleteLast.addEventListener("mouseover", function () {
  this.style.cssText = `${buttonHover}`;
});
optionDeleteLast.addEventListener("mouseout", function () {
  this.style.cssText = `${button}`;
});
optionDeleteLast.addEventListener("click", deleteLastTodo); //! вызов функции удаления последнего элемента
optionDeleteLast.addEventListener("click", count); //! вызов функции счетчика

const optionInput = document.createElement("input");
optionInput.classList.add("option__input");
optionInput.setAttribute("type", "text");
optionInput.setAttribute("placeholder", "Enter todo …");
optionInput.setAttribute("content", "todo-new");
optionInput.setAttribute("id", "todo-new");
optionInput.style.cssText = `
   color: #FFFFFF;
   border-radius: 10px;
   border: 2px solid #4D6D9A;
   background-color: #86B3D1;
   font-family: "Poppins", sans-serif;
   font-size: 18px;
   padding: 5px;
`;

optionInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addNewTodo();
    count(); // ! вызов функции добавления нового элемента и счетчика
  }
});

const optionAdd = document.createElement("button");
optionAdd.classList.add("option__add");
optionAdd.innerHTML = `Add`;
optionAdd.style.cssText = `
width: 120px;
${button}
`;
optionAdd.addEventListener("mouseover", function () {
  this.style.cssText = `${buttonHover}`;
});
optionAdd.addEventListener("mouseout", function () {
  this.style.cssText = `${button}`;
});
optionAdd.addEventListener("click", addNewTodo); // ! вызов функции добавления нового элемента
optionAdd.addEventListener("click", count); // ! вызов функции счетчика

// ! Создание элементов option-bar__show-panel
const optionBarShowPanel = document.createElement("div");
optionBarShowPanel.classList.add("option-bar__show-panel");
optionBarShowPanel.style.cssText = `
   display: grid;
   grid-template-columns: 60px 150px 180px 180px 1fr;
   gap: 15px;
`;

const optionCountAll = document.createElement("div");
optionCountAll.classList.add("option__count-all");
optionCountAll.innerHTML = `All: ${countAll}`;
optionCountAll.style.cssText = `
   display: flex;
   align-items: center;
   justify-content: center;
`;

const optionCountCompleted = document.createElement("div");
optionCountCompleted.classList.add("option__count-completed");
optionCountCompleted.innerHTML = `Completed: ${countCompleted}`;
optionCountCompleted.style.cssText = `
   display: flex;
   align-items: center;
   justify-content: center;
`;

const optionShowAll = document.createElement("button");
optionShowAll.classList.add("option__show-all");
optionShowAll.innerHTML = `Show All`;
optionShowAll.style.cssText = `
width: 180px;
${button}
`;
optionShowAll.addEventListener("mouseover", function () {
  this.style.cssText = `${buttonHover}`;
});
optionShowAll.addEventListener("mouseout", function () {
  this.style.cssText = `${button}`;
});
optionShowAll.addEventListener("click", showAll); //! вызов функции вывода на экран всех задач

const optionShowCompleted = document.createElement("button");
optionShowCompleted.classList.add("option__show-completed");
optionShowCompleted.innerHTML = `Show Completed`;
optionShowCompleted.style.cssText = `
width: 180px;
${button}
`;
optionShowCompleted.addEventListener("mouseover", function () {
  this.style.cssText = `${buttonHover}`;
});
optionShowCompleted.addEventListener("mouseout", function () {
  this.style.cssText = `${button}`;
});
optionShowCompleted.addEventListener("click", showCompleted); //! вызов функции сортировки выполненных задач

const optionSearch = document.createElement("input");
optionSearch.classList.add("option__search");
optionSearch.setAttribute("type", "text");
optionSearch.setAttribute("placeholder", "Search …");
optionSearch.style.cssText = `
   color: #FFFFFF;
   border-radius: 10px;
   border: 2px solid #4D6D9A;
   background-color: #86B3D1;
   font-family: "Poppins", sans-serif;
   font-size: 18px;
   padding: 5px;
`;

// ! ToDo
const todoWrapper = document.createElement("div");
todoWrapper.classList.add("todo-wrapper");
todoWrapper.style.cssText = `
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 15px;
   padding: 0px 100px;
`;

for (let i = 0; i < todoAll.length; i++) {
  createNewTodo(todoAll[i]); //! вызов функции "добавить новую задачу"
}

// ! добавление элементов  в Document
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
