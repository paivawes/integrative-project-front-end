import React, { useState, useEffect } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import api from './api';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogin = async (username, password) => {
    try {
      const response = await api.post('/login', { username, password });
      const { token } = response.data;
      setToken(token);
      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Erro ao fazer login:', error.response.data);
    }
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  return (
    <div>
      {!token ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <Dashboard token={token} handleLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
