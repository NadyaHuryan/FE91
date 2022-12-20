
import { todos } from "./render.js";

export let updateStorage = function () {
  localStorage.setItem("todos", JSON.stringify(todos));
}