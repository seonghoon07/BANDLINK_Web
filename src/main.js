import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '@/app/App';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(_jsx(Router, { children: _jsxs(QueryClientProvider, { client: queryClient, children: [_jsx(ScrollToTop, {}), _jsx(App, {})] }) }));
