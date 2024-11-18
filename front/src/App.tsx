// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cliente from './pages/clientes/Cliente';
import ClienteDetalhes from './pages/clientesdetalhes/ClienteDetalhes';
import Projetos from './pages/projetos/Projetos';
import { AuthProvider } from './pages/login/AuthContext';
import PrivateRoute from './pages/login/PrivateRoute';
import Login from './pages/login/Login';
import NovoCliente from './pages/novocliente/NovoCliente';
import PedidoCompra from './pages/pedidocompra/PedidoCompra';
import Principal from './pages/principal/Principal';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
        <Route path="/sunbridge-energy" element={<Principal />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/clientes" element={<PrivateRoute><Cliente /></PrivateRoute>} />
          <Route path="/clientes/:id" element={<PrivateRoute><ClienteDetalhes /></PrivateRoute>} />
          <Route path="/projetos" element={<PrivateRoute><Projetos /></PrivateRoute>} />
          <Route path="/pedidocompra/:id" element={<PrivateRoute><PedidoCompra /></PrivateRoute>} />
          <Route path="/cliente/novo" element={<PrivateRoute><NovoCliente /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
