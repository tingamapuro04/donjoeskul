import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import AdmitStudent from './components/AdmitStudent';
import Home from './components/Home';
import Header from './components/Header';
import NoPath from './components/NoPath';
import Students from './components/Students';
import './components/style.scss'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<AdmitStudent />} />
        <Route path="/students" element={<Students />} />
        <Route path="*" element={<NoPath />} />
      </Routes>
    </div>
  );
}

export default App;
