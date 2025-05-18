// client/src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import Register from './components/Register.jsx';
import Dashboard from './components/Dashboard.jsx';
import GameDetails from './components/GameDetails.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard"element={<Dashboard />} />
      <Route path="/game/:id" element={<GameDetails />} />
    </Routes>
  );
}
