import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/pages/login/login';
import { Schedule } from './components/pages/schedule/schedule';
import { Cadastro } from './components/pages/cadastro/cadastro';
import { Register } from './components/pages/create-user/create-user';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/criar-conta" element={<Register />} />
        <Route path="/agendamento" element={<Schedule />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}