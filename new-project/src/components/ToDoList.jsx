import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";

import useFetch from "./useFetch";
import useFilteredTodos from "./useFilteredTodos";
import {
  setTodos,
  setLoading,
  setError,
  toggleTodo,
} from "../store/feature/todoSlice";

const ToDoList = () => {
  const dispatch = useDispatch();

  // Redux state
  const { todos, loading, error } = useSelector((state) => state.todo);

  // Local state
  const [searchTodo, setSearchTodo] = useState("");
  const inputRef = useRef();

  // URL search params
  const [searchParams, setSearchParams] = useSearchParams();

  // Fetch tramite hook custom
  const {
    data,
    loading: fetchLoading,
    error: fetchError,
  } = useFetch("https://jsonplaceholder.typicode.com/todos");

  // Sincronizzazione FETCH → REDUX
  useEffect(() => {
    dispatch(setLoading(fetchLoading));
  }, [fetchLoading, dispatch]);

  useEffect(() => {
    if (fetchError) {
      dispatch(setError(fetchError));
    }
  }, [fetchError, dispatch]);

  useEffect(() => {
    if (data) {
      dispatch(setTodos(data));
    }
  }, [data, dispatch]);

  // Filtro
  const filteredTodos = useFilteredTodos(todos, searchTodo);

  const handleSearch = (event) => {
    setSearchTodo(event.target.value);
    setSearchParams(event.target.value);
  };

  // Focus automatico input
  useEffect(() => {
    if (!loading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [loading]);

  // Stati UI
  if (error) {
    return <p>Error: {error}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <input type="text" onChange={handleSearch} ref={inputRef} />

      <ul>
        {filteredTodos?.map((item) => (
          <li key={item.id}>
            <Link to={`/todo/${item.id}`}>{item.title}</Link>

            <button
              onClick={() => dispatch(toggleTodo(item.id))}
              style={{ marginLeft: "10px" }}
            >
              {item.completed ? "❌" : "✅"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
