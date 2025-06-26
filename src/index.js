import React from 'react';
import ReactDOM from 'react-dom/client';
import {} from './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

reportWebVitals(console.log);
