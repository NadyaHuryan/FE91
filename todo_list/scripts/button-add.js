import { styleButton, styleButtonMedian, styleButtonHover } from "./style.js";
import { addNewTodo } from "./func-addNewTodo.js";
import { count } from "./func-counter.js";

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
optionAdd.addEventListener("click", addNewTodo); // ! вызов функции добавления нового элемента
optionAdd.addEventListener("click", count); // ! вызов функции счетчика
