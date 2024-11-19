// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cliente from './pages/clientes/Cliente';
import ClienteDetalhes from './pages/clientesdetalhes/ClienteDetalhes';
import Projetos from './pages/projetos/Projetos';
import NovoCliente from './pages/novocliente/NovoCliente';
import PedidoCompra from './pages/pedidocompra/PedidoCompra';
import Principal from './pages/principal/Principal';
import Empresa from './pages/empresa/Empresa';
import EmpresaDetalhes from './pages/empresadetalhes/EmpresaDetalhes';
import NovaEmpresa from './pages/novaempresa/NovaEmpresa';


const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
        <Route path="/sunbridge-energy" element={<Principal />} />
          <Route path="/" element={<Navigate to="/sunbridge-energy" replace />} />
          <Route path="/clientes" element={<Cliente />} />
          <Route path="/clientes/:id" element={<ClienteDetalhes />} />
          <Route path="/cliente/novo" element={<NovoCliente />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/pedidocompra/:id" element={<PedidoCompra />} />
          <Route path="/empresas" element={<Empresa/>} />
          <Route path="/empresas/:companyID" element={<EmpresaDetalhes/>} />
          <Route path="/empresa/novo" element={<NovaEmpresa/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
