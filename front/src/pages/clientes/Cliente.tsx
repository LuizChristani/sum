import Menu from "@/components/Menu";
import SearchLoja from "@/components/SearchLoja";
import ItensEdit from "@/pages/clientes/ItensEdit";
import MenuCliente from "./MenuCliente";


function Cliente() {
    return (
        <div className="flex">
           <Menu/>
            <div className="flex flex-col w-full">
                <SearchLoja/>
                <div className="flex h-[92.2vh] bg-[#F5F5F5] justify-center items-center">
                    <div className="flex w-[75%] h-[100%] justify-center items-center">
                        <div className="flex w-full h-full">
                            <div className="flex flex-col w-full  bg-[#EEEEEE] mt-[2.2%] mb-[10vh]">
                                <ItensEdit/>
                                <div className="flex flex-col w-full items-center justify-center overflow-y-auto bg-[#EEEEEE] text-center">
                                    <MenuCliente/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cliente;