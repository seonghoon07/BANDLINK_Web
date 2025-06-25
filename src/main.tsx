import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '@/app/App';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <App />
    </QueryClientProvider>
  </Router>
);
