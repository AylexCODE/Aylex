import React from 'react';
import ReactDOM from 'react-dom/client';
import "./tailwind.css";
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

reportWebVitals(console.log);
