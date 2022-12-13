import { styleOptionCount } from "./style.js";

export const optionCountAll = document.createElement("div");
optionCountAll.classList.add("option__count-all");
// optionCountAll.innerHTML = `All: ${countAll}`;
optionCountAll.style.cssText = `${styleOptionCount}`;
