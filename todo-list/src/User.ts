import type { Todo } from "./types";

export class User {
    id: number;
    name: string;
    email?: string | undefined;
    todos: Todo[];

    constructor(id: number, name: string, email?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.todos = [];
    }

    addTodo(todo: Todo): void {
        this.todos.push(todo);
    }
}
