import { styleOptionCount } from "./style.js";


export const optionCountCompleted = document.createElement("div");
optionCountCompleted.classList.add("option__count-completed");
// optionCountCompleted.innerHTML = `Completed: ${countCompleted}`;
optionCountCompleted.style.cssText = `${styleOptionCount}`;
