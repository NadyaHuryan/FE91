import {
  styleButton,
  styleButtonHover,
  styleCheckUpgraded,
  styleContent,
  styleDelete,
  styleData,
} from "./style.js";

import { todoWrapper } from "./todo-wrapper.js";
import { todoItem } from "./todo-item.js";
import { todoCheckLabel, todoCheck, todoCheckUpgraded } from "./todoCheck.js";
import { todoContent } from "./todo-content.js";
import { todoDelete } from "./button-todoDelete.js";
import { todoDate } from "./todoDate.js";

export const createNewTodo = function (obj) {
  todoItem.setAttribute("data-key", obj.id);

  if (obj.status) {
  todoContent.innerHTML = `${obj.content}`;
  todoContent.style.textDecoration = `line-through`;
  todoCheckUpgraded.style.cssText = `${styleCheckUpgraded}`;
  todoItem.style.background = `#4D6D9A`;
} else {
  todoContent.innerHTML = `${obj.content}`;
  todoCheckUpgraded.style.cssText = `display: none;`;
  todoItem.style.background = `none`;
  todoContent.style.textDecoration = `none`;
}

  todoCheck.setAttribute("id", obj.id);
  todoCheckLabel.setAttribute("for", obj.id);
  todoDate.innerHTML = `${obj.data}`;

  todoCheckLabel.append(todoCheck, todoCheckUpgraded);
  todoItem.append(todoCheckLabel, todoContent, todoDelete, todoDate);
  todoWrapper.prepend(todoItem);
};
