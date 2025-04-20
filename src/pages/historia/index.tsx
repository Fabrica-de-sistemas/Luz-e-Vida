export default function Historia() {
    return (
        <>
            {/* Nossa História */}
            <section className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-center my-8">Nossa História</h1>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4">
                    {/* Lado Esquerdo: Texto */}
                    <div className="md:w-1/2">
                        <p className="text-lg text-justify">
                            O Instituto Luz e Vida é a manifestação viva da paixão e generosidade de seu fundador, André Prata. Nascido e criado em Belford Roxo, no bairro Xavante, André encontrou inspiração desde cedo na bondade e dedicação de sua avó. Ela, que dedicava seu tempo a cuidar dos mais necessitados, plantou nele a semente do serviço à comunidade.
                        </p>
                        <p className="text-lg text-justify mt-4">
                            Essa semente cresceu e floresceu, transformando-se na missão do Instituto Luz e Vida. Motivado pela memória de sua avó e pelo desejo genuíno de fazer a diferença, André tornou-se um farol de esperança em sua própria comunidade.
                        </p>
                        <p className="text-lg text-justify mt-4">
                            Hoje, além de liderar o Instituto, ele inspirou mais de 500 voluntários — incluindo sua própria família — a se juntarem a esse nobre ideal de cuidar do próximo. Seu compromisso e dedicação são um exemplo, impulsionando uma rede crescente de voluntários que, como ele, acreditam no poder da solidariedade para transformar vidas.
                        </p>
                    </div>

                    {/* Lado Direito: Imagens */}
                    <div className="md:w-1/2 w-full flex flex-col gap-4">
                        <div className="w-full h-64 bg-gray-300 rounded-lg" style={{ backgroundImage: `url(placeholder)`, }}></div>
                        <div className="w-full h-64 bg-gray-300 rounded-lg" style={{ backgroundImage: `url(placeholder)`, }}></div>
                    </div>
                </div>
            </section>
            {/* Sobre o Instituto */}
            <section className="flex flex-col items-center justify-center my-16">
                <div className="m-0 p-0">
                    <h2 className="text-4xl font-bold text-center mb-8">Instituito Luz e Vida</h2>
                    <div className="w-[64px] h-[8px] bg-[#FAB515] mb-4 rounded-[6px]"></div>
                </div>
                <div className="flex flex-col items-center justify-center p-4">
                    <div className="w-full md:w-3/4">
                        <p className="text-lg text-justify">
                            O Instituto Luz e Vida é uma instituição filantrópica, situada no Xavante, município de Belford Roxo/RJ, que atua há 21 anos, promovendo um país melhor para todos por meio de projetos, programas e ações que geram mais renda, mais saúde, melhor educação, maior confiança no futuro e, acima de tudo, desenvolvimento social.
                        </p>
                        <p className="text-lg text-justify mt-4">
                            Nosso objetivo é atender demandas emergenciais e contribuir para a formação integral de crianças, adolescentes, jovens e suas famílias, promovendo impactos positivos em toda a comunidade.
                        </p>
                        <p className="text-lg text-justify mt-4">
                            Trabalhamos em parceria com organizações comprometidas com o desenvolvimento do país, atuando em diversas frentes, como assistência social, cultura, educação, filantropia e saúde.
                        </p>
                        <p className="text-lg text-justify mt-4">
                            A experiência da nossa equipe possibilita uma atuação abrangente, com projetos que fomentam o desenvolvimento sustentável e geram mudanças reais na vida das pessoas. Nossos serviços são conduzidos por profissionais altamente qualificados e comprometidos, especialmente em regiões de vulnerabilidade social, onde a demanda por saúde, educação e atividades ocupacionais é crescente.
                        </p>
                        <p className="text-lg text-justify mt-4">
                            Nossa essência é promover o desenvolvimento humano através da construção de redes solidárias, priorizando a formação para a cidadania e a inclusão social.
                        </p>

                    </div>
                    <div className="w-full md:w-3/4 mt-8">
                        <div className="w-full h-96 bg-gray-300 rounded-lg" style={{ backgroundImage: `url(placeholder)`, }}></div>
                    </div>
                </div>
            </section>


            {/* What Drives Us Section */}
            <section className="relative flex py-[120px] px-[51px] justify-center items-center mx-auto bg-white w-full">
                {/* Conteúdo principal */}
                <div className="relative z-10 flex flex-col items-center gap-20">
                    {/* Título e ornamento */}
                    <div className="flex flex-col items-center">
                        <h2
                            className="flex flex-col justify-center self-stretch text-[#36383E] text-center text-[44px] font-semibold">
                            O Que nos Move
                        </h2>
                        <div className="flex items-center mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="305" height="33" viewBox="0 0 305 33" fill="none">
                                <path
                                    d="M303 29.2172C261.14 39.4921 250.093 1.99998 220.124 1.99998C190.155 1.99999 182.469 23.0352 152.5 23.0352C122.531 23.0352 107.219 12.9487 77.25 12.9487C47.2811 12.9488 54.6659 27.996 1.99999 29.2172"
                                    stroke="#FAB515" stroke-width="4" stroke-linecap="round" stroke-dasharray="8 8" />
                            </svg>
                            <img src="/static/images/navigation.svg" alt="Ícone de navegação" className="w-6 h-6 ml-2" />
                        </div>
                    </div>

                    {/* Cards */}
                    <div
                        className="flex justify-center gap-7 text-wrap flex-wrap lg:bg-[#455074] rounded-3xl lg:flex-col w-full lg:justify-between p-2 lg:p-8 text-[#36383E] lg:text-white">
                        {/* Card 1 - Missão */}
                        <div
                            className="flex md:w-1/4 lg:w-full p-5 flex-col items-start gap-[18px] rounded-3xl border-[1.8px] border-[#36383E] lg:border-0 bg-white lg:bg-inherit shadow-md lg:shadow-none">
                            {/* <img src="/static/images/lucide_target.svg" alt="Alvo" className="h-10 w-10"> */}
                            <svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.6667 30.5556C24.3373 30.5556 30.5556 24.3373 30.5556 16.6667C30.5556 8.9961 24.3373 2.77783 16.6667 2.77783C8.9961 2.77783 2.77783 8.9961 2.77783 16.6667C2.77783 24.3373 8.9961 30.5556 16.6667 30.5556Z"
                                    className="stroke-[#36383E] lg:stroke-white" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M16.6668 25.0002C21.2692 25.0002 25.0002 21.2692 25.0002 16.6668C25.0002 12.0645 21.2692 8.3335 16.6668 8.3335C12.0645 8.3335 8.3335 12.0645 8.3335 16.6668C8.3335 21.2692 12.0645 25.0002 16.6668 25.0002Z"
                                    className="stroke-[#36383E] lg:stroke-white" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M16.6667 19.4445C18.2008 19.4445 19.4445 18.2008 19.4445 16.6667C19.4445 15.1326 18.2008 13.8889 16.6667 13.8889C15.1326 13.8889 13.8889 15.1326 13.8889 16.6667C13.8889 18.2008 15.1326 19.4445 16.6667 19.4445Z"
                                    className="stroke-[#36383E] lg:stroke-white" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M30.5888 9.22917L36.1123 8.79616L33.2256 3.79616L30.0888 8.36314L30.5888 9.22917ZM16.5464 17.3366L31.0218 8.97917L30.5218 8.11314L16.0464 16.4706L16.5464 17.3366Z"
                                    fill="#FAB515" />
                            </svg>

                            <h3 className="flex flex-col justify-center text-3xl font-bold">
                                Missão
                            </h3>
                            <p className="lg:hidden text-base font-normal leading-[150%] lg:w-2/3">
                                Nossa missão é promover inclusão e transformação social na comunidade do Xavantes, oferecendo
                                educação, cultura e oportunidades para um futuro melhor.
                            </p>
                            <p className="hidden lg:block text-base font-normal leading-[150%] lg:w-2/3">
                                Transformar a realidade da comunidade de Xavante, em Belford Roxo, por meio de atendimento
                                técnico especializado, saúde, educação e atividades complementares de qualidade. Utilizamos a
                                cultura, o esporte, o lazer e a educação como ferramentas de inclusão e transformação social,
                                estimulando os jovens a se tornarem cidadãos críticos e conscientes das constantes mudanças na
                                sociedade.
                                Criar alternativas diante das situações de vulnerabilidade social, promovendo a transformação do
                                ser humano por meio de programas e projetos socioassistenciais e profissionalizantes. Nossas
                                atividades são guiadas pelos princípios do Estatuto da Criança e do Adolescente, desenvolvendo
                                uma prática pedagógica que valoriza a participação ativa dos assistidos.
                                Atuar em rede para fortalecer o desenvolvimento da equipe e trabalhar em alinhamento com os
                                Objetivos de Desenvolvimento Sustentável (ODS).
                            </p>
                        </div>

                        {/* Card 2 - Visão */}
                        <div
                            className="flex md:w-1/4 lg:w-full p-5 flex-col items-start gap-[18px] rounded-3xl border-[1.8px] border-[#36383E] lg:border-0 bg-white shadow-md lg:shadow-none lg:items-end lg:bg-inherit lg:text-white">
                            {/* <img src="/static/images/lucide_lightbulb.svg" alt="Lâmpada" className="h-10 w-10"> */}
                            <svg width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_152_2920)">
                                    <path
                                        d="M25 26.8889C25.3333 25.2223 26.1667 24.0556 27.5 22.7223C29.1667 21.2223 30 19.0556 30 16.8889C30 14.2368 28.9464 11.6932 27.0711 9.81785C25.1957 7.94248 22.6522 6.88892 20 6.88892C17.3478 6.88892 14.8043 7.94248 12.9289 9.81785C11.0536 11.6932 10 14.2368 10 16.8889C10 18.5556 10.3333 20.5556 12.5 22.7223C13.6667 23.8889 14.6667 25.2223 15 26.8889M15 33.5556H25M16.6667 40.2223H23.3333"
                                        className="stroke-[#36383E] lg:stroke-white" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M27.4365 4.64307L29.2071 1.55974" stroke="#FAB515" stroke-linecap="round" />
                                    <path d="M12.2275 3.81128L9.98753 1.05006" stroke="#FAB515" stroke-linecap="round" />
                                    <path d="M19.9746 2.87476L20.0181 -0.680534" stroke="#FAB515" stroke-linecap="round" />
                                    <path d="M31.3159 8.17871L34.0898 5.95443" stroke="#FAB515" stroke-linecap="round" />
                                    <path d="M8.2251 8.7251L5.21522 6.83232" stroke="#FAB515" stroke-linecap="round" />
                                    <path d="M32.7095 13.8887L36.0597 12.6979" stroke="#FAB515" stroke-linecap="round" />
                                    <path d="M3.95215 13.0459L7.39794 13.9225" stroke="#FAB515" stroke-linecap="round" />
                                    <path d="M31.8892 18.302L35.2975 19.3145" stroke="#FAB515" stroke-linecap="round" />
                                    <path d="M7.85059 18.6599L4.44634 19.6861" stroke="#FAB515" stroke-linecap="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_152_2920">
                                        <rect width="40" height="43.5556" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h3 className="flex flex-col justify-center lg:justify-end text-3xl font-bold">
                                Visão
                            </h3>
                            <p className="lg:hidden text-base font-normal leading-[150%] lg:w-2/3">
                                Ser um agente de transformação no Xavantes, promovendo educação de excelência e melhorando a
                                qualidade de vida da comunidade.
                            </p>
                            <p className="hidden lg:block text-base font-normal leading-[150%] lg:w-2/3">
                                Ser reconhecido como um agente transformador no bairro Xavante, promovendo iniciativas que
                                valorizem uma educação de excelência e elevem a qualidade de vida da comunidade.
                                Buscamos ser um ponto de apoio e realização, onde cada pessoa que nos procura possa desenvolver
                                seu potencial máximo, transformar sua realidade e romper os ciclos de desigualdade e
                                vulnerabilidade social.
                            </p>
                        </div>

                        {/* Card 3 - Valores */}
                        <div
                            className="flex md:w-1/4 lg:w-full p-5 flex-col items-start gap-[18px] rounded-3xl border-[1.8px] border-[#36383E] lg:border-0 bg-white lg:bg-inherit shadow-md lg:shadow-none">
                            <svg width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.3333 26.7619H21.6667C22.5507 26.7619 23.3986 26.4107 24.0237 25.7856C24.6488 25.1604 25 24.3126 25 23.4285C25 22.5445 24.6488 21.6966 24.0237 21.0715C23.3986 20.4464 22.5507 20.0952 21.6667 20.0952H16.6667C15.6667 20.0952 14.8333 20.4285 14.3333 21.0952L5 30.0952"
                                    className="stroke-[#36383E] lg:stroke-white" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M11.6666 36.7619L14.3333 34.4286C14.8333 33.7619 15.6666 33.4286 16.6666 33.4286H23.3333C25.1666 33.4286 26.8333 32.7619 27.9999 31.4286L35.6666 24.0953C36.3097 23.4875 36.6851 22.6491 36.7101 21.7645C36.7351 20.88 36.4077 20.0217 35.7999 19.3786C35.1921 18.7354 34.3537 18.3601 33.4692 18.3351C32.5847 18.3101 31.7264 18.6375 31.0833 19.2453L24.0833 25.7453M3.33325 28.4286L13.3333 38.4286"
                                    className="stroke-[#36383E] lg:stroke-white" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M32.4999 13.0238C33.6666 11.8572 34.9999 10.3572 34.9999 8.52385C35.1164 7.50539 34.8856 6.47744 34.3448 5.60658C33.8041 4.73571 32.9851 4.07297 32.0206 3.72575C31.0561 3.37853 30.0026 3.36718 29.0308 3.69354C28.0591 4.01989 27.226 4.66484 26.6666 5.52385C26.0716 4.73148 25.2383 4.15072 24.289 3.86682C23.3397 3.58292 22.3244 3.61083 21.3921 3.94645C20.4598 4.28208 19.6596 4.90774 19.1091 5.73159C18.5586 6.55544 18.2866 7.53408 18.3333 8.52385C18.3333 10.5238 19.6666 11.8572 20.8333 13.1905L26.6666 18.8572L32.4999 13.0238Z"
                                    className="stroke-[#455074] lg:stroke-red-500" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <h3 className="flex flex-col justify-center text-3xl font-bold">
                                Valores
                            </h3>
                            <p className="text-base font-normal leading-[150%] lg:w-2/3">
                                Somos guiados pelo amor ao próximo, respeito, honestidade e empatia. Acreditamos na justiça, na
                                educação e no poder transformador da cultura, arte, esporte e lazer. Com humildade, ética e
                                transparência, trabalhamos para garantir direitos, promover inclusão e impactar vidas com
                                solidariedade.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nossa Estrutura */}
            <section>
                <div className="container mx-auto bg-white rounded-lg shadow-md p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Nossa Estrutura</h1>
                    <p className="text-gray-700 mb-6">O Instituto Luz e Vida conta com um espaço completo e acolhedor, projetado para atender crianças, jovens e famílias com conforto e qualidade. Nossa estrutura inclui:</p>
                    <div className="flex md:flex-row flex-col gap-4">
                        {/* Estruturas */}
                        <div className="md:w-1/2 w-full flex flex-col gap-4">
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">Espaços Educacionais</h2>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>6 salas de educação infantil</li>
                                    <li>2 salas para atividades diversas</li>
                                    <li>1 sala multimídia</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">Áreas para Cultura e Convivência</h2>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>1 espaço multiuso para ensaios, workshops e eventos</li>
                                    <li>1 parquinho para momentos de lazer</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">Infraestrutura de Alimentação</h2>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>1 refeitório</li>
                                    <li>1 cozinha</li>
                                    <li>1 despensa de alimentos</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">Gestão e Atendimento</h2>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>1 secretaria</li>
                                    <li>1 sala de administração</li>
                                    <li>1 sala de coordenação de projetos</li>
                                    <li>2 salas de atendimento técnico</li>
                                    <li>1 sala da direção</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">Apoio e Serviços</h2>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>1 almoxarifado</li>
                                    <li>6 banheiros (2 infantis e 2 adaptados)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Imagens */}
                        <div className="md:w-1/2 w-full flex flex-col gap-4">
                            <div className="w-full h-64 bg-gray-300 rounded-lg" style={{ backgroundImage: `url(placeholder)`, }}></div>
                            <div className="w-full h-64 bg-gray-300 rounded-lg" style={{ backgroundImage: `url(placeholder)`, }}></div>
                        </div>
                    </div>
                    <p className="text-gray-700">Com essa estrutura, garantimos um ambiente seguro e funcional para promover educação, cultura e assistência social com excelência!</p>
                </div>
            </section>
        </>
    )
}