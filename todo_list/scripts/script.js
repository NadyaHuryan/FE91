import { todoAll } from "./todoAll.js";
import { root } from "./root.js";
import { wrapper } from "./wrapper.js";
import { container } from "./container.js";
import { optionBar } from "./option-bar.js";
import { optionBarInputPanel } from "./input-panel.js";
import { optionDeleteAll } from "./button-deleteAll.js";
import { optionDeleteLast } from "./button-deleteLast.js";
import { optionInput } from "./input-enter.js";
import { optionAdd } from "./button-add.js";
import { optionBarShowPanel } from "./show-panel.js";
import { optionCountAll } from "./count-all.js";
import { optionCountCompleted } from "./count-completed.js";
import { optionShowAll } from "./button-showAll.js";
import { optionShowCompleted } from "./button-showCompleted.js";
import { optionSearch } from "./input-search.js";
import { todoWrapper } from "./todo-wrapper.js";

// ! импорт элементов

import { createNewTodo } from "./func-CreateNewTodo.js";



// window.addEventListener("load", () => {
  // const { log } = console;


  //! Хранение данных в LocalStorage
  // const loadPage = function () {
  //   const localTodoAll = localStorage.getItem("todoAll");
  //   if (localTodoAll) {
  //     todoAll = JSON.parse(localTodoAll);
  //   }
  // };

  // loadPage();

  // const updateStorage = function () {
  //   localStorage.setItem("todoAll", JSON.stringify(todoAll));
  // };

  //! Поиск
  

  //! Счетчик
  const countAll = todoAll.length;
  const countCompleted = todoAll.filter((item) => item.status === true).length;

  // ! добавление элементов  в Document
  root.append(wrapper);
  wrapper.append(container);
  container.append(optionBar, todoWrapper);
  optionBar.append(optionBarInputPanel, optionBarShowPanel);
  optionBarInputPanel.append(
    optionDeleteAll,
    optionDeleteLast,
    optionInput,
    optionAdd
  );

  optionBarShowPanel.append(
    optionCountAll,
    optionCountCompleted,
    optionShowAll,
    optionShowCompleted,
    optionSearch
  );
// });
