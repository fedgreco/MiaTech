import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        if (!loading) setLoading(true);
        if (error) setError(null);

        try {
            const response = await fetch(url, { method: "GET"});

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
    }, [url]);

    return {
        loading, 
        error,
        data,
        update: fetchData
    }
}

export default useFetch;