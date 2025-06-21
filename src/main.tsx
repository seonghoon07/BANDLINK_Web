import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '@/app/App';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

createRoot(document.getElementById('root')!).render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>
);
