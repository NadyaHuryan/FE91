"use strict";

//! container
let container = document.createElement("div");
container.classList.add("container");
container.style.cssText = `
display: flex;
   flex-direction: column;
   gap: 30px;
   padding: 15px;
   width: 1140px;
   margin: 0 auto;
   padding: 30px;
   background-color: aqua;
   border-radius: 20px;
   border: 2px solid #000;
`;

//! input-panel
let inputPanel = document.createElement("div");
inputPanel.classList.add("input-panel");
inputPanel.style.cssText = `
   width: 100%;
   display: flex;
   gap: 30px;
`;

let inputPanelDelete = document.createElement("button");
inputPanelDelete.classList.add("input-panel__delete");
inputPanelDelete.innerHTML = `
Delete All
`;
inputPanelDelete.style.cssText = `
   color: #717784;
   font-family: "Poppins", sans-serif;
   font-size: 28px;
   display: flex;
   width: 260px;
   height: 60px;
   border-radius: 10px;
   justify-content: center;
   align-items: center;
   transition: 1.2s ease-in-out;
   cursor: pointer;
   background-color: rgba(217, 217, 217, 1);
   box-shadow: 0 10px 5px -5px rgba(30, 129, 204, 0.2);
`;

let inputPanelContent = document.createElement("input");
inputPanelContent.classList.add("input-panel__content");
inputPanelContent.setAttribute("type", "text");
inputPanelContent.style.cssText = `
font-family: 'Rubik', sans-serif;
   font-size: 18px;
   color: #9D9D9D;
   width: 100%;
   height: 60px;
   border: 1px solid #9595C9;
   border-radius: 5px;
   padding: 10px;
`;

let inputPanelAdd = document.createElement("div");
inputPanelAdd.classList.add("input-panel__add");
inputPanelAdd.innerHTML = `Add`;
inputPanelAdd.style.cssText = `
   color: #717784;
   font-family: "Poppins", sans-serif;
   font-size: 28px;
   display: flex;
   width: 260px;
   height: 60px;
   border-radius: 10px;
   justify-content: center;
   align-items: center;
   transition: 1.2s ease-in-out;
   cursor: pointer;
   background-color: rgba(217, 217, 217, 1);
   box-shadow: 0 10px 5px -5px rgba(30, 129, 204, 0.2);
`;

// ! content-bloc
let contentBloc = document.createElement("div");
contentBloc.classList.add("content-bloc");
contentBloc.style.cssText = `
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;
// ! content-element

let arr = ["Text todo", "Text todo", "Text todo"];

for (let i = 0; i < arr.length; i++) {
  let contentItem = document.createElement("div");
  contentItem.classList.add("content__item");
  contentItem.style.cssText = `
   width: 100%;
   padding: 60px 0px;
   display: grid;
   grid-template-columns: 60px auto 100px;
   grid-template-rows: 1fr 1fr;
   gap: 15px;
   align-items: center;
   position: relative;
    `;

  let contentCheck = document.createElement("input");
  contentCheck.classList.add("content__check");
  contentCheck.setAttribute("type", "checkbox");
  contentCheck.style.cssText = `
   grid-row-start: 1;
   grid-row-end: span 2;
  `;

  let contentTodo = document.createElement("div");
  contentTodo.classList.add("content__todo");
  contentTodo.innerHTML = `${arr[i]}`;
  contentTodo.style.cssText = `
     font-family: 'Rubik', sans-serif;
   font-size: 18px;
   color: #9D9D9D;
   width: 100%;
   height: 60px;
   border: 1px solid #9595C9;
   border-radius: 5px;
   padding: 10px;
   grid-row-start: 1;
   grid-row-end: span 2;

  `;

  let contentDelete = document.createElement("button");
  contentDelete.classList.add("content__delete");
contentDelete.innerHTML = `X`;
contentDelete.style.cssText = `
   width: 60px;
   height: 40px;
      color: #717784;
   font-family: "Poppins", sans-serif;
   font-size: 28px;
   display: flex;
   border-radius: 10px;
   justify-content: center;
   align-items: center;
   transition: 1.2s ease-in-out;
   cursor: pointer;
   background-color: rgba(217, 217, 217, 1);
   box-shadow: 0 10px 5px -5px rgba(30, 129, 204, 0.2);
`;

  contentItem.append(contentCheck, contentTodo, contentDelete);
  contentBloc.append(contentItem);
}


root.append(container);
container.append(inputPanel, contentBloc);
inputPanel.append(inputPanelDelete, inputPanelContent, inputPanelAdd);
contentBloc.append();

