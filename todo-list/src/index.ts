import type { Todo, TodoWithMetadata, User, Project } from "./types";

const todos: Todo[] = [];

let nextId = 1;

const addTodo = (title: string, metadata?: string | object): TodoWithMetadata => {
    const newTodo: TodoWithMetadata = {
        id: nextId++,
        title,
        completed: false,
        metadata
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

const updateTodo: Partial<TodoWithMetadata> = {
    title: ""
};

const getTodoSummary = (todo: Todo): [string, boolean] => {
    return [todo.title, todo.completed];
};

const createProject = (name: string, users: User[], todos: Todo[]): Project => {
    return {
        users,
        todos
    };
};

const user1: User = {
    id: 1,
    name: "Dario",
    todos: [],
};

const user2: User = {
    id: 2,
    name: "Carlo",
    todos: [],
};

const todo1 = addTodo("Andare a fare la spesa");
const todo2 = addTodo("Raccogliere il bucato");

const project = createProject(
    "Corso TypeScript",
    [user1, user2],
    [todo1, todo2]
);

console.log(project);


// const t1 = addTodo("ciao");
// const t2 = addTodo("wella");
// const t3 = addTodo("hola");

// assignTodoToUser(t1.id, 1);
// assignTodoToUser(t2.id, 1);
// assignTodoToUser(t3.id, 2);

// console.log(getUserTodos(1));
// console.log(getUserTodos(2)); 

// addTodo("Fare la spesa", {
//     priority: "alta",
//     createdAt: new Date(),
// });

// console.log(todos)
///////////////////////////////////////////
// const error = (message: string): never => {
//     throw new Error(message);
// };

// const parseInput = (input: unknown): string => {
//     if (typeof input === "string") {
//         return input;
//     }

//     if (typeof input === "number") {
//         return input.toString();
//     }

//     return error("Tipo di input non supportato");
// };

//console.log(parseInput("ciao")

// const todo1 = addTodo("Studiare TypeScript");

// const summary = getTodoSummary(todo1);
// console.log(summary); 