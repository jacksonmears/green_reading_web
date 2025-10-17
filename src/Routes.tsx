import { Routes, Route } from "react-router-dom";
import Index from "./Index.tsx";
import Rates from "./(tabs)/Rates";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="*" element={<div>Page not found</div>} />

        </Routes>
    );
}

export default AppRoutes;
