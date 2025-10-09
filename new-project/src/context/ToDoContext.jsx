import { createContext, useState, useEffect } from "react";

export const ToDoContext = createContext();

const ToDoProvider = ( {children} ) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        if (!loading) setLoading(true);
        if (error) setError(null);

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos", { method: "GET" });

            if (!response.ok) {
                throw new Error("Internal server error");
            }

            setData(await response.json());
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <ToDoContext.Provider value={[loading, error, data]}>
                {children}
            </ToDoContext.Provider>
        </>
    )
}

export default ToDoProvider;