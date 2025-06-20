import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from "@/app/App";

createRoot(document.getElementById('root')!).render(
    <Router>
        <App />
    </Router>
)
