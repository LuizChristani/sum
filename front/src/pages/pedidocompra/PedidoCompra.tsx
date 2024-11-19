import SearchLoja from '@/components/SearchLoja';
import Menu from '@/components/Menu';
import ItensPedidoCompra from './ItensPedidoCompra';
import { CirclePlus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface PedidoCompraProps {
    clienteID: number;
    nome: string;
    cedula: string;
    email: string;
    telefone: string;
    ativo: boolean;
    data_nascimento: string; // Data de nascimento do cliente
    generoCliente: string; // Gênero do cliente
    divida: string; // Informação sobre dívidas
    codigo_postal: string; // Código postal
    cidade: string; // Cidade
    bairro: string; // Bairro
    rua: string; // Rua
    distrito: string; // Distrito
    provincia: string; // Província
    complemento: string; // Complemento do endereço
    canton: string; // Canton
    descricao: string; // Descrição adicional
}

function PedidoCompra() {
    const [data, setData] = useState<PedidoCompraProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams(); // Get the ID from the URL

    // Function to handle creating a new Pedido Compra
    const createPedidoCompra = async (pedidoData: PedidoCompraProps) => {
        try {
            const response = await fetch(`http://localhost:8000/pedidocompra/${id}/novopedido`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pedidoData), // Convert the data to JSON
            });
            console.log("Status da resposta:", response.status);
            console.log("Resposta completa:", await response.json());
            if (!response.ok) {
                throw new Error("Erro ao criar novo pedido");
            }

            const result = await response.json();
            console.log("Novo pedido criado:", result);
            // Optionally update the state with the new order
            setData(prevData => [...prevData, result]);

        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("Ocorreu um erro desconhecido");
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            if (!id) {
                setError("ID do cliente não fornecido.");
                setLoading(false);
                return;
            }

            try {
                console.log("Iniciando requisição para a API");
                
                // Fetch cliente data
                const clienteResponse = await fetch(`http://localhost:8000/cliente/${id}`);
                if (!clienteResponse.ok) {
                    throw new Error("Erro ao buscar dados do cliente");
                }
                const clienteData: PedidoCompraProps = await clienteResponse.json();
                setData([clienteData]);

            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("Ocorreu um erro desconhecido");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const handleCreatePedido = () => {
        const newPedido: PedidoCompraProps = {
            clienteID: Number(id),
            nome: '',
            cedula: '',
            email: '',
            telefone: '',
            ativo: false,
            data_nascimento: '',
            generoCliente: '',
            divida: '',
            codigo_postal: '',
            cidade: '',
            bairro: '',
            rua: '',
            distrito: '',
            provincia: '',
            complemento: '',
            canton: '',
            descricao: ''
        };
        createPedidoCompra(newPedido);
    };

    return (
        <div className="flex overflow-hidden">
            <Menu />
            <div className="flex flex-col w-full overflow-hidden">
                <SearchLoja />
                <div className="flex h-[92.2vh] bg-[#F5F5F5] justify-center items-center">
                    <div className="flex w-full h-full">
                        <div className="flex flex-col w-full h-full bg-[#EEEEEE] mt-[2.2%] mb-[10%] overflow-hidden">
                            <ItensPedidoCompra />
                            <div className="flex flex-col h-full w-[82%] overflow-y-auto ml-48">
                                <div className='bg-[#3b1616ee] h-[5vh] flex justify-between items-center p-10'>
                                    <div>
                                        {data.length > 0 ? (
                                            data.map((pedido) => (
                                                <div key={pedido.clienteID}>
                                                    <p>{pedido.nome}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <p>Dados não disponíveis.</p>
                                        )}
                                    </div>
                                    <div className='bg-black rounded-full' onClick={handleCreatePedido}>
                                        <CirclePlus className='text-gray-100 m-2' />
                                    </div>
                                </div>
                                {loading && (
                                    <div className="flex items-center justify-center h-full">
                                        <div className="animate-spin rounded-full h-8 w-8 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent"></div>
                                        <div className="text-blue-500 ml-2">Carregando...</div>
                                    </div>
                                )}
                                {error && (
                                    <div className="flex justify-center h-full w-full text-black">
                                        <div className="w-[30vh]  h-[13vh] text-center mt-10 text-lg bg-[#f70000ee] overflow-hidden">
                                            {`Por favor, recarregue a página. Se o problema persistir, entre em contato com o suporte técnico para assistência.`}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PedidoCompra;
