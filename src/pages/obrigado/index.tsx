export default function Obrigado() {
    return (
        <>
       <div className="w-[1440px] h-full bg-[#FEFEFE] mx-auto py-16">
    {/* Container principal para alinhamento */}
    <div className="w-[866px] mx-auto">
        {/* Botão Voltar ao início - posicionado no topo e à esquerda */}
        <div className="flex w-full mb-8">
            <a href="/" className="flex items-center text-[#455074] hover:text-[#36383E]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2">
                    <path d="M19 12H5"></path>
                    <path d="M12 19l-7-7 7-7"></path>
                </svg>
                Voltar ao início
            </a>
        </div>
        {/* Div 1: Centralizada */}
        <div className="flex w-full flex-col items-center gap-6 mb-16">
            {/* Imagem/SVG */}
            <div className="w-[80px] h-[90px] aspect-[10/11]">
                <img src="/Luz-e-Vida/public/logo.svg" />
            </div>

            {/* Título principal */}
            <h1 className="self-stretch text-[#36383E] text-center text-[38px] font-semibold leading-normal">
                Sua doação foi concluída com sucesso! 🎉
            </h1>

            {/* Subtítulo */}
            <p className="w-[670px] text-[#455074] text-center text-[24px] font-[500] leading-normal">
                Obrigado por fazer a diferença! Sua generosidade ilumina vidas e transforma o futuro de muitas crianças
                e famílias.
            </p>
        </div>

        {/* Div 2: Alinhada à esquerda */}
        <div className="flex w-[676px] flex-col items-start gap-4 mb-12">
            {/* Título O que acontece agora? */}
            <h2 className="self-stretch text-[#FAB515] text-[30px] font-semibold leading-normal">
                O que acontece agora?
            </h2>

            {/* Lista de informações com pontos */}
            <ul className="w-full text-[#36383E] text-[20px] font-normal leading-[220%] list-disc pl-5">
                <li>Sua doação será utilizada para apoiar nossos projetos sociais.</li>
                <li>Você receberá um e-mail com a confirmação e mais informações.</li>
                <li>Continue acompanhando nosso impacto e faça parte dessa jornada!</li>
            </ul>
        </div>

        {/* Div 3: Alinhada à esquerda */}
        <div className="flex w-[629px] flex-col items-start gap-3">
            {/* Título Fique por dentro */}
            <h3 className="w-[242px] h-[25px] text-[#36383E] text-[24px] font-semibold leading-normal">
                Fique por dentro! ✨
            </h3>

            {/* Subtexto */}
            <p className="w-[601px] h-[59px] text-[#36383E] text-[20px] font-normal leading-[150%]">
                Acompanhe nossas ações e veja de perto o impacto da sua doação.
            </p>

            {/* Ícones de redes sociais */}
            <div className="flex gap-6 mt-4">
                {/* Facebook */}
                <a href="#" className="w-[24px] h-[24px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                            stroke="#455074" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>

                {/* Instagram */}
                <a href="#" className="w-[24px] h-[24px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                            stroke="#455074" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M16.0002 11.3703C16.1236 12.2025 15.9815 13.0525 15.594 13.7993C15.2065 14.5461 14.5933 15.1517 13.8418 15.53C13.0903 15.9082 12.2386 16.0399 11.408 15.9062C10.5773 15.7726 9.80996 15.3804 9.21503 14.7855C8.62011 14.1905 8.22793 13.4232 8.09426 12.5925C7.9606 11.7619 8.09226 10.9102 8.47052 10.1587C8.84878 9.40716 9.45438 8.79404 10.2012 8.40654C10.948 8.01904 11.7979 7.87689 12.6302 8.0003C13.4791 8.12619 14.265 8.52176 14.8719 9.12861C15.4787 9.73545 15.8743 10.5214 16.0002 11.3703Z"
                            stroke="#455074" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.5 6.5H17.51" stroke="#455074" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </a>

                {/* WhatsApp */}
                <a href="#" className="w-[24px] h-[24px] aspect-[1/1]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M19.05 4.91005C18.1331 3.98416 17.0411 3.25002 15.8376 2.75042C14.634 2.25081 13.3431 1.99574 12.04 2.00005C6.58005 2.00005 2.13005 6.45005 2.13005 11.9101C2.13005 13.6601 2.59005 15.3601 3.45005 16.8601L2.05005 22.0001L7.30005 20.6201C8.75005 21.4101 10.38 21.8301 12.04 21.8301C17.5 21.8301 21.9501 17.3801 21.9501 11.9201C21.9501 9.27005 20.92 6.78005 19.05 4.91005ZM12.04 20.1501C10.56 20.1501 9.11005 19.7501 7.84005 19.0001L7.54005 18.8201L4.42005 19.6401L5.25005 16.6001L5.05005 16.2901C4.2276 14.9771 3.79097 13.4593 3.79005 11.9101C3.79005 7.37005 7.49005 3.67005 12.03 3.67005C14.23 3.67005 16.3 4.53005 17.85 6.09005C18.6177 6.85392 19.226 7.7626 19.6397 8.76338C20.0534 9.76417 20.2642 10.8371 20.26 11.9201C20.2801 16.4601 16.58 20.1501 12.04 20.1501ZM16.56 13.9901C16.31 13.8701 15.09 13.2701 14.87 13.1801C14.64 13.1001 14.48 13.0601 14.31 13.3001C14.14 13.5501 13.67 14.1101 13.53 14.2701C13.39 14.4401 13.24 14.4601 12.99 14.3301C12.74 14.2101 11.94 13.9401 11 13.1001C10.26 12.4401 9.77005 11.6301 9.62005 11.3801C9.48005 11.1301 9.60005 11.0001 9.73005 10.8701C9.84005 10.7601 9.98005 10.5801 10.1 10.4401C10.22 10.3001 10.27 10.1901 10.35 10.0301C10.43 9.86005 10.39 9.72005 10.33 9.60005C10.27 9.48005 9.77005 8.26005 9.57005 7.76005C9.37005 7.28005 9.16005 7.34005 9.01005 7.33005H8.53005C8.36005 7.33005 8.10005 7.39005 7.87005 7.64005C7.65005 7.89005 7.01005 8.49005 7.01005 9.71005C7.01005 10.9301 7.90005 12.1101 8.02005 12.2701C8.14005 12.4401 9.77005 14.9401 12.25 16.0101C12.84 16.2701 13.3 16.4201 13.66 16.5301C14.25 16.7201 14.79 16.6901 15.22 16.6301C15.7 16.5601 16.69 16.0301 16.89 15.4501C17.1 14.8701 17.1 14.3801 17.03 14.2701C16.96 14.1601 16.81 14.1101 16.56 13.9901Z"
                            fill="#455074" />
                    </svg>
                </a>

                {/* TikTok */}
                <a href="#" className="w-[24px] h-[24px] aspect-[1/1]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M16.5999 5.82C15.9165 5.03953 15.5398 4.0374 15.5399 3H12.4499V15.4C12.4266 16.0712 12.1434 16.7071 11.6602 17.1735C11.177 17.6399 10.5315 17.9004 9.85991 17.9C8.43991 17.9 7.25991 16.74 7.25991 15.3C7.25991 13.58 8.91991 12.29 10.6299 12.82V9.66C7.17991 9.2 4.15991 11.88 4.15991 15.3C4.15991 18.63 6.91991 21 9.84991 21C12.9899 21 15.5399 18.45 15.5399 15.3V9.01C16.7929 9.90985 18.2973 10.3926 19.8399 10.39V7.3C19.8399 7.3 17.9599 7.39 16.5999 5.82Z"
                            fill="#455074" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</div> 
        </>
    )
}