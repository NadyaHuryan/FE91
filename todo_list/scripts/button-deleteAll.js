import { styleButtonMedian, styleButton, styleButtonHover } from "./style.js";
import { count } from "./func-counter.js";
import { deleteAllTodo } from "./func-deleteAll.js";

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
optionDeleteAll.addEventListener("click", deleteAllTodo); // ! вызов функции удаления всех элементов
optionDeleteAll.addEventListener("click", count); // ! вызов функции счетчика
