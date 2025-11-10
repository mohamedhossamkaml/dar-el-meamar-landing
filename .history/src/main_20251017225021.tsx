import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LanguageProvider } from './context/LanguageContext';
import { BrowserRouter } from 'react-router-dom';

const BASE_PATH = "/dar-el-meamar-landing";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <LanguageProvider>
    <BrowserRouter basename={BASE_PATH}>
        <App />
    </BrowserRouter>
      </LanguageProvider>
  </StrictMode>
);
