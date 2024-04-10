import { useState } from 'react';


export function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleLogin(username, password);
      };
    
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

      useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
        }
      }, []);

      return (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Entrar</button>
          </form>
        </div>
      );
}