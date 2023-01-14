import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import AdmitStudent from './components/AdmitStudent';
import Home from './components/Home';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<AdmitStudent />} />
      </Routes>
  );
}

export default App;
