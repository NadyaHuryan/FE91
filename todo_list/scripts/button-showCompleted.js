import { styleButton, styleButtonMax, styleButtonHover } from "./style.js";
import { showCompleted } from "./func-showCompleted.js";


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
  optionShowCompleted.addEventListener("click", showCompleted);
