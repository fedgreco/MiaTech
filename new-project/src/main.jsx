import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import ToDoProvider from './context/ToDoContext.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ToDoProvider>
            <App />
        </ToDoProvider>
    </BrowserRouter>
)
