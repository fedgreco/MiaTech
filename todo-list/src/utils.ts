import type { Todo, PartialTodo } from "./types";

export function filterTodos<T extends Todo>(
    todos: T[],
    predicate: (todo: T) => boolean
): T[] {
    return todos.filter(predicate);
};

export function updatePartialTodo(
    todos: Todo[],
    todoId: number,
    updates: PartialTodo
): Todo | undefined {
    const todo = todos.find(t => t.id === todoId);

    if (!todo) {
        return undefined;
    }

    Object.assign(todo, updates);
    return todo;
}
