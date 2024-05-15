import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/pages/login/login';
import { Schedule } from './components/pages/schedule/schedule';

export default function App() {
  return(
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/agendamento" element={<Schedule />} />
    </Routes>
  </Router>
);
}