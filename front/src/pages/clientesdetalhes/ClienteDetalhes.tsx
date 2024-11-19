import SearchLoja from '@/components/SearchLoja';
import Menu from '@/components/Menu';
import ItensCliente from './ItensCliente';
import MenuInformacoes from './MenuInformacoes';

function ClienteDetalhes() {

    return (
        <div className="flex overflow-hidden">
            <Menu />
            <div className="flex flex-col w-full overflow-hidden">
                <SearchLoja />
                <div className="flex h-[92.2vh] bg-[#F5F5F5] justify-center items-center">
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col w-[81vw] h-[85vh] bg-[#855b5b] mt-[1vh] overflow-hidden">
                                <ItensCliente/>
                            <div className="flex flex-col justify-center overflow-y-auto">
                                <MenuInformacoes />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClienteDetalhes;
