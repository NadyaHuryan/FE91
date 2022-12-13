import { styleDelete, styleButton, styleButtonHover } from "./style.js";
import { count } from "./func-counter.js";
import { deleteTodo } from "./func-deleteTodo.js";

export const todoDelete = document.createElement("button");
todoDelete.classList.add("todo__delete");
todoDelete.innerHTML = `X`;
todoDelete.style.cssText = `
     ${styleDelete}
     ${styleButton};
    `;
todoDelete.addEventListener("mouseover", function () {
  this.style.cssText = `
     ${styleDelete}
     ${styleButtonHover}
    `;
});

todoDelete.addEventListener("mouseout", function () {
  this.style.cssText = `
     ${styleDelete}
     ${styleButton}
    `;
});


  todoDelete.addEventListener("click", deleteTodo); //! вызов функции удаления текущего элемента
  todoDelete.addEventListener("click", count); //! вызов функции счетчика
