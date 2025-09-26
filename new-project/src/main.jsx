import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToDoList from './components/ToDoList.jsx'
import UncontrolledInput from './components/UncontrolledInput.jsx'

createRoot(document.getElementById('root')).render(<UncontrolledInput />)
