import { styleOptionInput } from "./style.js";
import { count } from "./func-counter.js";
import { addNewTodo } from "./func-addNewTodo.js";


export const optionInput = document.createElement("input");
optionInput.classList.add("option__input");
optionInput.setAttribute("type", "text");
optionInput.setAttribute("placeholder", "Enter todo …");
optionInput.setAttribute("content", "todo-new");
optionInput.setAttribute("id", "todo-new");
optionInput.style.cssText = `${styleOptionInput}`;

optionInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addNewTodo();
    count(); // ! вызов функции добавления нового элемента и счетчика
  }
});