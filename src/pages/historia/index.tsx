import historia1 from '../../assets/images/Historia/historia1.jpeg'
import historia2 from '../../assets/images/Historia/historia2.jpeg'
import historia3 from '../../assets/images/Historia/historia3.png'
import historia4 from '../../assets/images/Historia/historia4.jpeg'
import historia5 from '../../assets/images/Historia/historia5.jpeg'

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
                    <div className="relative z-10 w-[1200px] h-[1431px] flex-shrink-0 mx-auto py-16 flex flex-col gap-16">
                        {/* Texto 1: Missão */}
                        <div className="flex w-[937px] flex-col items-start gap-4 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="108" height="90" viewBox="0 0 108 90" fill="none"
                                className="w-[108px] h-[90px] aspect-[6/5]">
                                <path
                                    d="M45 82.5C65.7107 82.5 82.5 65.7107 82.5 45C82.5 24.2893 65.7107 7.5 45 7.5C24.2893 7.5 7.5 24.2893 7.5 45C7.5 65.7107 24.2893 82.5 45 82.5Z"
                                    stroke="#FEFEFE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M45 67.5C57.4264 67.5 67.5 57.4264 67.5 45C67.5 32.5736 57.4264 22.5 45 22.5C32.5736 22.5 22.5 32.5736 22.5 45C22.5 57.4264 32.5736 67.5 45 67.5Z"
                                    stroke="#FEFEFE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M45 52.5C49.1421 52.5 52.5 49.1421 52.5 45C52.5 40.8579 49.1421 37.5 45 37.5C40.8579 37.5 37.5 40.8579 37.5 45C37.5 49.1421 40.8579 52.5 45 52.5Z"
                                    stroke="#FEFEFE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M83.4056 24.3324L97.2144 23.2499L89.9975 10.7499L82.1556 22.1674L83.4056 24.3324ZM44.625 46.7224L84.4882 23.7074L83.2382 21.5424L43.375 44.5574L44.625 46.7224Z"
                                    fill="#FAB515" />
                            </svg>
                            <h3 className="h-[38px] self-stretch text-[#FEFEFE] text-[32px] font-bold leading-normal">
                                Missão
                            </h3>
                            <p className="w-[861px] text-[#FEFEFE] text-[20px] font-normal leading-[155%]">
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

                        {/* Texto 2: Visão  */}
                        <div className="flex w-[937px] flex-col items-start gap-4 ml-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="98" viewBox="0 0 90 98" fill="none"
                                className="w-[90px] h-[98px] aspect-[45/49]">
                                <g clip-path="url(#clip0_129_17104)">
                                    <path
                                        d="M56.25 60.5C57 56.75 58.875 54.125 61.875 51.125C65.625 47.75 67.5 42.875 67.5 38C67.5 32.0326 65.1295 26.3097 60.9099 22.0901C56.6903 17.8705 50.9674 15.5 45 15.5C39.0326 15.5 33.3097 17.8705 29.0901 22.0901C24.8705 26.3097 22.5 32.0326 22.5 38C22.5 41.75 23.25 46.25 28.125 51.125C30.75 53.75 33 56.75 33.75 60.5M33.75 75.5H56.25M37.5 90.5H52.5"
                                        stroke="#FEFEFE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M61.7319 10.4468L65.7158 3.50929" stroke="#FAB515" stroke-width="2"
                                        stroke-linecap="round" />
                                    <path d="M27.5117 8.5752L22.4717 2.36244" stroke="#FAB515" stroke-width="2"
                                        stroke-linecap="round" />
                                    <path d="M44.9426 6.46851L45.0405 -1.5309" stroke="#FAB515" stroke-width="2"
                                        stroke-linecap="round" />
                                    <path d="M70.4607 18.4021L76.702 13.3975" stroke="#FAB515" stroke-width="2"
                                        stroke-linecap="round" />
                                    <path d="M18.5066 19.6316L11.7344 15.3728" stroke="#FAB515" stroke-width="2"
                                        stroke-linecap="round" />
                                    <path d="M73.5962 31.2495L81.1342 28.5702" stroke="#FAB515" stroke-width="2"
                                        stroke-linecap="round" />
                                    <path d="M8.89233 29.3533L16.6454 31.3257" stroke="#FAB515" stroke-width="2"
                                        stroke-linecap="round" />
                                    <path d="M71.7507 41.1794L79.4195 43.4576" stroke="#FAB515" stroke-width="2"
                                        stroke-linecap="round" />
                                    <path d="M17.6638 41.9846L10.0043 44.2936" stroke="#FAB515" stroke-width="2"
                                        stroke-linecap="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_129_17104">
                                        <rect width="90" height="98" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h3 className="h-[38px] self-stretch text-[#FEFEFE] text-[32px] font-bold leading-normal">
                                Visão
                            </h3>
                            <p className="w-[861px] text-[#FEFEFE] text-[20px] font-normal leading-[155%]">
                                Ser reconhecido como um agente transformador no bairro Xavante, promovendo iniciativas que
                                valorizem uma educação de excelência e elevem a qualidade de vida da comunidade.
                                Buscamos ser um ponto de apoio e realização, onde cada pessoa que nos procura possa desenvolver
                                seu potencial máximo, transformar sua realidade e romper os ciclos de desigualdade e
                                vulnerabilidade social.
                            </p>
                        </div>

                        {/* Texto 3: Valores */}
                        <div className="flex w-[937px] flex-col items-start gap-4 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="98" viewBox="0 0 90 98" fill="none"
                                className="w-[90px] h-[97.714px] aspect-[90.00/97.71]">
                                <path
                                    d="M41.25 60.2141H48.75C50.7391 60.2141 52.6468 59.4239 54.0533 58.0174C55.4598 56.6109 56.25 54.7032 56.25 52.7141C56.25 50.725 55.4598 48.8173 54.0533 47.4108C52.6468 46.0043 50.7391 45.2141 48.75 45.2141H37.5C35.25 45.2141 33.375 45.9641 32.25 47.4641L11.25 67.7141"
                                    stroke="#FEFEFE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M26.25 82.7142L32.25 77.4642C33.375 75.9642 35.25 75.2142 37.5 75.2142H52.5C56.625 75.2142 60.375 73.7142 63 70.7142L80.25 54.2142C81.6971 52.8466 82.5417 50.9603 82.5979 48.97C82.6542 46.9798 81.9175 45" />
                                <path d=" M26.25 82.7142L32.25 77.4642C33.375 75.9642 35.25 75.2142 37.5 75.2142H52.5C56.625
                                75.2142 60.375 73.7142 63 70.7142L80.25 54.2142C81.6971 52.8466 82.5417 50.9603 82.5979
                                48.97C82.6542 46.9798 81.9175 45.0487 80.55 43.6017C79.1825 42.1546 77.2961 41.31 75.3059
                                41.2537C73.3156 41.1975 71.3846 41.9341 69.9375 43.3017L54.1875 57.9267M7.5 63.9642L30
                                86.4642" stroke="#FEFEFE" stroke-width="2.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M73.1248 29.3035C75.7498 26.6785 78.7498 23.3035 78.7498 19.1785C79.0119 16.8869 78.4925 14.5741 77.2758 12.6146C76.0591 10.6552 74.2164 9.164 72.0463 8.38275C69.8762 7.60151 67.5058 7.57597 65.3193 8.31027C63.1329 9.04458 61.2585 10.4957 59.9998 12.4285C58.6612 10.6457 56.7862 9.33894 54.6503 8.70016C52.5143 8.06138 50.2298 8.12417 48.1321 8.87933C46.0345 9.63449 44.2342 11.0422 42.9955 12.8959C41.7568 14.7495 41.145 16.9515 41.2498 19.1785C41.2498 23.6785 44.2498 26.6785 46.8748 29.6785L59.9998 42.4285L73.1248 29.3035Z"
                                    stroke="#FEFEFE" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h3 className="h-[38px] self-stretch text-[#FEFEFE] text-[32px] font-bold leading-normal">
                                Valores
                            </h3>
                            <p className="w-[861px] text-[#FEFEFE] text-[20px] font-normal leading-[155%]">
                                Somos guiados pelo amor ao próximo, respeito, honestidade e empatia. Acreditamos na justiça, na
                                educação e no poder transformador da cultura, arte, esporte e lazer. Com humildade, ética e
                                transparência, trabalhamos para garantir direitos, promover inclusão e impactar vidas com
                                solidariedade.
                            </p>
                        </div>
                    </div>
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