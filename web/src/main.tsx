import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Token global dulu, supaya CSS komponen bisa menimpanya.
import './styles/index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
