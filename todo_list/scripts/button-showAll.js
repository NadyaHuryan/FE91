import { styleButton, styleButtonMax, styleButtonHover } from "./style.js";
import { showAll } from "./func-showAll.js";

export const optionShowAll = document.createElement("button");
  optionShowAll.classList.add("option__show-all");
  optionShowAll.innerHTML = `Show All`;
  optionShowAll.style.cssText = `
${styleButtonMax}
${styleButton}
`;
  optionShowAll.addEventListener("mouseover", function () {
    this.style.cssText = `${styleButtonHover}`;
  });
  optionShowAll.addEventListener("mouseout", function () {
    this.style.cssText = `${styleButton}`;
  });
  optionShowAll.addEventListener("click", showAll); //! вызов функции вывода на экран всех задач
