import { styleButton, styleButtonMedian, styleButtonHover } from "./style.js";
import { count } from "./func-counter.js";
import { deleteLastTodo } from "./func-deleteLast.js";

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
  optionDeleteLast.addEventListener("click", deleteLastTodo); //! вызов функции удаления последнего элемента
  optionDeleteLast.addEventListener("click", count); //! вызов функции счетчика
