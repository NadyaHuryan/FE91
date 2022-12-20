import { loadPage, appElementsDock } from "./functional.js";
import {
  optionDeleteAll,
  optionDeleteLast,
  optionInput,
  optionAdd,
  optionShowAll,
  optionShowCompleted,
  optionSearch,
} from "./components.js";

import {
  count,
  deleteAllTodo,
  addNewTodo,
  showAll,
  showCompleted,
  search,
  deleteLastTodo,
  start,
} from "./functional.js";

window.addEventListener("load", () => {
  const app = function () {
    loadPage();

    start();

    appElementsDock();

    optionDeleteAll.addEventListener("click", function () {
      deleteAllTodo();
      count();
    });

    optionDeleteLast.addEventListener("click", function () {
      deleteLastTodo();
      count();
    });

    optionInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        addNewTodo();
        count();
      }
    });

    optionAdd.addEventListener("click", function () {
      addNewTodo();
      count();
    });

    optionShowAll.addEventListener("click", showAll);

    optionShowCompleted.addEventListener("click", showCompleted);

    optionSearch.addEventListener("input", search);
  };

  app();
});
