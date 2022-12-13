import { styleOptionSearch } from "./style.js";
import { search } from "./func-search.js";

export const optionSearch = document.createElement("input");
  optionSearch.classList.add("option__search");
  optionSearch.setAttribute("type", "text");
  optionSearch.setAttribute("placeholder", "Search …");
optionSearch.style.cssText = `${styleOptionSearch}`;
  optionSearch.addEventListener("input", search); // ! вызов функцию поиска