import { useRef } from "react";

const UncontrolledInput = () => {
    const inputRef = useRef();

    const handleClick = () => {
        alert(inputRef.current.value);
    };

    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Input Value</button>
        </>
    )
}

export default UncontrolledInput;