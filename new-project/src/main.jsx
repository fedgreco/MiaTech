import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import ToDoProvider from './context/ToDoContext.jsx';
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById('root')).render(
    <ReduxProvider store={store}>
        <BrowserRouter>
            <ToDoProvider>
                <App />
            </ToDoProvider>
        </BrowserRouter>
    </ReduxProvider>
)


