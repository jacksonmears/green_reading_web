import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./global.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes.tsx";

const isProduction = import.meta.env.MODE === 'production';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter basename={isProduction ? "/beaver-creek/" : "/"}>
            <AppRoutes />
        </BrowserRouter>
    </StrictMode>
);
