import { styleData } from "./style.js";

const obj = {};

export const todoDate = document.createElement("div");
todoDate.classList.add("todo__date");
// todoDate.innerHTML = `${obj.data}`;
todoDate.style.cssText = `${styleData}`;
