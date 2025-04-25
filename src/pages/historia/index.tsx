import historia1 from '../../assets/images/Historia/historia1.jpeg'
import historia2 from '../../assets/images/Historia/historia2.jpeg'
import historia3 from '../../assets/images/Historia/historia3.png'
import historia4 from '../../assets/images/Historia/historia4.jpeg'
import historia5 from '../../assets/images/Historia/historia5.jpeg'
import MVV from './missaoVisaoValores'

export default function Historia() {
    return (
        <>
            <div className="w-[1440px] h-[5348px] bg-[#FEFEFE] mx-auto">
                {/* Seção 1: Nossa História */}
                <section className="flex items-start gap-3 max-w-[1440px] w-[1216px] mx-auto my-20 py-16">
                    {/* Parte 1: Lado Esquerdo - Textos */}
                    <div className="flex w-[641px] flex-col items-start gap-8">
                        {/* Título */}
                        <h1 className="h-[37px] flex flex-col justify-center self-stretch text-[#222] text-[48px] font-semibold">
                            Nossa História
                        </h1>

                        {/* Textos do lado esquerdo */}
                        <div className="flex flex-col gap-6">
                            <p className="w-[599px] text-[#343434] text-xl font-normal leading-[155%]">
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
                    <div className="flex flex-col gap-3">
                        {/* Parte 2: Imagem superior */}
                        <div className="h-[332.005px] w-full aspect-[548/332] rounded-[24px] bg-center bg-no-repeat bg-[lightgray]"
                            style={{ backgroundImage: `url(${historia1})`, backgroundPosition: `-200.579px -78.515px`, backgroundSize: `158.856% 147.49%`, }}>
                        </div>

                        {/* Parte 3: Imagem inferior */}
                        <div className="h-[278.029px] w-full aspect-[548/278.03] rounded-[24px] bg-center bg-no-repeat bg-[lightgray]"
                            style={{ backgroundImage: `url(${historia2})`, backgroundPosition: `0px 11.887px`, backgroundSize: `100% 110.87%`, }}>
                        </div>
                    </div>
                </section>

                {/* Sobre o Instituto - Section 2 */}
                <section className="flex w-[1216px] flex-col items-start gap-8 mx-auto my-26">
                    <div className="relative">
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
                    <div className="flex flex-col gap-4 w-full max-w-[1216px]">
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
                    <div className="h-[558px] w-full self-stretch rounded-[24px] bg-center bg-cover bg-no-repeat bg-[lightgray]"
                        style={{ backgroundImage: `url(${historia3})`, }}>
                    </div>
                </section>

                {/* Seção 3: O que nos move */}
                <section
                    className="relative w-[1390px] h-[1564px] flex-shrink-0 rounded-[24px] bg-[#455074] mx-auto overflow-hidden">
                    {/* Efeitos de fundo */}
                    <div className="absolute inset-0 z-0">
                        {/* Efeito 1: Grade */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="1301" height="980" viewBox="0 0 1301 980" fill="none"
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1343.958px] h-[980px] opacity-10">
                            <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd"
                                d="M0 0H1343.96V980H0V0ZM2.09993 1.75H165.895V138.25H2.09993V1.75ZM170.095 1.75H333.89V138.25H170.095V1.75ZM501.884 1.75H338.089V138.25H501.884V1.75ZM506.084 1.75H669.879V138.25H506.084V1.75ZM837.874 1.75H674.079V138.25H837.874V1.75ZM842.074 1.75H1005.87V138.25H842.074V1.75ZM1173.86 1.75H1010.07V138.25H1173.86V1.75ZM1178.06 1.75H1341.86V138.25H1178.06V1.75ZM165.895 141.75H2.09993V278.25H165.895V141.75ZM170.095 141.75H333.89V278.25H170.095V141.75ZM501.884 141.75H338.089V278.25H501.884V141.75ZM506.084 141.75H669.879V278.25H506.084V141.75ZM837.874 141.75H674.079V278.25H837.874V141.75ZM842.074 141.75H1005.87V278.25H842.074V141.75ZM1173.86 141.75H1010.07V278.25H1173.86V141.75ZM1178.06 141.75H1341.86V278.25H1178.06V141.75ZM165.895 281.75H2.09993V418.25H165.895V281.75ZM170.095 281.75H333.89V418.25H170.095V281.75ZM501.884 281.75H338.089V418.25H501.884V281.75ZM506.084 281.75H669.879V418.25H506.084V281.75ZM837.874 281.75H674.079V418.25H837.874V281.75ZM842.074 281.75H1005.87V418.25H842.074V281.75ZM1173.86 281.75H1010.07V418.25H1173.86V281.75ZM1178.06 281.75H1341.86V418.25H1178.06V281.75ZM165.895 421.75H2.09993V558.25H165.895V421.75ZM170.095 421.75H333.89V558.25H170.095V421.75ZM501.884 421.75H338.089V558.25H501.884V421.75ZM506.084 421.75H669.879V558.25H506.084V421.75ZM837.874 421.75H674.079V558.25H837.874V421.75ZM842.074 421.75H1005.87V558.25H842.074V421.75ZM1173.86 421.75H1010.07V558.25H1173.86V421.75ZM1178.06 421.75H1341.86V558.25H1178.06V421.75ZM165.895 561.75H2.09993V698.25H165.895V561.75ZM170.095 561.75H333.89V698.25H170.095V561.75ZM501.884 561.75H338.089V698.25H501.884V561.75ZM506.084 561.75H669.879V698.25H506.084V561.75ZM837.874 561.75H674.079V698.25H837.874V561.75ZM842.074 561.75H1005.87V698.25H842.074V561.75ZM1173.86 561.75H1010.07V698.25H1173.86V561.75ZM1178.06 561.75H1341.86V698.25H1178.06V561.75ZM165.895 701.75H2.09993V838.25H165.895V701.75ZM170.095 701.75H333.89V838.25H170.095V701.75ZM501.884 701.75H338.089V838.25H501.884V701.75ZM506.084 701.75H669.879V838.25H506.084V701.75ZM837.874 701.75H674.079V838.25H837.874V701.75ZM842.074 701.75H1005.87V838.25H842.074V701.75ZM1173.86 701.75H1010.07V838.25H1173.86V701.75ZM1178.06 701.75H1341.86V838.25H1178.06V701.75ZM165.895 841.75H2.09993V978.25H165.895V841.75ZM170.095 841.75H333.89V978.25H170.095V841.75ZM501.884 841.75H338.089V978.25H501.884V841.75ZM506.084 841.75H669.879V978.25H506.084V841.75ZM837.874 841.75H674.079V978.25H837.874V841.75ZM842.074 841.75H1005.87V978.25H842.074V841.75ZM1173.86 841.75H1010.07V978.25H1173.86V841.75ZM1178.06 841.75H1341.86V978.25H1178.06V841.75Z"
                                fill="#FEFEFE" fill-opacity="0.2" />
                        </svg>

                        {/* Efeito 2: Grade deslocada */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="1281" height="980" viewBox="0 0 1281 980" fill="none"
                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1343.958px] h-[980px] opacity-10">
                            <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd"
                                d="M-63.0835 0H1280.87V980H-63.0835V0ZM-60.9836 1.75H102.811V138.25H-60.9836V1.75ZM107.011 1.75H270.806V138.25H107.011V1.75ZM438.801 1.75H275.006V138.25H438.801V1.75ZM443.001 1.75H606.796V138.25H443.001V1.75ZM774.79 1.75H610.995V138.25H774.79V1.75ZM778.99 1.75H942.785V138.25H778.99V1.75ZM1110.78 1.75H946.985V138.25H1110.78V1.75ZM1114.98 1.75H1278.77V138.25H1114.98V1.75ZM102.811 141.75H-60.9836V278.25H102.811V141.75ZM107.011 141.75H270.806V278.25H107.011V141.75ZM438.801 141.75H275.006V278.25H438.801V141.75ZM443.001 141.75H606.796V278.25H443.001V141.75ZM774.79 141.75H610.995V278.25H774.79V141.75ZM778.99 141.75H942.785V278.25H778.99V141.75ZM1110.78 141.75H946.985V278.25H1110.78V141.75ZM1114.98 141.75H1278.77V278.25H1114.98V141.75ZM102.811 281.75H-60.9836V418.25H102.811V281.75ZM107.011 281.75H270.806V418.25H107.011V281.75ZM438.801 281.75H275.006V418.25H438.801V281.75ZM443.001 281.75H606.796V418.25H443.001V281.75ZM774.79 281.75H610.995V418.25H774.79V281.75ZM778.99 281.75H942.785V418.25H778.99V281.75ZM1110.78 281.75H946.985V418.25H1110.78V281.75ZM1114.98 281.75H1278.77V418.25H1114.98V281.75ZM102.811 421.75H-60.9836V558.25H102.811V421.75ZM107.011 421.75H270.806V558.25H107.011V421.75ZM438.801 421.75H275.006V558.25H438.801V421.75ZM443.001 421.75H606.796V558.25H443.001V421.75ZM774.79 421.75H610.995V558.25H774.79V421.75ZM778.99 421.75H942.785V558.25H778.99V421.75ZM1110.78 421.75H946.985V558.25H1110.78V421.75ZM1114.98 421.75H1278.77V558.25H1114.98V421.75ZM102.811 561.75H-60.9836V698.25H102.811V561.75ZM107.011 561.75H270.806V698.25H107.011V561.75ZM438.801 561.75H275.006V698.25H438.801V561.75ZM443.001 561.75H606.796V698.25H443.001V561.75ZM774.79 561.75H610.995V698.25H774.79V561.75ZM778.99 561.75H942.785V698.25H778.99V561.75ZM1110.78 561.75H946.985V698.25H1110.78V561.75ZM1114.98 561.75H1278.77V698.25H1114.98V561.75ZM102.811 701.75H-60.9836V838.25H102.811V701.75ZM107.011 701.75H270.806V838.25H107.011V701.75ZM438.801 701.75H275.006V838.25H438.801V701.75ZM443.001 701.75H606.796V838.25H443.001V701.75ZM774.79 701.75H610.995V838.25H774.79V701.75ZM778.99 701.75H942.785V838.25H778.99V701.75ZM1110.78 701.75H946.985V838.25H1110.78V701.75ZM1114.98 701.75H1278.77V838.25H1114.98V701.75ZM102.811 841.75H-60.9836V978.25H102.811V841.75ZM107.011 841.75H270.806V978.25H107.011V841.75ZM438.801 841.75H275.006V978.25H438.801V841.75ZM443.001 841.75H606.796V978.25H443.001V841.75ZM774.79 841.75H610.995V978.25H774.79V841.75ZM778.99 841.75H942.785V978.25H778.99V841.75ZM1110.78 841.75H946.985V978.25H1110.78V841.75ZM1114.98 841.75H1278.77V978.25H1114.98V841.75Z"
                                fill="#FEFEFE" fill-opacity="0.2" />
                        </svg>

                        {/* Efeito 3: Diagonal esquerda */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="233" viewBox="0 0 88 233" fill="none"
                            className="absolute top-40 left-0 w-[150.001px] h-[231.841px]">
                            <path d="M0.312256 13.7043V20.8431L34.3816 0.575195H22.3816L0.312256 13.7043Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M54.8577 0.575195L0.312256 33.0244V40.1633L66.8577 0.575195H54.8577Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M87.3338 0.575195L0.312256 52.3445V59.4834L99.3338 0.575195H87.3338Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M119.81 0.575195L0.312256 71.6646V78.8035L131.81 0.575195H119.81Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.313 1.74895L0.312256 90.9848V98.1236L150.313 8.88781V1.74895Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.313 21.0691L0.312256 110.305V117.444L150.313 28.2079V21.0691Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.313 40.3892L0.312256 129.625V136.764L150.313 47.528V40.3892Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.313 59.7093L0.312256 148.945V156.084L150.313 66.8482V59.7093Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.313 79.0294L0.312256 168.265V175.404L150.313 86.1683V79.0294Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.313 98.3495L0.312256 187.585V194.724L150.313 105.488V98.3495Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.313 117.67L0.312256 206.905V214.044L150.313 124.809V117.67Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.313 136.99L0.312256 226.226V232.417H1.90549L150.313 144.129V136.99Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.313 156.31L22.3816 232.417H34.3816L150.313 163.449V156.31Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.313 175.63L54.8577 232.417H66.8577L150.313 182.769V175.63Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.313 194.95L87.3338 232.417H99.3338L150.313 202.089V194.95Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.313 214.27L119.81 232.417H131.81L150.313 221.409V214.27Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                        </svg>

                        {/* Efeito 4: Diagonal direita */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="151" height="233" viewBox="0 0 151 233" fill="none"
                            className="absolute top-40 right-0 w-[150.001px] h-[231.841px]">
                            <path d="M0.22876 13.7045V20.8434L34.2981 0.575439H22.2981L0.22876 13.7045Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M54.7742 0.575439L0.22876 33.0246V40.1635L66.7742 0.575439H54.7742Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M87.2503 0.575439L0.22876 52.3448V59.4836L99.2503 0.575439H87.2503Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M119.726 0.575439L0.22876 71.6649V78.8037L131.726 0.575439H119.726Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.229 1.74919L0.22876 90.985V98.1239L150.229 8.88806V1.74919Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.229 21.0693L0.22876 110.305V117.444L150.229 28.2082V21.0693Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.229 40.3894L0.22876 129.625V136.764L150.229 47.5283V40.3894Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.229 59.7095L0.22876 148.945V156.084L150.229 66.8484V59.7095Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.229 79.0297L0.22876 168.266V175.404L150.229 86.1685V79.0297Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.229 98.3498L0.22876 187.586V194.724L150.229 105.489V98.3498Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.229 117.67L0.22876 206.906V214.045L150.229 124.809V117.67Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.229 136.99L0.22876 226.226V232.417H1.822L150.229 144.129V136.99Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.229 156.31L22.2981 232.417H34.2981L150.229 163.449V156.31Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.229 175.63L54.7742 232.417H66.7742L150.229 182.769V175.63Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.229 194.95L87.2503 232.417H99.2503L150.229 202.089V194.95Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                            <path d="M150.229 214.271L119.726 232.417H131.726L150.229 221.409V214.271Z" fill="#FEFEFE"
                                fill-opacity="0.05" />
                        </svg>
                    </div>

                    {/* Conteúdo principal da seção */}
                    <MVV />
                </section>

                {/* Nossa Estrutura */}
                <section className="flex w-[1217px] flex-col items-start gap-[68px] mx-auto my-36">
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
                    <div className="flex w-full gap-8">
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
                            <div className="w-[624px] h-[497px] rounded-[24px] bg-center bg-cover bg-no-repeat bg-[lightgray]"
                                style={{ backgroundImage: `url(${historia4})`, }}>
                            </div>

                            {/* Imagem de baixo */}
                            <div className="w-[624px] h-[346px] rounded-[24px] bg-center bg-cover bg-no-repeat bg-[lightgray]"
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