import { useParams } from "react-router-dom";

const ToDoDetails = () => {

    const params = useParams();

    return (
        <>
            <pre>{JSON.stringify(params, null, 2)}</pre>
        </>
    )
}

export default ToDoDetails;