import { Link } from "react-router-dom";

const Principal = () => {

    return (
        <div className="font-sans h-screen flex flex-col">
            <header className="bg-[#3588fc] text-white py-8 text-center fixed top-0 left-0 right-0 z-10">
                <div className="container mx-auto">
                    <h1 className="text-4xl">Sunbridge Energy</h1>
                    <p className="text-xl mt-2">Iluminando o futuro com energia limpa.</p>
                </div>
                <Link to="/clientes"><div className="pt-3 pb-3 fixed top-9 right-0 mr-[3vw] bg-[#0064F3] pl-10 pr-10 rounded-[100px] hover:bg-blue-600">Login</div></Link>
            </header>

            <main className="overflow-auto mt-[120px] flex-1">
                <section className="bg-gray-50 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl mb-6">Quem somos</h2>
                        <p className="text-lg">
                            A <strong>Sunbridge Energy</strong> é uma empresa dedicada à transformação da matriz energética, oferecendo
                            soluções completas em energia solar fotovoltaica para residências, empresas e indústrias. Nossa missão é tornar a
                            energia limpa e sustentável acessível para todos, reduzindo custos e promovendo um futuro mais verde.
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl mb-6">Por que escolher a Sunbridge Energy?</h2>
                        <ul className="list-none space-y-4">
                            <li className="text-lg">
                                <strong>Tecnologia de ponta:</strong> Trabalhamos com os melhores equipamentos e painéis solares de alta
                                eficiência no mercado.
                            </li>
                            <li className="text-lg">
                                <strong>Equipe especializada:</strong> Profissionais capacitados para projetar, instalar e manter sistemas
                                fotovoltaicos personalizados para suas necessidades.
                            </li>
                            <li className="text-lg">
                                <strong>Soluções financeiras:</strong> Oferecemos opções de financiamento e consultoria para maximizar os
                                benefícios econômicos do seu investimento.
                            </li>
                            <li className="text-lg">
                                <strong>Sustentabilidade:</strong> Cada projeto ajuda a reduzir a emissão de carbono, contribuindo diretamente
                                para a preservação do meio ambiente.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="bg-gray-50 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl mb-6">Nossos serviços incluem:</h2>
                        <ul className="list-none space-y-4">
                            <li className="text-lg">Consultoria e planejamento do sistema solar.</li>
                            <li className="text-lg">Instalação de painéis solares residenciais, comerciais e industriais.</li>
                            <li className="text-lg">Monitoramento e manutenção contínua para garantir a eficiência do sistema.</li>
                            <li className="text-lg">Assistência no processo de regulamentação e conexão com a rede elétrica.</li>
                        </ul>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl mb-6">Por que investir em energia solar?</h2>
                        <ul className="list-none space-y-4">
                            <li className="text-lg">Redução de até 95% na sua conta de energia.</li>
                            <li className="text-lg">Valorização do imóvel com tecnologia limpa.</li>
                            <li className="text-lg">Independência energética e proteção contra aumentos de tarifas.</li>
                        </ul>
                    </div>
                </section>
            </main>


            <footer className="bg-[#3588fc] text-white py-8 text-center">
                <div className="container mx-auto">
                    <p className="text-lg">
                        Invista no futuro hoje mesmo. Faça parte da revolução solar com a <strong>Sunbridge Energy</strong>.
                    </p>
                </div>
            </footer>
        </div>


    );
};

export default Principal;
