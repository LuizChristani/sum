import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';

const Login: React.FC = () => {
  const [usuarioID, setusuarioID] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(usuarioID, password);
    if (success) {
      navigate('/clientes');
    } else {
      setError('Usuário ou senha incorreta!');
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-between bg-[#5599BE]">
      <div className="flex flex-col justify-center items-center flex-grow p-4">
        <div className="flex bg-[#0064F3] w-[30
        vw] h-[50vh] items-center justify-center p-5 rounded-lg">
          <form className="flex flex-col w-full space-y-4 p-[10vh]" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Usuário"
              className="p-2 w-full rounded-md bg-white text-black"
              value={usuarioID}
              onChange={(e) => setusuarioID(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              className="p-2 w-full rounded-md bg-white text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
            {error && <div className="text-red-500 mt-2 text-center">{error}</div>}
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;