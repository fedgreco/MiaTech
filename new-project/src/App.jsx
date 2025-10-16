import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PublicLayout from "./Layouts/PublicLayout";
import ToDoDetails from "./components/ToDoDetails";
const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<PublicLayout />}>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="/todo/:id" element={<ToDoDetails />}/>
                </Route>
            </Routes>
        </>
    )
}

export default App;