// client/src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
