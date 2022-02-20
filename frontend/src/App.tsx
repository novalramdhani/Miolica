import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Pages
import HomePage from 'pages/Home';
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}
