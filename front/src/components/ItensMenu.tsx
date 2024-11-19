export interface SubmenuOption {
    name: string;
    link: string;
}

export interface Submenu {
    title: string;
    options: SubmenuOption[];
}
{/* <Route path="/clientes" element={<PrivateRoute><Cliente /></PrivateRoute>} />
<Route path="/clientes/:id" element={<PrivateRoute><ClienteDetalhes /></PrivateRoute>} />
<Route path="/clientes/novo" element={<PrivateRoute><NovoCliente /></PrivateRoute>} />
<Route path="/projetos" element={<PrivateRoute><Projetos /></PrivateRoute>} />
<Route path="/pedidocompra/:id" element={<PrivateRoute><PedidoCompra /></PrivateRoute>} />
<Route path="/empresas" element={<PrivateRoute><Empresa/></PrivateRoute>} />
<Route path="/empresas/:companyID" element={<PrivateRoute><EmpresaDetalhes/></PrivateRoute>} />
<Route path="/empresa/novo" element={<PrivateRoute><NovaEmpresa/></PrivateRoute>} /> */}

const ItensMenu: Record<string, Submenu> = {
    Comercial: {
        title: 'Comercial',
        options: [
            { name: 'Clientes', link: 'https://sum-red.vercel.app/clientes' },
            { name: 'Projetos', link: 'https://sum-red.vercel.app/projetos' },
            // { name: 'Contratos', link: 'http://localhost:5173/contratos' },
            // { name: 'Orçamentos', link: 'http://localhost:5173/orcamentos' },
            { name: 'Pedido de Compra', link: 'https://sum-red.vercel.app/pedidocompra' },
        ],
    },
    // 'Pós-Venda': {
    //     title: 'Pós-Venda',
    //     options: [
    //         { name: 'Consultas de Nota Fiscal', link: 'http://localhost:5173/pages/consultas-nota-fiscal' },
    //     ],
    // },
    // 'Assistência Técnica': {
    //     title: 'Assistência Técnica',
    //     options: [
    //         { name: 'Devoluções', link: 'http://localhost:5173/pages/devolucoes' },
    //         { name: 'Projetos', link: 'http://localhost:5173/pages/projetos-assistencia' },
    //     ],
    // },
    Avançado: {
        title: 'Avançado',
        options: [
            { name: 'Cadastro de Usuario', link: 'https://sum-red.vercel.app/usuario' },
            { name: 'Cadastro de Empresa', link: 'https://sum-red.vercel.app/empresas' },
        ],
    },
};

export default ItensMenu;
