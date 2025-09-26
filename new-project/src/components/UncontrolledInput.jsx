import { useRef } from "react";

const UncontrolledInput = () => {
    const inputRef = useRef();

    return (
        <>
            <input type="text" ref={inputRef} />
        </>
    )
}

export default UncontrolledInput;