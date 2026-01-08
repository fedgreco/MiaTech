import type { Todo } from "./types";

const todos: Todo[] = [];

const addTodo = (title: string): Todo => {
  const newTodo: Todo = {
    id: Date.now(),
    title,
    completed: false,
  };

  todos.push(newTodo);

  return newTodo;
};

addTodo("ciao");
console.log(todos);
addTodo("wella");
console.log(todos);