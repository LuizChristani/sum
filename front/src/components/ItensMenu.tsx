export interface SubmenuOption {
    name: string;
    link: string;
}

export interface Submenu {
    title: string;
    options: SubmenuOption[];
}
const ItensMenu: Record<string, Submenu> = {
    Comercial: {
        title: 'Comercial',
        options: [
            { name: 'Clientes', link: 'http://localhost:5173/clientes' },
            { name: 'Projetos', link: 'http://localhost:5173/projetos' },
            { name: 'Contratos', link: 'http://localhost:5173/contratos' },
            { name: 'Orçamentos', link: 'http://localhost:5173/orcamentos' },
            { name: 'Pedido de Venda', link: 'http://localhost:5173/pedido-de-venda' },
        ],
    },
    'Pós-Venda': {
        title: 'Pós-Venda',
        options: [
            { name: 'Consultas de Nota Fiscal', link: 'http://localhost:5173/pages/consultas-nota-fiscal' },
        ],
    },
    'Assistência Técnica': {
        title: 'Assistência Técnica',
        options: [
            { name: 'Devoluções', link: 'http://localhost:5173/pages/devolucoes' },
            { name: 'Projetos', link: 'http://localhost:5173/pages/projetos-assistencia' },
        ],
    },
    Avançado: {
        title: 'Avançado',
        options: [
            { name: 'Cadastro de Usuario', link: 'http://localhost:5173/pages/cadastro-usuario' },
            { name: 'Cadastro de Empresa', link: 'http://localhost:5173/pages/cadastro-empresa' },
        ],
    },
};

export default ItensMenu;