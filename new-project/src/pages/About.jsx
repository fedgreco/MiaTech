import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/");
    }


    return (
        <>
            <h1>About</h1>
            <button onClick={handleGoHome}>Go Home</button>
        </>
    )
}

export default About;