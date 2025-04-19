interface CheckoutProps {
    value?: number;
}

export default function Checkout({ value = 20 }: CheckoutProps) {
    return (
        <>
            {/* Seção principal para a página de checkout */}
            <section className="flex w-full max-w-[1440px] mx-auto pb-[277px] flex-col items-center gap-[120px] bg-[#FEFEFE]">
                {/* Container principal do conteúdo */}
                <div className="flex w-[696px] flex-col justify-end items-center gap-[51px] mt-16">
                    {/* Títulos */}
                    <div className="flex flex-col items-center gap-6">
                        <h1 className="w-[866px] text-[#36383E] text-center text-[48px] font-semibold">
                            Finalize sua doação com segurança
                        </h1>
                        <p className="w-[595px] text-[#455074] text-center text-2xl font-medium">
                            Complete os dados abaixo e junte-se a essa missão de esperança.
                        </p>
                    </div>

                    {/* Valor da doação */}
                    <div className="flex flex-col items-center gap-2 w-full">
                        <p
                            className="h-[23px] flex flex-col justify-center self-stretch text-[#455074] text-center text-lg font-semibold leading-[150%]">
                            Valor da sua doação
                        </p>
                        <div
                            className="flex px-[20px] py-[10px] justify-center items-center gap-[10px] rounded-[12px] border border-[#FAB515]">
                            <p className="text-[rgba(69,80,116,0.70)] text-xl font-medium leading-[150%]" id="valorExibido">
                                R$ {(Math.round(value * 100) / 100).toFixed(2)}
                            </p>
                        </div>
                    </div>

                    {/* Formulário de dados pessoais */}
                    <form className="w-full space-y-6">
                        {/* Nome Completo */}
                        <div className="w-full">
                            <input type="text" id="nome" name="nome" required
                                className="w-full p-4 border border-[#E0E0E0] rounded-lg text-[rgba(69,80,116,0.20)] text-xl font-medium"
                                placeholder="Nome Completo *" />
                        </div>

                        {/* Email */}
                        <div className="w-full">
                            <input type="email" id="email" name="email" required
                                className="w-full p-4 border border-[#E0E0E0] rounded-lg text-[rgba(69,80,116,0.20)] text-xl font-medium"
                                placeholder="Email *" />
                        </div>

                        {/* CPF/CNPJ */}
                        <div className="w-full">
                            <input type="text" id="cpf" name="cpf" required
                                className="w-full p-4 border border-[#E0E0E0] rounded-lg text-[rgba(69,80,116,0.20)] text-xl font-medium"
                                placeholder="CPF/CNPJ *" />
                        </div>

                        {/* Celular */}
                        <div className="w-full">
                            <input type="tel" id="celular" name="celular"
                                className="w-full p-4 border border-[#E0E0E0] rounded-lg text-[rgba(69,80,116,0.20)] text-xl font-medium"
                                placeholder="Celular com DDD" />
                        </div>

                        {/* Formas de pagamento */}
                        <div className="w-full pt-6">
                            <p className="w-full text-[#455074] text-center text-xl font-semibold mb-6">
                                Escolha uma forma de pagamento
                            </p>

                            {/* Opções de pagamento */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                {/* Cartão de crédito */}
                                <div className="flex flex-col items-center">
                                    <label className="cursor-pointer flex flex-col items-center gap-2">
                                        <input type="radio" name="payment" value="credit" className="sr-only" checked />
                                        <div
                                            className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-[#455074] bg-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="#455074" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                                <line x1="1" y1="10" x2="23" y2="10"></line>
                                            </svg>
                                        </div>
                                        <span className="text-[#455074] text-center text-base font-medium">Cartão de crédito</span>
                                    </label>
                                </div>

                                {/* Pix */}
                                <div className="flex flex-col items-center">
                                    <label className="cursor-pointer flex flex-col items-center gap-2">
                                        <input type="radio" name="payment" value="pix" className="sr-only" />
                                        <div
                                            className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-[#455074] bg-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="#455074" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                                <path d="M2 17l10 5 10-5"></path>
                                                <path d="M2 12l10 5 10-5"></path>
                                            </svg>
                                        </div>
                                        <span className="text-[#455074] text-center text-base font-medium">Pix</span>
                                    </label>
                                </div>

                                {/* Boleto */}
                                <div className="flex flex-col items-center">
                                    <label className="cursor-pointer flex flex-col items-center gap-2">
                                        <input type="radio" name="payment" value="boleto" className="sr-only" />
                                        <div
                                            className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-[#455074] bg-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="#455074" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                                                <line x1="7" y1="6" x2="7" y2="18"></line>
                                                <line x1="11" y1="6" x2="11" y2="18"></line>
                                                <line x1="15" y1="6" x2="15" y2="18"></line>
                                                <line x1="19" y1="6" x2="19" y2="18"></line>
                                            </svg>
                                        </div>
                                        <span className="text-[#455074] text-center text-base font-medium">Boleto</span>
                                    </label>
                                </div>
                            </div>

                            {/* Opção de doação mensal */}
                            <div className="flex justify-center items-center gap-2 mb-8">
                                <input type="checkbox" id="monthly" name="monthly" className="w-5 h-5 accent-[#455074]" />
                                <label htmlFor="monthly" className="text-[#455074] text-center text-base font-medium">
                                    Continuar doando mensalmente
                                </label>
                            </div>
                        </div>

                        {/* Botão de conclusão */}
                        <div className="flex justify-center">
                            <button type="submit"
                                className="px-8 py-3 bg-[#FAB515] hover:bg-[#e9a813] rounded-lg shadow-md text-[#F9F9F9] text-xl font-semibold transition-colors">
                                Concluir Doação
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}