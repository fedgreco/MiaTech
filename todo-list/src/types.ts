export interface Todo {
    id: number,
    title: string,
    completed: boolean,
    userId?: number,
};

export interface TodoWithMetadata extends Todo {
    metadata?: any
}

export interface User {
    id: number,
    name: string,
    email?: string,
    readonly todos: readonly Todo[];
};

export interface Project {
    users: User[],
    todos: Todo[]
}
