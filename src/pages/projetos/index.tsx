import BAZAR from '../../assets/images/BAZAR.png'
import SAPEA from '../../assets/images/SAPEA.png'
import FIA from '../../assets/images/FIA.png'
import SEMED from '../../assets/images/SEMED.png'

export default function Projetos() {
    return (
        <>
            <div className="w-[1440px] h-full bg-[#FEFEFE] mx-auto">
                {/* Container principal para garantir alinhamento consistente */}
                <div className="w-[1094px] mx-auto">
                    {/* Div 1: Educação Infantil */}
                    <div className="flex w-full flex-col items-start gap-8 mt-26">
                        {/* Título Educação Infantil */}
                        <h1
                            className="flex h-[37px] flex-col justify-center self-stretch text-[#36383E] text-[48px] font-semibold leading-normal">
                            Educação Infantil
                        </h1>

                        {/* Imagem principal */}
                        <div className="h-[272px] w-full self-stretch rounded-[24px] bg-no-repeat"
                            style={{ backgroundImage: `url(${SEMED})`, backgroundPosition: `298px 0px`, backgroundSize: `35.776% 122.059%`, }}>
                        </div>

                        {/* Texto descritivo */}
                        <p className="text-[#36383E] text-[20px] font-normal leading-[155%]">
                            O Projeto de Educação Infantil, em parceria com o Município de Belford Roxo, por meio da Secretaria
                            de
                            Educação, visa à aprendizagem e ao desenvolvimento de 260 crianças de 2 a 5 anos nas séries iniciais
                            da
                            Educação Infantil. Seu eixo estruturante são as interações e brincadeiras, garantindo os direitos
                            das
                            crianças de conviver, brincar, participar, explorar, expressar-se e conhecer-se.
                        </p>
                        <p className="text-[#36383E] text-[20px] font-normal leading-[155%]">
                            A organização curricular está pautada na BNCC – Base Nacional Comum Curricular e estruturada em
                            cinco
                            campos de experiências, que definem os objetivos de aprendizagem e desenvolvimento.
                            Nosso campo de experiências constitui um arranjo curricular que acolhe as situações e vivências do
                            cotidiano infantil, conectando os saberes das crianças aos conhecimentos que fazem parte do
                            patrimônio
                            cultural.
                        </p>
                    </div>

                    {/* Div 2: Conheça mais */}
                    <div className="flex w-full flex-col items-start gap-8 mt-40 mb-36">
                        {/* Título Conheça mais */}
                        <h2
                            className="flex h-[37px] flex-col justify-center self-stretch text-[#36383E] text-[44px] font-semibold leading-normal">
                            Conheça mais
                        </h2>

                        {/* Cards de projetos */}
                        <div className="flex gap-8 w-full">
                            {/* Card 1 */}
                            <div className="flex w-[330px] p-5 flex-col items-start gap-[18px] rounded-lg shadow-md">
                                {/* Imagem do card */}
                                <div className="h-[214px] w-full self-stretch rounded-[24px] bg-no-repeat"
                                    style={{ backgroundImage: `url(${FIA})`, backgroundPosition: `0px 39.286px`, backgroundSize: `100% 62.816%`, }}>
                                </div>

                                {/* Título do card - removido o whitespace-nowrap e o text-overflow-ellipsis */}
                                <h3
                                    className="flex h-auto min-h-[37px] flex-col justify-center self-stretch text-[#36383E] text-[24px] font-semibold leading-normal">
                                    Convivendo com a Esperança:
                                </h3>

                                {/* Subtexto do card */}
                                <p className="self-stretch overflow-hidden text-[#36383E] text-[16px] font-normal leading-[150%]">
                                    O Projeto Convivendo com a Esperança, em parceria com a FIA e o Governo do RJ, atende
                                    crianças e
                                    adolescentes em situação de risco e vulnerabilidade social.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="flex w-[330px] p-5 flex-col items-start gap-[18px] rounded-lg shadow-md">
                                {/* Imagem do card */}
                                <div className="h-[214px] w-full self-stretch rounded-[24px] bg-no-repeat"
                                    style={{ backgroundImage: `url(${SAPEA})`, backgroundPosition: `35px 2.286px`, backgroundSize: `80% 89.816%`, }}>
                                </div>

                                {/* Título do card */}
                                <h3
                                    className="flex h-[37px] flex-col justify-center self-stretch overflow-hidden text-[#36383E] text-overflow-ellipsis whitespace-nowrap text-[24px] font-semibold leading-normal">
                                    SAPEDA:
                                </h3>

                                {/* Subtexto do card - removido line-clamp-2 para exibir texto completo */}
                                <p className="self-stretch overflow-hidden text-[#36383E] text-[16px] font-normal leading-[150%]">
                                    O SAPEDA - Suporte Assistencial Para Enfrentamento Da Adversidade oferece suporte técnico
                                    especializado, priorizando os mais necessitados por meio de políticas compensatórias.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="flex w-[330px] p-5 flex-col items-start gap-[18px] rounded-lg shadow-md">
                                {/* Imagem do card */}
                                <div className="h-[214px] w-full self-stretch rounded-[24px] bg-no-repeat"
                                    style={{ backgroundImage: `url(${BAZAR})`, backgroundPosition: `35px 2.286px`, backgroundSize: `80% 89.816%`, }}>
                                </div>

                                {/* Título do card */}
                                <h3
                                    className="flex h-[37px] flex-col justify-center self-stretch overflow-hidden text-[#36383E] text-overflow-ellipsis whitespace-nowrap text-[24px] font-semibold leading-normal">
                                    Bazar Luz e Vida:
                                </h3>

                                {/* Subtexto do card - removido line-clamp-2 para exibir texto completo */}
                                <p className="self-stretch overflow-hidden text-[#36383E] text-[16px] font-normal leading-[150%]">
                                    O Bazar Luz e Vida surge da intenção de despertar nos indivíduos atos de solidariedade e
                                    envolvê-los em questões que beneficiem os usuários de nossos serviços.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}