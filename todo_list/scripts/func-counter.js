import { todoAll } from "./todoAll.js";
import { optionCountCompleted } from "./count-completed.js";
import { optionCountAll } from "./count-all.js";


 export const count = function () {
    const countAll = todoAll.length;
    const countCompleted = todoAll.filter(
      (item) => item.status === true
    ).length;
    optionCountCompleted.innerHTML = `Completed: ${countCompleted}`;
    optionCountAll.innerHTML = `All: ${countAll}`;
  };
