import { useContext, useEffect, useRef, useState } from "react";
import useFetch from "./useFetch";
import useFilteredTodos from "./useFilteredTodos";
import { ToDoContext } from "../context/ToDoContext";
import { Link, useParams, useSearchParams } from "react-router-dom";

const ToDoList = () => {
    const [searchTodo, setSearchTodo] = useState("");
    const inputRef = useRef();
    // const { loading, error, data } = useFetch("https://jsonplaceholder.typicode.com/todos");
    const [loading, error, data] = useContext(ToDoContext);
    const filteredTodos = useFilteredTodos(data, searchTodo);
    const [searchParams, setSearchParams] = useSearchParams();
    //const handleSearchChange = useCallback((event) => {
    //  setSearchTodo(event.target.value);
    // }, [setSearchTodo]);
    const params = useParams();

    const handleSearch = (event) => {
        setSearchTodo(event.target.value);
        setSearchParams(event.target.value);
    }

    useEffect(() => {
        if (!loading && inputRef.current) { //per poter usare inputRef e far si che il focus sulla barra di ricerca avvenga, loading deve diventare false, ovvero il caricamento dei dati deve terminare e allora input è nel DOM e inputRef.current esiste
            inputRef.current.focus();
        }
    }, [loading]);


    if (error) {
        return (
            <p>Error: {error}</p>
        )
    }

    if (loading) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <>
            <input type="text" onChange={handleSearch} ref={inputRef} />
            <ul>
                {
                    filteredTodos?.map((item) => {
                        return <li key={item.id}><Link to={`/todo/${item.id}`}>{item.title}</Link></li>
                    })
                }
            </ul>
        </>
    )
}

export default ToDoList;