import doacoesImg from '../../assets/images/doacoes_image.jpeg'

export default function Donate() {
    return (
        <>
            {/* Doações */}
            <section className="flex w-full max-w-[1440px] mx-auto h-[958px] bg-[#455074] justify-between">
                <div className="flex justify-between w-full">
                    {/* Lado Esquerdo: Formulário e botões de doação */}
                    <div className="flex w-[612px] flex-col items-start gap-16 p-16">
                        {/* Título e subtítulo */}
                        <div className="flex flex-col gap-6">
                            <h2
                                className="h-[100px] flex flex-col justify-center self-stretch text-[#FEFEFE] text-[48px] font-semibold">
                                Transforme vidas com um gesto simples!
                            </h2>
                            <p className="w-[612px] text-[#FEFEFE] text-xl font-normal">
                                Faça parte dessa corrente do bem e ajude a mudar histórias!
                            </p>
                        </div>

                        {/* Grade de opções de doação */}
                        <div className="grid grid-cols-2 gap-6 w-full">
                            {/* Opção 1: R$10,00 */}
                            <div className="flex flex-col items-center gap-2">
                                <a href='https://buy.stripe.com/test_5kA9DY5JD6QPf7ifYZ'
                                    className="flex w-full p-[10px] justify-center items-center gap-[10px] rounded-[12px] border border-[#FEFEFE] hover:bg-[#6171a3] transition-colors cursor-pointer"
                                    >
                                    <span className="text-[#FEFEFE] text-xl font-medium leading-[150%]">R$ 10,00</span>
                                </a>
                                <p className="w-full text-[#FEFEFE] text-sm font-normal leading-[150%]">
                                    Ajude a fornecer materiais educativos
                                </p>
                            </div>

                            {/* Opção 2: R$20,00 */}
                            <div className="flex flex-col items-center gap-2">
                                <a href='https://buy.stripe.com/test_00g3fA0pja31bV6002'
                                    className="flex w-full p-[10px] justify-center items-center gap-[10px] rounded-[12px] border border-[#FEFEFE] hover:bg-[#6171a3] transition-colors cursor-pointer"
                                    >
                                    <span className="text-[#FEFEFE] text-xl font-medium leading-[150%]">R$ 20,00</span>
                                </a>
                                <p className="w-[201px] text-[#FEFEFE] text-sm font-normal leading-[150%]">
                                    Contribua com alimentação para uma criança
                                </p>
                            </div>

                            {/* Opção 3: R$50,00 */}
                            <div className="flex flex-col items-center gap-2">
                                <a href='https://buy.stripe.com/test_dR6bM6fkd1wv1gs4gj'
                                    className="flex w-full p-[10px] justify-center items-center gap-[10px] rounded-[12px] border border-[#FEFEFE] hover:bg-[#6171a3] transition-colors cursor-pointer"
                                    >
                                    <span className="text-[#FEFEFE] text-xl font-medium leading-[150%]">R$ 50,00</span>
                                </a>
                                <p className="w-full text-[#FEFEFE] text-sm font-normal leading-[150%]">
                                    Apoie atividades culturai e esportivas
                                </p>
                            </div>

                            {/* Opção 4: R$100,00 */}
                            <div className="flex flex-col items-center gap-2">
                                <a href='https://buy.stripe.com/test_bIY17sc81ejh3oA8wA'
                                    className="flex w-full p-[10px] justify-center items-center gap-[10px] rounded-[12px] border border-[#FEFEFE] hover:bg-[#6171a3] transition-colors cursor-pointer"
                                    >
                                    <span className="text-[#FEFEFE] text-xl font-medium leading-[150%]">R$ 100,00</span>
                                </a>
                                <p className="w-full text-[#FEFEFE] text-sm font-normal leading-[150%]">
                                    Transforme a realidade de uma família
                                </p>
                            </div>
                        </div>

                        {/* Campo para outros valores e botão de doação */}
                        <div className="flex flex-col gap-6">

                            {/* Botão de doação */}
                            <form className="w-full" hx-post="/doacoes" encType="multipart/form-data">
                                <button type="submit" onClick={() => { }}
                                    className="flex px-5 py-[10px] justify-center items-center gap-[10px] rounded-[12px] bg-[#FAB515] shadow-[0px_4px_4px_0px_rgba(250,181,21,0.25)] text-[#FEFEFE] text-xl font-medium leading-[150%]">
                                    Quero Doar Agora
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Lado Direito: Imagem de fundo */}
                    <div className="w-[690px] h-[958px] flex-shrink-0 rounded-l-[24px] bg-center bg-cover bg-no-repeat bg-[#D9D9D9] ml-auto"
                        style={{ backgroundImage: `url(${doacoesImg})` }}>
                    </div>
                </div>
            </section>
        </>
    )
}