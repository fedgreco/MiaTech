import { Route, Routes } from "react-router-dom";
import ToDoList from "./components/ToDoList";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/NavBar";

const App = () => {
    
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    )
}

export default App;