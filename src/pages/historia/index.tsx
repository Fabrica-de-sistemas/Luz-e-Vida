import historia1 from '../../assets/images/Historia/historia1.jpeg'
import historia2 from '../../assets/images/Historia/historia2.jpeg'
import historia3 from '../../assets/images/Historia/historia3.png'
import historia4 from '../../assets/images/Historia/historia4.jpeg'
import historia5 from '../../assets/images/Historia/historia5.jpeg'
import MVV from './missaoVisaoValores'

export default function Historia() {
    return (
        <>
            <div className="bg-[#FEFEFE] mx-auto">
                {/* Seção 1: Nossa História */}
                <section className="flex flex-col lg:flex-row items-start gap-3 max-w-[1440px] w-full lg:w-[1216px] mx-auto my-20 py-16 px-4">
                    {/* Parte 1: Lado Esquerdo - Textos */}
                    <div className="flex w-full lg:w-[641px] flex-col items-start gap-8">
                        {/* Título */}
                        <h1 className="h-[37px] flex flex-col justify-center self-stretch text-[#222] text-[48px] font-semibold">
                            Nossa História
                        </h1>

                        {/* Textos do lado esquerdo */}
                        <div className="flex flex-col gap-6">
                            <p className="text-[#343434] text-xl font-normal leading-[155%]">
                                O Instituto Luz e Vida é a manifestação viva da paixão e generosidade de seu fundador, André
                                Prata.
                                Nascido e criado em Belford Roxo, no bairro Xavante, André encontrou inspiração desde cedo na
                                bondade e dedicação de sua avó. Ela, que dedicava seu tempo a cuidar dos mais necessitados,
                                plantou
                                nele a semente do serviço à comunidade.
                            </p> 
                            <p className="w-[599px] text-[#343434] text-xl font-normal leading-[155%]">
                                Essa semente cresceu e floresceu, transformando-se na missão do Instituto Luz e Vida. Motivado
                                pela
                                memória de sua avó e pelo desejo genuíno de fazer a diferença, André tornou-se um farol de
                                esperança
                                em sua própria comunidade.
                            </p>
                            <p className="w-[599px] text-[#343434] text-xl font-normal leading-[155%]">
                                Hoje, além de liderar o Instituto, ele inspirou mais de 500 voluntários — incluindo sua própria
                                família — a se juntarem a esse nobre ideal de cuidar do próximo. Seu compromisso e dedicação são
                                um
                                exemplo, impulsionando uma rede crescente de voluntários que, como ele, acreditam no poder da
                                solidariedade para transformar vidas.
                            </p>
                        </div>
                    </div>

                    {/* Parte 2 e 3: Lado Direito - Imagens */}
                    <div className="flex flex-col gap-3 w-full lg:w-auto">
                        {/* Parte 2: Imagem superior */}
                        <div className="h-[332.005px] w-full lg:w-[548px] aspect-[548/332] rounded-[24px] bg-center bg-no-repeat bg-[lightgray]"
                            style={{ backgroundImage: `url(${historia1})`, backgroundPosition: `-200.579px -78.515px`, backgroundSize: `158.856% 147.49%`, }}>
                        </div>

                        {/* Parte 3: Imagem inferior */}
                        <div className="h-[278.029px] w-full lg:w-[548px] aspect-[548/278.03] rounded-[24px] bg-center bg-no-repeat bg-[lightgray]"
                            style={{ backgroundImage: `url(${historia2})`, backgroundPosition: `0px 11.887px`, backgroundSize: `100% 110.87%`, }}>
                        </div>
                    </div>
                </section>

                {/* Sobre o Instituto - Section 2 */}
                <section className="flex w-[1216px] flex-col items-start gap-8 mx-auto my-26">
                    <div className="relative px-4">
                        {/* Título com efeitos visuais */}
                        <h2
                            className="flex w-[488px] h-[37px] flex-col justify-center flex-shrink-0 text-[#222] text-[44px] font-semibold leading-normal">
                            Instituto Luz e Vida
                            {/* Efeito acima da palavra "Vida" */}
                            <div
                                className="absolute right-[60px] top-[-35px] w-[50px] h-[50px] transform rotate-[10.119deg] flex-shrink-0 aspect-[1/1]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="56" viewBox="0 0 59 56" fill="none">
                                    <path d="M37.8667 52.1877L57.7126 49.7092" stroke="#FAB515" stroke-width="2.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M26.5073 32.2415L38.7947 16.447" stroke="#FAB515" stroke-width="2.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.38037 26.1368L1.9018 6.29107" stroke="#FAB515" stroke-width="2.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </h2>
                        {/* Linha decorativa abaixo de "Instituto" */}
                        <div className="w-[96px] h-[4px] rounded-[24px] bg-[#FAB515] mt-2"></div>
                    </div>

                    {/* Texto descritivo */}
                    <div className="flex flex-col gap-4 w-full max-w-[1216px] px-4">
                        <p className="self-stretch text-[#343434] text-[20px] font-normal leading-[155%]">
                            O Instituto Luz e Vida é uma instituição filantrópica, situada no Xavante, município de Belford
                            Roxo/RJ, que atua há 21 anos, promovendo um país melhor para todos por meio de projetos, programas e
                            ações que geram mais renda, mais saúde, melhor educação, maior confiança no futuro e, acima de tudo,
                            desenvolvimento social.
                        </p>
                        <p className="self-stretch text-[#343434] text-[20px] font-normal leading-[155%]">
                            Nosso objetivo é atender demandas emergenciais e contribuir para a formação integral de crianças,
                            adolescentes, jovens e suas famílias, promovendo impactos positivos em toda a comunidade.
                        </p>
                        <p className="self-stretch text-[#343434] text-[20px] font-normal leading-[155%]">
                            Trabalhamos em parceria com organizações comprometidas com o desenvolvimento do país, atuando em
                            diversas frentes, como assistência social, cultura, educação, filantropia e saúde.
                        </p>
                        <p className="self-stretch text-[#343434] text-[20px] font-normal leading-[155%]">
                            A experiência da nossa equipe possibilita uma atuação abrangente, com projetos que fomentam o
                            desenvolvimento sustentável e geram mudanças reais na vida das pessoas. Nossos serviços são
                            conduzidos por profissionais altamente qualificados e comprometidos, especialmente em regiões de
                            vulnerabilidade social, onde a demanda por saúde, educação e atividades ocupacionais é crescente.
                        </p>
                        <p className="self-stretch text-[#343434] text-[20px] font-normal leading-[155%]">
                            Nossa essência é promover o desenvolvimento humano através da construção de redes solidárias,
                            priorizando a formação para a cidadania e a inclusão social.
                        </p>
                    </div>

                    {/* Imagem da seção */}
                    <div className="h-[558px] w-full self-stretch rounded-[24px] bg-center bg-cover bg-no-repeat bg-[lightgray] px-4"
                        style={{ backgroundImage: `url(${historia3})`, }}>
                    </div>
                </section>

                {/* Seção 3: O que nos move */}
                <section
                    className="relative w-[1390px] h-[1564px] flex-shrink-0 rounded-[24px] bg-[#455074] mx-auto overflow-hidden">
                    <MVV />
                </section>

                {/* Nossa Estrutura */}
                <section className="flex w-full lg:w-[1217px] flex-col items-start gap-[68px] mx-auto my-36 px-4">
                    {/* Título e descrição */}
                    <div className="flex flex-col gap-6 w-full">
                        <h1 
                            className="flex h-[37px] flex-col justify-center self-stretch text-[#36383E] text-[44px] font-semibold leading-normal">
                            Nossa Estrutura
                        </h1>
                        <p className="self-stretch text-[#989A9F] text-[24px] font-normal leading-[150%]">
                            O Instituto Luz e Vida conta com um espaço completo e acolhedor, projetado para atender crianças,
                            jovens e famílias com conforto e qualidade. Nossa estrutura inclui:
                        </p>
                    </div>

                    {/* Conteúdo principal */}
                    <div className="flex flex-col lg:flex-row w-full gap-8">
                        {/* Coluna esquerda: texto */}
                        <div className="flex flex-col gap-8 flex-1">
                            {/* Espaços Educacionais */}
                            <div className="mb-6">
                                <h2 className="self-stretch text-[#B9B9F3] text-[24px] font-semibold leading-normal mb-2">
                                    Espaços Educacionais
                                </h2>
                                <ul className="self-stretch text-[#36383E] text-[20px] font-normal leading-[220%]">
                                    <li>6 salas de educação infantil</li>
                                    <li>2 salas para atividades diversas</li>
                                    <li>1 sala multimídia</li>
                                </ul>
                            </div>

                            {/* Áreas para Cultura e Convivência */}
                            <div className="mb-6">
                                <h2 className="self-stretch text-[#B9B9F3] text-[24px] font-semibold leading-normal mb-2">
                                    Áreas para Cultura e Convivência
                                </h2>
                                <ul className="self-stretch text-[#36383E] text-[20px] font-normal leading-[220%]">
                                    <li>1 espaço multiuso para ensaios, workshops e eventos</li>
                                    <li>1 parquinho para momentos de lazer</li>
                                </ul>
                            </div>

                            {/* Infraestrutura de Alimentação */}
                            <div className="mb-6">
                                <h2 className="self-stretch text-[#B9B9F3] text-[24px] font-semibold leading-normal mb-2">
                                    Infraestrutura de Alimentação
                                </h2>
                                <ul className="self-stretch text-[#36383E] text-[20px] font-normal leading-[220%]">
                                    <li>1 refeitório</li>
                                    <li>1 cozinha</li>
                                    <li>1 despensa de alimentos</li>
                                </ul>
                            </div>

                            {/* Gestão e Atendimento */}
                            <div className="mb-6">
                                <h2 className="self-stretch text-[#B9B9F3] text-[24px] font-semibold leading-normal mb-2">
                                    Gestão e Atendimento
                                </h2>
                                <ul className="self-stretch text-[#36383E] text-[20px] font-normal leading-[220%]">
                                    <li>1 secretaria</li>
                                    <li>1 sala de administração</li>
                                    <li>1 sala de coordenação de projetos</li>
                                    <li>2 salas de atendimento técnico</li>
                                    <li>1 sala da direção</li>
                                </ul>
                            </div>

                            {/* Apoio e Serviços */}
                            <div className="mb-6">
                                <h2 className="self-stretch text-[#B9B9F3] text-[24px] font-semibold leading-normal mb-2">
                                    Apoio e Serviços
                                </h2>
                                <ul className="self-stretch text-[#36383E] text-[20px] font-normal leading-[220%]">
                                    <li>1 almoxarifado</li>
                                    <li>6 banheiros (2 infantis e 2 adaptados)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Coluna direita: imagens */}
                        <div className="flex flex-col gap-6">
                            {/* Imagem de cima */}
                            <div className="w-full lg:w-[624px] h-[497px] rounded-[24px] bg-center bg-cover bg-no-repeat bg-[lightgray]"
                                style={{ backgroundImage: `url(${historia4})`, }}>
                            </div>

                            {/* Imagem de baixo */}
                            <div className="w-full lg:w-[624px] h-[346px] rounded-[24px] bg-center bg-cover bg-no-repeat bg-[lightgray]"
                                style={{ backgroundImage: `url(${historia5})`, }}>
                            </div>
                        </div>
                    </div>

                    {/* Texto de conclusão */}
                    <p className="w-[938px] text-[#36383E] text-[24px] font-normal leading-[150%] text-left">
                        Com essa estrutura, garantimos um ambiente seguro e funcional para promover educação,
                        cultura e assistência social com excelência!
                    </p>
                </section>
            </div>
        </>
    )
}