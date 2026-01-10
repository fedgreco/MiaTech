import type { Todo } from "./types";

export function filterTodos<T extends Todo>(
    todos: T[],
    predicate: (todo: T) => boolean
): T[] {
    return todos.filter(predicate);
};
