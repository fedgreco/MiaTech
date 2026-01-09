import type { Todo } from "./types";

const todos: Todo[] = [];

let nextId = 1;

const addTodo = (title: string): Todo => {
    const newTodo: Todo = {
        id: nextId++,
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

const getUserTodos = (userId: number): Todo[] => {
    return todos.filter((t) => t.userId === userId);
};

// const t1 = addTodo("ciao");
// const t2 = addTodo("wella");
// const t3 = addTodo("hola");

// assignTodoToUser(t1.id, 1);
// assignTodoToUser(t2.id, 1);
// assignTodoToUser(t3.id, 2);

// console.log(getUserTodos(1));
// console.log(getUserTodos(2)); 

const error = (message: string): never => {
    throw new Error(message);
};
