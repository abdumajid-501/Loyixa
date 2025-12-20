import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./translation/i18n"
// Supports weights 100-900
import '@fontsource-variable/outfit';
import MainContext from './context/MainContext.jsx';

createRoot(document.getElementById('root')).render(
    <MainContext>
        <App />
    </MainContext>
)
