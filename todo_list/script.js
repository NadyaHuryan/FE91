"use strict";

// ! elements style for all
let button = `
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

let buttonHover = `
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

   let root = document.getElementById("root");
   root.style.cssText = `
   padding: 50px 50px;
   color: #747474;
   font-family: "Poppins", sans-serif;
   font-size: 18px;
`;

let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
wrapper.style.cssText = `
   background-color: #5F6366;
   margin: 0 auto;
   width: 1024px;
   border-radius: 20px;
   padding: 25px 50px;
`;

// //! container

let container = document.createElement("div");
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

//! option-bar
let optionBar = document.createElement("div");
optionBar.classList.add("option-bar");
optionBar.style.cssText = `
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 15px;
`;

// ! option-bar__input-panel
let optionBarInputPanel = document.createElement("div");
optionBarInputPanel.classList.add("option-bar__input-panel");
optionBarInputPanel.style.cssText = `
   display: grid;
   grid-template-columns: 120px 120px 1fr 120px;
   gap: 15px;
`;

let optionDeleteAll = document.createElement("button");
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

let optionDeleteLast = document.createElement("button");
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

let optionInput = document.createElement("input");
optionInput.classList.add("option__input");
optionInput.setAttribute("type", "text");
optionInput.setAttribute("placeholder", "Enter todo …");
optionInput.style.cssText = `
   color: #FFFFFF;
   border-radius: 10px;
   border: 2px solid #4D6D9A;
   background-color: #86B3D1;
   font-family: "Poppins", sans-serif;
   font-size: 18px;
`;

let optionAdd = document.createElement("button");
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

// ! option-bar__show-panel
let optionBarShowPanel = document.createElement("div");
optionBarShowPanel.classList.add("option-bar__show-panel");
optionBarShowPanel.style.cssText = `
   display: grid;
   grid-template-columns: 60px 150px 180px 180px 1fr;
   gap: 15px;
`;

let optionCountAll = document.createElement("div");
optionCountAll.classList.add("option__count-all");
optionCountAll.innerHTML = `All: 2`;
optionCountAll.style.cssText = `
   display: flex;
   align-items: center;
   justify-content: center;
`;

let optionCountCompleted = document.createElement("div");
optionCountCompleted.classList.add("option__count-completed");
optionCountCompleted.innerHTML = `Completed: 1`;
optionCountCompleted.style.cssText = `
   display: flex;
   align-items: center;
   justify-content: center;
`;

let optionShowAll = document.createElement("button");
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

let optionShowCompleted = document.createElement("button");
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

let optionSearch = document.createElement("input");
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
`;

// ! ToDo
let todoWrapper = document.createElement("div");
todoWrapper.classList.add("todo-wrapper");
todoWrapper.style.cssText = `
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 15px;
   padding: 0px 100px;
`;

let arr = ["Text todo 1", "Text todo 2"];

for (let i = 0; i < arr.length; i++) {
  let todoItem = document.createElement("div");
  todoItem.classList.add("todo__item");
  todoItem.style.cssText = `
   // width: 100%;
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

  let todoCheckLabel = document.createElement("label");
  todoCheckLabel.classList.add("todo__check-label");
  todoCheckLabel.setAttribute("for", "todo");
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

  let todoCheck = document.createElement("input");
  todoCheck.classList.add("todo__check");
  todoCheck.setAttribute("type", "checkbox");
  todoCheck.setAttribute("id", "todo");
  todoCheck.style.cssText = `
   opacity: 0;
   width: 100%;
   height: 100%;
    `;

    let todoCheckUpgraded = document.createElement("span");
  todoCheckUpgraded.classList.add("todo__check_upgraded");
  todoCheckUpgraded.setAttribute("for", "todo");
  todoCheckUpgraded.style.cssText = `
  
  `;

  let todoContent = document.createElement("div");
  todoContent.classList.add("todo__content");
  todoContent.innerHTML = `${arr[i]}`;
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

  let todoDelete = document.createElement("button");
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

  let todoDate = document.createElement("div");
  todoDate.classList.add("todo__date");
  todoDate.style.cssText = `
   font-family: "Poppins", sans-serif;
   font-size: 18px;
   width: 100%;
   height: 100%;
   color: #FFFFFF;
   border-radius: 10px;
   border: 2px solid #4D6D9A;
   background-color: #86B3D1;
  `;

  todoCheckLabel.append(todoCheck, todoCheckUpgraded);
  todoItem.append(todoCheckLabel, todoContent, todoDelete, todoDate);
  todoWrapper.append(todoItem);
}

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
