{/* Principais Imagens do site */ }
import hero from '../../assets/images/hero_bg.jpeg';
import childrenImg from '../../assets/images/children.jpeg';
import navigationImg from '../../assets/images/navigation.svg'
import arrowRight from '../../assets/images/arrow-right.svg';

{/* Nossos Projetos e Parceiros */ }
import semed from '../../assets/images/SEMED.png';
import fia from '../../assets/images/FIA.png';
import sapeda from '../../assets/images/SAPEA.png';
import bazar from '../../assets/images/BAZAR.png'
{/* Parceiros */ }
import caps from '../../assets/images/Parceiros/CAPS.png'
import cmas from '../../assets/images/Parceiros/CMAS.png'
import ciep from '../../assets/images/Parceiros/CIEP.png'
import cnes from '../../assets/images/Parceiros/CNES.png'
import conselhoTutelar from '../../assets/images/Parceiros/CONSELHOTUTELAR.jpeg'
import creas from '../../assets/images/Parceiros/CREAS.png'
import cremerj from '../../assets/images/Parceiros/CREMERJ.png'
import eliel from '../../assets/images/Parceiros/ELIEL.png'
import mesabrasil from '../../assets/images/Parceiros/MESABRASIL.png'
import pjerj from '../../assets/images/Parceiros/PJERJ.png'
import prefeiturabr from '../../assets/images/Parceiros/PREFEITURABR.png'
import unica from '../../assets/images/Parceiros/UNICA.png'

{/* Nossa Jornada Imagens */ }
import piscina from '../../assets/images/piscina.jpeg'
import equipe from '../../assets/images/equipe.jpeg'
import rua from '../../assets/images/rua.jpeg'
import aula from '../../assets/images/aula.jpeg'
import uniao from '../../assets/images/uniao.jpeg'
import obra from '../../assets/images/obra.jpeg'
import festa from '../../assets/images/festa.jpeg'


{/* Diretores */ }
import andreImg from '../../assets/images/Diretores/ANDRE.jpeg';
import adrianaImg from '../../assets/images/Diretores/ADRIANA.jpeg';
import { useState } from "react";

{/* Swiper Imports */ }
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import 'swiper/swiper-bundle.css';
import 'swiper/modules';

{/* React Router */ }
import { Link } from 'react-router';


type setSwiper = (swiper: SwiperClass) => void;

const journeyImages = [
    { src: equipe, alt: "Equipe Luz e Vida" },
    { src: piscina, alt: "Piscina" },
    { src: rua, alt: "Evento na rua" },
    { src: aula, alt: "Aula" },
    { src: uniao, alt: "Momento de união" },
    { src: obra, alt: "Construção" },
    { src: festa, alt: "Festa" },
];

const partnersImages = [
    { src: caps, alt: "CAPS" },
    { src: cmas, alt: "CMAS" },
    { src: ciep, alt: "CIEP" },
    { src: cnes, alt: "CNES" },
    { src: conselhoTutelar, alt: "CONSELHO TUTELAR" },
    { src: creas, alt: "CREAS" },
    { src: cremerj, alt: "CREMERJ" },
    { src: eliel, alt: "ELIEL" },
    { src: fia, alt: "FIA" },
    { src: mesabrasil, alt: "MESA BRASIL" },
    { src: pjerj, alt: "PJERJ" },
    { src: prefeiturabr, alt: "PREFEITURA BR" },
    { src: unica, alt: "UNICA" },
];


const breakPoints = {
    // Mobile
    320: {
        slidesPerView: 3,
        spaceBetween: 8,
    },
    // Tablet
    768: {
        slidesPerView: 5,
        spaceBetween: 10,
    },
    // Desktop
    1024: {
        slidesPerView: 7, // Show all 7 if screen is wide enough
        spaceBetween: 10,
    },
}

function Home() {
    const [thumbSwiper, setThumbSwiper] = useState<SwiperClass | null>(null);
    return (
        <>
            {/* Hero Section */}
            <section className="relative rounded-3xl bg-cover mx-auto my-8 h-[800px] lg:h-[640px]"
                style={{ backgroundImage: `url(${hero})`, backgroundPosition: "40%", }}>
                {/* Gradiente de sobreposição */}
                <div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[rgba(54,56,62,0.20)] via-[rgba(54,56,62,0.40)] to-[rgba(54,56,62,0.60)]">
                </div>

                {/* Conteúdo centralizado */}
                <div className="relative z-10 flex h-full items-end md:items-center p-8 md:p-0">
                    <div className="flex flex-col items-center md:items-start gap-8 ml-auto mr-15 max-w-[450px]">
                        <h1 className="flex w-full flex-col justify-center text-[#FEFEFE] text-3xl font-extrabold">
                            Juntos, podemos fazer a diferença!
                        </h1>
                        <p className="text-[#FEFEFE] text-xl font-normal">
                            Apoie o Instituto Luz e Vida e transforme conosco a vida de crianças, adolescentes que vivem em
                            vulnerabilidade social
                        </p>
                        <Link to="/Luz-e-Vida/doacoes" hx-boost="true"
                            className="flex px-14 py-3 justify-center items-center gap-2.5 rounded-3xl bg-[#FAB515] hover:bg-amber-500 text-white font-bold">
                            Doe agora
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Us e Metrics Section */}
            <section className="py-16 bg-gray-50">
                <div
                    className="flex content-center flex-col lg:flex-row justify-center lg:justify-between items-center mx-auto lg:gap-8 px-4">
                    {/* About Us Content */}
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="flex flex-col justify-center self-stretch text-[#36383E] text-5xl font-semibold">
                            Conheça a Luz e Vida
                        </h2>
                        <p className="self-stretch text-[#36383E] text-xl font-normal leading-[155%]">
                            O Instituto Luz e Vida é uma instituição filantrópica, situada no Xavante, município de Belford
                            Roxo/RJ, que atua há <span className="yearsMarker">21</span> anos, promovendo um país melhor para todos
                            por meio de projetos, programas e ações que geram mais renda, mais saúde, melhor educação, maior
                            confiança no futuro e, acima de tudo, desenvolvimento social.
                        </p>
                        <div className="flex py-2.5 items-end gap-2.5 text-blue-950 cursor-pointer hover:text-indigo-950">
                            <span>Conheça mais</span>
                            <img src={arrowRight} alt="Seta" className=" " />
                        </div>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-col items-center gap-6 flex-shrink-0">
                        <div className="w-full flex flex-col items-center">
                            <p
                                className="flex flex-col justify-center self-stretch text-[#FAB515] text-center text-4xl font-semibold">
                                <span className="yearsMarker">21</span>
                            </p>
                            <p
                                className="flex flex-col justify-center self-stretch text-[#36383E] text-center text-xl font-medium leading-[155%]">
                                ANOS DE HISTÓRIA
                            </p>
                        </div>
                        <div className="w-full flex flex-col items-center">
                            <p
                                className="flex flex-col justify-center self-stretch text-[#FAB515] text-center text-4xl font-semibold">
                                100%
                            </p>
                            <p
                                className="flex  flex-col justify-center text-[#36383E] text-center text-xl font-medium leading-[155%]">
                                CONTAS APROVADAS
                            </p>
                        </div>
                        <div className="w-full flex flex-col items-center">
                            <p
                                className="flex flex-col justify-center self-stretch text-[#FAB515] text-center text-4xl font-semibold">
                                +500.000
                            </p>
                            <p
                                className="flex flex-col justify-center text-[#36383E] text-center text-xl font-medium leading-[155%]">
                                VIDAS IMPACTADAS
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Journey Section */}
            <section className="inline-flex py-20 justify-center items-center bg-gray-100 w-full">
                <div className="  flex flex-col items-center">
                    <h2 className="flex flex-col justify-center text-[#36383E] text-center text-[44px] font-semibold mb-4">
                        Nossa Jornada
                    </h2>
                    <p
                        className="flex   flex-col justify-center text-[#36383E] text-center text-2xl font-normal leading-[150%] mb-12">
                        Conheça a história que nos trouxe até aqui e inspire-se com nosso propósito!
                    </p>

                    {/* Área do vídeo */}
                    <div className="flex w-[80vw] h-[45vw] justify-center items-center rounded-3xl bg-gray-300 overflow-hidden">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/cEqvgF8zkIM"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
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
                            <img src={navigationImg} alt="Ícone de navegação" className="w-6 h-6 ml-2" />
                        </div>
                    </div>

                    {/* Cards */}
                    <div
                        className="flex justify-center gap-7 text-wrap flex-wrap lg:bg-[#455074] rounded-3xl lg:flex-col w-full lg:justify-between p-2 lg:p-8 text-[#36383E] lg:text-white">
                        {/* Card 1 - Missão */}
                        <div
                            className="flex md:w-1/4 lg:w-full p-5 flex-col items-start gap-[18px] rounded-3xl border-[1.8px] border-[#36383E] lg:border-0 bg-white lg:bg-inherit shadow-md lg:shadow-none">
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
                            <svg width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url('#clip0_152_2920')">
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

            {/* Seção mid */}
            <section className="flex justify-evenly items-center mx-auto">
                {/* Lado esquerdo - Textos centralizados verticalmente */}
                <div className="flex min-w-0 sm:w-[640px] flex-col justify-center px-12 lg:px-6">
                    <div className="flex flex-col items-start gap-6 self-stretch">
                        <h2 className="sm:h-[106px] sm:self-stretch text-[#36383E] text-[44px] font-normal leading-normal relative">
                            Toda criança merece um <span className="font-semibold">futuro brilhante</span>!
                            <span className="inline-block ml-1">
                                <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="#FAB515">
                                    <path d="M24 0L29.79 18.21L48 24L29.79 29.79L24 48L18.21 29.79L0 24L18.21 18.21L24 0Z">
                                    </path>
                                </svg>
                            </span>
                        </h2>

                        <p className="sm:w-[478px] text-[#36383E] text-2xl font-normal leading-[150%]">
                            Milhares vivem sem acesso à educação e oportunidades. Juntos, podemos mudar essa realidade!
                        </p>
                    </div>
                </div>

                {/* Lado direito - Imagem */}
                <div className="hidden lg:block grow w-[51vw] h-[60vw] rounded-l-3xl bg-cover bg-center bg-[#DAD3D3]"
                    style={{ backgroundImage: `url(${childrenImg})`, }}>
                </div>
            </section>

            {/* Seção Nossos Projetos com Carrossel Swiper */}
            <section className="flex flex-col items-center w-full max-w-[1200px] mx-auto my-16 px-4">
                <h2 className="flex h-[37px] w-full flex-col justify-center text-[#36383E] text-[44px] font-semibold mb-8">
                    Nossos Projetos
                </h2>

                {/* Container do Swiper com largura controlada */}
                <div className='w-full'>
                    <Swiper
                        slidesPerView={3}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        <SwiperSlide>
                            {/* Projeto 1 (Slide) */}
                            <div className="swiper-slide">
                                <div className="w-[280px] flex flex-col items-start gap-[10px] mx-auto">
                                    <div className="w-full h-[201px]">
                                        <div className="w-full h-full rounded-3xl bg-cover bg-center"
                                            style={{ backgroundImage: `url(${semed})`, }}>
                                        </div>
                                    </div>
                                    <h3 className="text-[#36383E] text-2xl font-semibold">
                                        Educação infantil:
                                    </h3>
                                    <div className="h-[140px] overflow-hidden">
                                        <p className="text-[#36383E] text-base font-normal leading-[150%]">
                                            O Projeto da Educação Infantil em parceria com o Município de Belford Roxo, através
                                            da
                                            Secretaria de Educação do município, visa a aprendizagem e o desenvolvimento 260
                                            crianças de 2, 3, 4 e 5 anos com as séries iniciais da Educação Infantil.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* Projeto 2 (Slide) */}
                            <div className="swiper-slide">
                                <div className="w-[280px] flex flex-col items-start gap-[10px] mx-auto">
                                    <div className="w-full h-[201px]">
                                        <div className="w-full h-full rounded-3xl bg-cover bg-center"
                                            style={{ backgroundImage: `url(${fia})`, backgroundPosition: "0px 30px", backgroundSize: "100% 73.798%", }}>
                                        </div>
                                    </div>
                                    <h3 className="text-[#36383E] text-2xl font-semibold">
                                        Esperança:
                                    </h3>
                                    <p className="text-[#36383E] text-base font-normal leading-[140%]">
                                        O Projeto Convivendo com a Esperança, em parceria com a FIA e o Governo do RJ, atende
                                        crianças e adolescentes em situação de risco e vulnerabilidade social - Convivên...
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* Projeto 3 (Slide) */}
                            <div className="swiper-slide">
                                <div className="w-[280px] flex flex-col items-start gap-[10px] mx-auto">
                                    <div className="w-full h-[201px]">
                                        <div className="w-full h-full rounded-3xl bg-cover bg-center"
                                            style={{ backgroundImage: `url(${sapeda})`, }}>
                                        </div>
                                    </div>
                                    <h3 className="text-[#36383E] text-2xl font-semibold">
                                        SAPEDA:
                                    </h3>
                                    <p className="text-[#36383E] text-base font-normal leading-[150%]">
                                        O SAPEDA - Suporte Assistencial Para Enfrentamento Da Adversidade oferece suporte
                                        assistencial, priorizando os mais necessitados por meio de políticas compensatória que
                                        aten...
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* Projeto 4 (Slide) */}
                            <div className="swiper-slide">
                                <div className="w-[280px] flex flex-col items-start gap-[10px] mx-auto">
                                    <div className="w-full h-[201px]">
                                        <div className="w-full h-full rounded-3xl bg-cover bg-center"
                                            style={{ backgroundImage: `url(${bazar})`, }}>
                                        </div>
                                    </div>
                                    <h3 className="text-[#36383E] text-2xl font-semibold">
                                        Bazar Luz e Vida:
                                    </h3>
                                    <p className="text-[#36383E] text-base font-normal leading-[150%]">
                                        O Bazar Luz e Vida surge da intenção de despertar nos indivíduos atos de solidariedades
                                        e ao mesmo tempo envolve-los em questões que venham beneficiar os usuários de nossos
                                        serviços, projetos e programas, visando colaborar com as despesas cotidianas.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            {/* Seção Nossa Jornada ao Longo dos Anos */}
            <section className="flex flex-col items-center w-full max-w-[1525px] h-[684px] flex-shrink-0 mx-auto my-16 px-4">
                {/* Título */}
                <div className="w-full">
                    <h2
                        className="flex h-[90px] flex-col justify-center self-stretch text-[#36383E] text-center text-[48px] font-medium">
                        Nossa Jornada <span className="text-[#CFCFFF] text-[44px] font-semibold">ao longo dos anos</span>
                    </h2>
                </div>

                {/* Miniaturas */}
                <div className='w-full block items-center justify-center m-auto'>
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbSwiper && !thumbSwiper.destroyed ? thumbSwiper : null }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className='w-full rounded-lg mb-4'
                    >
                        {/* Miniaturas - 7 imagens com a mesma configuração */}
                        {journeyImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="block w-full h-64 md:h-96 lg:h-[500px] object-cover"
                                     />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Thumbnail Swiper */}
                    <Swiper
                        onSwiper={setThumbSwiper as unknown as setSwiper}
                        loop={false}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className='w-full thumbs-swiper'
                        breakpoints={breakPoints}
                    >
                        {/* Miniaturas - 7 imagens com a mesma configuração */}
                        {journeyImages.map((image, index) => (
                            <SwiperSlide
                                key={index}
                                className="cursor-pointer rounded-md overflow-hidden opacity-60 hover:opacity-100 transition-opacity duration-200 [&.swiper-slide-thumb-active]:opacity-100 [&.swiper-slide-thumb-active]:ring-2 [&.swiper-slide-thumb-active]:ring-[#FAB515]"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="block w-full h-16 sm:h-20 md:h-24 object-cover"
                                    />
                            </SwiperSlide>
                        ))} 
                    </Swiper>
                </div>
            </section>

            {/* Seção Parceiros */}
            <section className="flex flex-col items-start w-full max-w-[1214px] mx-auto my-16 px-4 gap-8">
                {/* Título */}
                <h2 className="h-[47px] w-full text-[#36383E] text-[44px] font-semibold">
                    Parceiros
                </h2>

                {/* Container de Imagens (Carrossel) */}
                <div className='w-full block items-center justify-center m-auto'>
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className='w-full rounded-lg mb-4'
                        breakpoints={breakPoints}
                        >
                        {partnersImages.map((Image, index)=>(
                            <SwiperSlide
                                key={index}
                                className='flex items-center justify-center rounded-md'
                                >
                                <img
                                    src={Image.src}
                                    alt={Image.alt}
                                    className='block w-full h-16 sm:h-20 md:h-24 object-cover'
                                    />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Diretores */}
            <section className="flex flex-col items-center lg:items-start w-full max-w-[1190px] mx-auto gap-6 px-4 my-16 ">
                {/* Título */}
                <h2 className="h-[38px] w-full flex flex-col justify-center text-[#455074] text-[32px] font-extrabold">
                    Os Corações por Trás da Missão
                </h2>
                <h3 className="h-[28px] w-full flex flex-col justify-center text-[#36383E] text-2xl font-normal leading-[150%]">
                    Conheça quem sonhou, acreditou e fez acontecer!
                </h3>

                {/* Container dos Diretores */}
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Primeiro Diretor */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Imagem da Pessoa */}
                        <div className="w-[220px] h-[225.587px] rounded-[200px] bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${andreImg})`, backgroundPosition: "0px -4.124px", backgroundSize: "100% 146.507%", }}>
                        </div>

                        {/* Descrição da Pessoa */}
                        <div className="flex flex-col items-center md:items-start">
                            {/* Nome da Pessoa */}
                            <h3 className="w-full text-[#36383E] text-2xl font-medium">André</h3>
                            {/* Apelido */}
                            <p className="w-[138px] text-[#36383E] text-base font-normal leading-[150%]">Conhecido como DR. LUZ</p>
                        </div>
                    </div>

                    {/* Segundo Diretor */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Imagem da Pessoa */}
                        <div className="w-[220px] h-[225.587px] rounded-[200px] bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${adrianaImg})`, backgroundPosition: "0px -4.124px", backgroundSize: "100% 146.507%", }}>
                        </div>

                        {/* Descrição da Pessoa */}
                        <div className="flex flex-col items-center md:items-start">
                            {/* Nome da Pessoa */}
                            <h3 className="w-full text-[#36383E] text-2xl font-medium">Adriana</h3>
                            {/* Apelido */}
                            <p className="w-[138px] text-[#36383E] text-base font-normal leading-[150%]">Conhecida como DRA. VIDA
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção de Contato */}
            <section className="flex items-center justify-center w-full max-w-[1214px] mx-auto lx:gap-[130px] py-16 px-1 lg:px-4">
                {/* Informações de Contato - Lado Esquerdo */}
                <div className="hidden lg:flex flex-col items-start gap-8 flex-1">
                    {/* Título Principal */}
                    <h2 className="h-[42px] w-full flex flex-col justify-center text-[#36383E] text-[44px] font-semibold">
                        Contato
                    </h2>

                    {/* Subtítulo */}
                    <p className="w-full text-[#989A9F] text-[20px] font-normal">
                        Dúvidas, apoio ou ajuda? Fale com a gente, estamos aqui por você! 😊
                    </p>

                    {/* Seção Endereço */}
                    <div className="flex flex-col items-start gap-3 w-full">
                        {/* Traço decorativo */}
                        <div className="w-[42px] h-[4px] rounded-[24px] bg-[#FAB515]"></div>

                        {/* Título da seção */}
                        <h3 className="h-[23px] w-full text-[#455074] text-[24px] font-medium">
                            Venha Nos Visitar
                        </h3>

                        {/* Endereço */}
                        <p className="h-[37px] w-full text-[#36383E] text-base font-normal leading-[150%]">
                            R. dos Soldados 23 – Xavantes, Belford Roxo – RJ, 26160-040
                        </p>

                        {/* Ícones de mapas */}
                        <div className="flex gap-4">
                            {/* Google Maps */}
                            <img src="../static/images/icon _google maps_.svg" alt="Google Maps" className="w-[42px] h-[42px]" />

                            {/* Waze */}
                            <img src="../static/images/icon _waze_.svg" alt="Waze" className="w-[42px] h-[36.437px]" />
                        </div>
                    </div>

                    {/* Seção Email */}
                    <div className="flex flex-col items-start gap-3 w-[320px]">
                        {/* Traço decorativo */}
                        <div className="w-[42px] h-[4px] rounded-[24px] bg-[#FAB515]"></div>

                        {/* Título da seção */}
                        <h3 className="h-[22px] w-full text-[#455074] text-[24px] font-medium">
                            Email
                        </h3>

                        {/* Endereços de email */}
                        <p
                            className="h-[18px] w-full flex flex-col justify-center text-[#36383E] text-base font-normal leading-[150%]">
                            faleconoscoinstitutoluzevida@gmail.com
                        </p>
                        <p className="h-[18px] w-full text-[#36383E] text-base font-normal leading-[150%]">
                            compliance.institutoluzevida@gmail.com
                        </p>
                    </div>

                    {/* Seção Telefone */}
                    <div className="flex flex-col items-start gap-3 w-[125px]">
                        {/* Traço decorativo */}
                        <div className="w-[42px] h-[4px] rounded-[24px] bg-[#FAB515]"></div>

                        {/* Título da seção */}
                        <h3 className="h-[25px] w-full text-[#455074] text-[24px] font-medium">
                            Telefone
                        </h3>

                        {/* Número de telefone */}
                        <p
                            className="h-[18px] w-full flex flex-col justify-center text-[#36383E] text-base font-normal leading-[150%]">
                            21 2758-1173
                        </p>
                    </div>

                    {/* Seção Redes Sociais */}
                    <div className="flex flex-col items-start gap-3 w-[171px]">
                        {/* Traço decorativo */}
                        <div className="w-[42px] h-[4px] rounded-[24px] bg-[#FAB515]"></div>

                        {/* Título da seção */}
                        <h3 className="h-[25px] w-full text-[#455074] text-[24px] font-medium">
                            Redes sociais
                        </h3>

                        {/* Ícones de redes sociais */}
                        <div className="flex space-x-4">
                            {/* Facebook */}
                            <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                                    className="fill-gray-800" />
                            </svg>

                            {/* Instagram */}
                            <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                                    className="fill-gray-800" />
                                <path
                                    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                                    className="fill-gray-800" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                                    className="fill-gray-800" />
                            </svg>

                            {/* WhatsApp */}
                            <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
                                    className="fill-gray-800" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                                    className="fill-gray-800" />
                            </svg>

                            {/* TikTok */}
                            <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" id="tiktok" data-name="Flat Color"
                                xmlns="http://www.w3.org/2000/svg">
                                <path id="primary"
                                    d="M21,7V9a1,1,0,0,1-1,1,8,8,0,0,1-4-1.08V15.5A6.5,6.5,0,1,1,6.53,9.72a1,1,0,0,1,1.47.9v2.52a.92.92,0,0,1-.28.62,2.49,2.49,0,0,0,2,4.23A2.61,2.61,0,0,0,12,15.35V3a1,1,0,0,1,1-1h2.11a1,1,0,0,1,1,.83A4,4,0,0,0,20,6,1,1,0,0,1,21,7Z"
                                    className="fill-gray-800" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Formulário de Contato - Lado Direito */}
                <div
                    className="flex-shrink-0 rounded-[24px] bg-[#FEFEFE] shadow-[4px_6px_6px_0px_rgba(52,52,52,0.24)] p-2 md:p-8">
                    <form className="space-y-6">
                        {/* Nome */}
                        <div>
                            <label htmlFor="nome"
                                className="block text-[#36383E] text-base font-medium leading-normal tracking-[0.192px] mb-2">
                                Nome
                            </label>
                            <input type="text" id="nome"
                                className="w-full flex-shrink-0 rounded-[12px] border border-[#DAD3D3] bg-[#FEFEFE] px-4"
                                placeholder="Seu nome" />
                        </div>

                        {/* Email e Telefone - Grid de 2 colunas */}
                        <div className="flex flex-col md:flex-row justify-between w-full gap-0.5">
                            {/* Email */}
                            <div className="w-full md:w-1/2">
                                <label htmlFor="email"
                                    className="block text-[#36383E] text-base font-medium leading-normal tracking-[0.192px] mb-2">
                                    Email
                                </label>
                                <input type="email" id="email"
                                    className="w-full flex-shrink-0 rounded-[12px] border border-[#DAD3D3] bg-[#FEFEFE] px-4"
                                    placeholder="Seu email" />
                            </div>

                            {/* Telefone */}
                            <div className="w-full md:w-1/2">
                                <label htmlFor="telefone"
                                    className="block text-[#36383E] text-base font-medium leading-normal tracking-[0.192px] mb-2">
                                    Telefone
                                </label>
                                <input type="tel" id="telefone"
                                    className="w-full flex-shrink-0 rounded-[12px] border border-[#DAD3D3] bg-[#FEFEFE] px-4"
                                    placeholder="Seu telefone" />
                            </div>
                        </div>

                        {/* Mensagem */}
                        <div>
                            <label htmlFor="mensagem"
                                className="block text-[#36383E] text-base font-medium leading-normal tracking-[0.192px] mb-2">
                                Mensagem
                            </label>
                            <textarea id="mensagem" rows={5}
                                className="w-full flex-shrink-0 rounded-[12px] border border-[#DAD3D3] bg-[#FEFEFE] px-4 py-3"
                                placeholder="Sua mensagem"></textarea>
                        </div>

                        {/* Botão Enviar */}
                        <div className="flex justify-center mt-6">
                            <button type="submit"
                                className="inline-flex px-[56px] py-[12px] justify-center items-center gap-[10px] rounded-[12px] bg-[#455074] text-[#FEFEFE] text-xl font-semibold">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4">
                <div
                    className="container mx-auto flex flex-col md:flex-row items-center justify-around gap-8 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    <div className="md:w-1/2 text-center md:text-left text-[#36383E]">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                            Juntos, podemos fazer a diferença!
                        </h2>
                        <p className="text-lg md:text-xl mb-6">
                            Apoie o Instituto Luz e Vida e transforme a vida de crianças e adolescentes em situação de
                            vulnerabilidade social. Sua doação faz a diferença!
                        </p>
                    </div>

                    <div className="md:w-1/3 flex justify-center">
                        <Link to="/Luz-e-Vida/doacoes"
                            className="flex px-7 py-3 justify-center items-center gap-2.5 rounded-3xl bg-[#FAB515] hover:bg-amber-500 text-white font-bold text-lg md:text-xl transition-all duration-300 shadow-md w-full">
                            Doe agora
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;