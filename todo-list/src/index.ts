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

const assignTodoToUser = (todoId: number, userId: number): Todo | undefined => {
    const todo = todos.find((t) => t.id === todoId);

    if (!todo) {
        return undefined;
    }

    todo.userId = userId;
    return todo;
};


const todoOne = addTodo("ciao");
const todoTwo = addTodo("wella");

assignTodoToUser(todoOne.id, 42);

console.log(todos);
