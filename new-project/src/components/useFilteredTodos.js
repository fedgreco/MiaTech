import { useEffect, useState } from "react";

const useFilteredTodos = (data, search) => {
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = () => {
        const filteredTodos = data?.filter((item) => {
            return item.title.includes(search);
        });
        setFilteredData(filteredTodos);
    }

    useEffect(() => {
        handleFilter();
    }, [data, search]);

    return filteredData;
}

export default useFilteredTodos;