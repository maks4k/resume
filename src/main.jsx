import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App/App.jsx'  // ← важно добавить расширение

createRoot(document.getElementById('root')).render(
    <App/>
)