import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import AdmitStudent from './components/AdmitStudent';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<AdmitStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
