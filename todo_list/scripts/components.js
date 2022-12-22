import {
  styleButton,
  styleButtonMax,
  styleButtonMedian,
  styleButtonHover,
  styleRoot,
  styleWrapper,
  styleContainer,
  styleOptionBar,
  styleInputPanel,
  styleOptionInput,
  styleShowPanel,
  styleOptionCount,
  styleOptionSearch,
  styleTodoWrapper,
} from "./style.js";

export const root = document.getElementById("root");
root.style.cssText = `${styleRoot}`;

export const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
wrapper.style.cssText = `${styleWrapper}`;

export const container = document.createElement("div");
container.classList.add("container");
container.style.cssText = `${styleContainer}`;

export const optionBar = document.createElement("div");
optionBar.classList.add("option-bar");
optionBar.style.cssText = `${styleOptionBar}`;

export const optionBarInputPanel = document.createElement("div");
optionBarInputPanel.classList.add("option-bar__input-panel");
optionBarInputPanel.style.cssText = `${styleInputPanel}`;

export const optionDeleteAll = document.createElement("button");
optionDeleteAll.classList.add("option__delete-all");
optionDeleteAll.innerHTML = `Delete All`;
optionDeleteAll.style.cssText = `
${styleButtonMedian}
${styleButton}
`;
optionDeleteAll.addEventListener("mouseover", function () {
  this.style.cssText = `${styleButtonHover}`;
});
optionDeleteAll.addEventListener("mouseout", function () {
  this.style.cssText = `${styleButton}`;
});

export const optionDeleteLast = document.createElement("button");
optionDeleteLast.classList.add("option__delete-last");
optionDeleteLast.innerHTML = `Delete Last`;
optionDeleteLast.style.cssText = `
${styleButtonMedian}
${styleButton}
`;
optionDeleteLast.addEventListener("mouseover", function () {
  this.style.cssText = `${styleButtonHover}`;
});
optionDeleteLast.addEventListener("mouseout", function () {
  this.style.cssText = `${styleButton}`;
});

export const optionInput = document.createElement("input");
optionInput.classList.add("option__input");
optionInput.setAttribute("type", "text");
optionInput.setAttribute("placeholder", "Enter todo …");
optionInput.setAttribute("content", "todo-new");
optionInput.setAttribute("id", "todo-new");
optionInput.style.cssText = `${styleOptionInput}`;

export const optionAdd = document.createElement("button");
optionAdd.classList.add("option__add");
optionAdd.innerHTML = `Add`;
optionAdd.style.cssText = `
${styleButtonMedian}
${styleButton}
`;
optionAdd.addEventListener("mouseover", function () {
  this.style.cssText = `${styleButtonHover}`;
});
optionAdd.addEventListener("mouseout", function () {
  this.style.cssText = `${styleButton}`;
});

export const optionBarShowPanel = document.createElement("div");
optionBarShowPanel.classList.add("option-bar__show-panel");
optionBarShowPanel.style.cssText = `${styleShowPanel}`;

export const optionCountAll = document.createElement("div");
optionCountAll.classList.add("option__count-all");
optionCountAll.style.cssText = `${styleOptionCount}`;

export const optionCountCompleted = document.createElement("div");
optionCountCompleted.classList.add("option__count-completed");
optionCountCompleted.style.cssText = `${styleOptionCount}`;

export const optionShowAll = document.createElement("button");
optionShowAll.classList.add("option__show-all");
optionShowAll.innerHTML = `Show All`;
optionShowAll.style.cssText = `
${styleButtonMax}
${styleButton}
`;
optionShowAll.addEventListener("mouseover", function () {
  this.style.cssText = `${styleButtonHover}`;
});
optionShowAll.addEventListener("mouseout", function () {
  this.style.cssText = `${styleButton}`;
});

export const optionShowCompleted = document.createElement("button");
optionShowCompleted.classList.add("option__show-completed");
optionShowCompleted.innerHTML = `Show Completed`;
optionShowCompleted.style.cssText = `
${styleButtonMax}
${styleButton}
`;
optionShowCompleted.addEventListener("mouseover", function () {
  this.style.cssText = `${styleButtonHover}`;
});
optionShowCompleted.addEventListener("mouseout", function () {
  this.style.cssText = `${styleButton}`;
});

export const optionSearch = document.createElement("input");
optionSearch.classList.add("option__search");
optionSearch.setAttribute("type", "text");
optionSearch.setAttribute("placeholder", "Search …");
optionSearch.style.cssText = `${styleOptionSearch}`;

export const todoWrapper = document.createElement("div");
todoWrapper.classList.add("todo-wrapper");
todoWrapper.style.cssText = `${styleTodoWrapper}`;

export const todoCheck = document.createElement("input");
export const todoDelete = document.createElement("button");