import { useState } from "react";
import useFetch from "./useFetch";
import useFilteredTodos from "./useFilteredTodos";

const ToDoList = () => {
    const [searchTodo, setSearchTodo] = useState("");
    const {loading, error, data} = useFetch("https://jsonplaceholder.typicode.com/todos");
    const filteredTodos = useFilteredTodos(data, searchTodo);

    if(error) {
        return (
            <p>Error: {error}</p>
        )
    }

    if(loading) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <>
            <input type="text" onChange={(event) => setSearchTodo(event.target.value)}/>
            <ul>
                {
                    filteredTodos?.map((item) => {
                        return <li>{item.title}</li>
                    })
                }
            </ul>
        </>
    )
}

export default ToDoList;