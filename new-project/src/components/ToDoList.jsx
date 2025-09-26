import useFetch from "./useFetch";

const ToDoList = () => {
    const {loading, error, data} = useFetch("https://jsonplaceholder.typicode.com/todos");

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
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </>
    )
}

export default ToDoList;