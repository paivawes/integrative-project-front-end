import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/pages/login/login';
import { Schedule } from './components/pages/schedule/schedule';
import { Cadastro } from './components/pages/cadastro/cadastro';
import { Register } from './components/pages/create-user/create-user';

export default function App() {
  useEffect(() => {
    const loadVLibras = () => {
      if (!document.querySelector('script[src="https://vlibras.gov.br/app/vlibras-plugin.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
        script.async = true;
        script.onload = () => {
          new window.VLibras.Widget('https://vlibras.gov.br/app');
        };
        document.body.appendChild(script);
      }
    };
  
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadVLibras);
    } else {
      loadVLibras();
    }
  
    return () => {
      document.removeEventListener('DOMContentLoaded', loadVLibras);
    };
  }, []);

  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/criar-conta" element={<Register />} />
        <Route path="/agendamento" element={<Schedule />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
    </div>
  );
}