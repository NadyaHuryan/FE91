import { createNewTodo } from "./func-CreateNewTodo.js";

export let todoAll = [
  {
    id: 1,
    content: "кот",
    data: "13.12.2022",
    status: true,
  },
  {
    id: 2,
    content: "пес",
    data: "12.12.2022",
    status: false,
  },
  {
    id: 3,
    content: "енот",
    data: "13.12.2022",
    status: false,
  },
];

for (let i = 0; i < todoAll.length; i++) {
  createNewTodo(todoAll[i]);
}
