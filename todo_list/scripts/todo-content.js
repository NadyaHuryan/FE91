import { styleCheckUpgraded, styleContent } from "./style.js";
import { todoCheckUpgraded } from "./todoCheck.js";
import { todoItem } from "./todo-item.js";


const obj = {};

export const todoContent = document.createElement("div");
todoContent.classList.add("todo__content");
todoContent.style.cssText = `${styleContent}`;
// if (obj.status) {
//   todoContent.innerHTML = `${obj.content}`;
//   todoContent.style.textDecoration = `line-through`;
//   todoCheckUpgraded.style.cssText = `${styleCheckUpgraded}`;
//   todoItem.style.background = `#4D6D9A`;
// } else {
//   todoContent.innerHTML = `${obj.content}`;
//   todoCheckUpgraded.style.cssText = `display: none;`;
//   todoItem.style.background = `none`;
//   todoContent.style.textDecoration = `none`;
// }