import { Link } from 'react-router';
import endereco from '../assets/images/endereço.png';

export default function Footer() {
    return (
        <>
            {/* Rodapé */}
            <section className="flex flex-col xl:inline-flex w-full mx-auto px-[96px] py-14 justify-center items-center bg-[#455074]">
                {/* Container principal */}
                <div className="flex items-center justify-center xl:gap-[134px]">
                    {/* Lado Esquerdo */}
                    <div className="xl:flex hidden xl:w-[704px] flex-col items-start gap-[108px]">
                        {/* Links de Navegação */}
                        <div className="flex w-[553px] items-start gap-[88px]">
                            {/* Container 1 */}
                            <div className="flex flex-col gap-6">
                                <Link to="/Luz-e-Vida" className="h-[24px] text-[#FEFEFE] text-2xl font-medium">
                                    Início
                                </Link>
                                <Link to="/Luz-e-Vida/historia" className="h-[22px] text-[#FEFEFE] text-2xl font-medium">
                                    Quem somos
                                </Link>
                                <Link to="Luz-e-Vida/historia#missao" className="w-[368px] h-[36px] text-[#FEFEFE] text-2xl font-medium">
                                    Missão, Visão e Valores
                                </Link>
                            </div>

                            {/* Container 2 */}
                            <div className="flex flex-col gap-6">
                                <Link to="Luz-e-Vida/projetos" className="h-[31px] text-[#FEFEFE] text-2xl font-medium">
                                    Projetos
                                </Link>
                                <Link to="Luz-e-Vida/doacoes" className="w-[255px] h-[38px] text-[#FEFEFE] text-2xl font-medium">
                                    Como Ajudar
                                </Link>
                            </div>
                        </div>

                        {/* Área para Logo ou Informações Adicionais */}
                        <div>
                            {/* Reservado para logo ou informações extras */}
                        </div>
                    </div>

                    {/* Lado Direito */}
                    <div className="flex xl:w-1/3 w-full flex-col items-start gap-6">
                        {/* Endereço */}
                        <div className="flex flex-col items-start gap-3 w-full">
                            {/* Traço decorativo */}
                            <div className="w-[42px] h-[4px] rounded-[24px] bg-[#FAB515]"></div>

                            {/* Título */}
                            <h3 className="h-[23px] w-full text-[#FEFEFE] text-2xl font-semibold">
                                Nosso endereço
                            </h3>

                            {/* Texto do endereço */}
                            <p className="h-[37px] w-full text-[#FEFEFE] text-base font-normal leading-[150%]">
                                R. dos Soldados 23 – Xavantes, Belford Roxo – RJ, 26160-040
                            </p>

                            {/* Mapa */}
                            <div className="w-[256px] h-[206px] sm:w-[374px] sm:h-[206px] rounded-[24px] bg-center bg-cover bg-no-repeat mt-2"
                                style={{ backgroundImage: `url(${endereco})`, }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.717758091102!2d-43.402247723993185!3d-22.738729631887892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9965f9011a97a3%3A0x89ca0c2bf6a9a32f!2sInstituto%20Luz%20E%20Vida!5e0!3m2!1spt-BR!2sbr!4v1748731147016!5m2!1spt-BR!2sbr"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    style={{ border: 0 }}
                                ></iframe>
                            </div>
                        </div>

                        {/* Funcionamento */}
                        <div className="flex flex-col items-start gap-3 w-full">
                            {/* Traço decorativo */}
                            <div className="w-[42px] h-[4px] rounded-[24px] bg-[#FAB515]"></div>

                            {/* Título */}
                            <h3 className="w-[188px] h-[23px] text-[#FEFEFE] text-2xl font-semibold">
                                Funcionamento
                            </h3>

                            {/* Horário */}
                            <p className="w-[178px] h-[17px] text-[#FEFEFE] text-base font-normal leading-[150%]">
                                Seg a Sex 08h às 17h
                            </p>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col items-start gap-3 w-full">
                            {/* Traço decorativo */}
                            <div className="w-[42px] h-[4px] rounded-[24px] bg-[#FAB515]"></div>

                            {/* Título */}
                            <h3 className="h-[22px] w-full text-[#FEFEFE] text-2xl font-semibold">
                                Email
                            </h3>

                            {/* Emails */}
                            <p
                                className="h-[18px] w-full flex flex-col justify-center text-[#FEFEFE] text-base font-normal leading-[150%]">
                                faleconoscoinstitutoluzevida@gmail.com
                            </p>
                            <p className="h-[18px] w-full text-[#FEFEFE] text-base font-normal leading-[150%]">
                                compliance.institutoluzevida@gmail.com
                            </p>
                        </div>

                        {/* Telefone */}
                        <div className="flex flex-col items-start gap-3 w-full">
                            {/* Traço decorativo */}
                            <div className="w-[42px] h-[4px] rounded-[24px] bg-[#FAB515]"></div>

                            {/* Título */}
                            <h3 className="h-[25px] w-full text-[#FEFEFE] text-2xl font-semibold">
                                Telefone
                            </h3>

                            {/* Número de telefone */}
                            <p
                                className="h-[18px] w-full flex flex-col justify-center text-[#FEFEFE] text-base font-normal leading-[150%]">
                                21 2758-1173
                            </p>
                        </div>

                        {/* Redes Sociais */}
                        <div className="flex flex-col items-start gap-3 w-full">
                            {/* Traço decorativo */}
                            <div className="w-[42px] h-[4px] rounded-[24px] bg-[#FAB515]"></div>

                            {/* Título */}
                            <h3 className="h-[25px] w-full text-[#FEFEFE] text-2xl font-semibold">
                                Redes sociais
                            </h3>

                            {/* Ícones das redes sociais */}
                            <div className="flex space-x-4">
                                {/* Facebook */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"
                                    className="w-6 h-6">
                                    <path
                                        d="M18.5 2H15.5C14.1739 2 12.9021 2.52678 11.9645 3.46447C11.0268 4.40215 10.5 5.67392 10.5 7V10H7.5V14H10.5V22H14.5V14H17.5L18.5 10H14.5V7C14.5 6.73478 14.6054 6.48043 14.7929 6.29289C14.9804 6.10536 15.2348 6 15.5 6H18.5V2Z"
                                        stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                {/* Instagram */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"
                                    className="w-6 h-6">
                                    <path
                                        d="M17.5 2H7.5C4.73858 2 2.5 4.23858 2.5 7V17C2.5 19.7614 4.73858 22 7.5 22H17.5C20.2614 22 22.5 19.7614 22.5 17V7C22.5 4.23858 20.2614 2 17.5 2Z"
                                        stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M16.5002 11.3703C16.6236 12.2025 16.4815 13.0525 16.094 13.7993C15.7065 14.5461 15.0933 15.1517 14.3418 15.53C13.5903 15.9082 12.7386 16.0399 11.908 15.9062C11.0773 15.7726 10.31 15.3804 9.71503 14.7855C9.12011 14.1905 8.72793 13.4232 8.59426 12.5925C8.4606 11.7619 8.59226 10.9102 8.97052 10.1587C9.34878 9.40716 9.95438 8.79404 10.7012 8.40654C11.448 8.01904 12.2979 7.87689 13.1302 8.0003C13.9791 8.12619 14.765 8.52176 15.3719 9.12861C15.9787 9.73545 16.3743 10.5214 16.5002 11.3703Z"
                                        stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18 6.5H18.01" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                </svg>

                                {/* WhatsApp */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"
                                    className="w-6 h-6">
                                    <path
                                        d="M19.5498 4.91005C18.6329 3.98416 17.5408 3.25002 16.3373 2.75042C15.1338 2.25081 13.8429 1.99574 12.5398 2.00005C7.0798 2.00005 2.6298 6.45005 2.6298 11.9101C2.6298 13.6601 3.0898 15.3601 3.9498 16.8601L2.5498 22.0001L7.7998 20.6201C9.2498 21.4101 10.8798 21.8301 12.5398 21.8301C17.9998 21.8301 22.4498 17.3801 22.4498 11.9201C22.4498 9.27005 21.4198 6.78005 19.5498 4.91005ZM12.5398 20.1501C11.0598 20.1501 9.6098 19.7501 8.3398 19.0001L8.0398 18.8201L4.9198 19.6401L5.7498 16.6001L5.5498 16.2901C4.72735 14.9771 4.29073 13.4593 4.2898 11.9101C4.2898 7.37005 7.9898 3.67005 12.5298 3.67005C14.7298 3.67005 16.7998 4.53005 18.3498 6.09005C19.1174 6.85392 19.7257 7.7626 20.1394 8.76338C20.5531 9.76417 20.764 10.8371 20.7598 11.9201C20.7798 16.4601 17.0798 20.1501 12.5398 20.1501ZM17.0598 13.9901C16.8098 13.8701 15.5898 13.2701 15.3698 13.1801C15.1398 13.1001 14.9798 13.0601 14.8098 13.3001C14.6398 13.5501 14.1698 14.1101 14.0298 14.2701C13.8898 14.4401 13.7398 14.4601 13.4898 14.3301C13.2398 14.2101 12.4398 13.9401 11.4998 13.1001C10.7598 12.4401 10.2698 11.6301 10.1198 11.3801C9.9798 11.1301 10.0998 11.0001 10.2298 10.8701C10.3398 10.7601 10.4798 10.5801 10.5998 10.4401C10.7198 10.3001 10.7698 10.1901 10.8498 10.0301C10.9298 9.86005 10.8898 9.72005 10.8298 9.60005C10.7698 9.48005 10.2698 8.26005 10.0698 7.76005C9.8698 7.28005 9.6598 7.34005 9.5098 7.33005H9.0298C8.8598 7.33005 8.5998 7.39005 8.3698 7.64005C8.1498 7.89005 7.5098 8.49005 7.5098 9.71005C7.5098 10.9301 8.39981 12.1101 8.5198 12.2701C8.6398 12.4401 10.2698 14.9401 12.7498 16.0101C13.3398 16.2701 13.7998 16.4201 14.1598 16.5301C14.7498 16.7201 15.2898 16.6901 15.7198 16.6301C16.1998 16.5601 17.1898 16.0301 17.3898 15.4501C17.5998 14.8701 17.5998 14.3801 17.5298 14.2701C17.4598 14.1601 17.3098 14.1101 17.0598 13.9901Z"
                                        fill="#FEFEFE" />
                                </svg>

                                {/* TikTok */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"
                                    className="w-6 h-6">
                                    <path
                                        d="M17.1002 5.82C16.4167 5.03953 16.0401 4.0374 16.0402 3H12.9502V15.4C12.9268 16.0712 12.6437 16.7071 12.1605 17.1735C11.6773 17.6399 11.0318 17.9004 10.3602 17.9C8.94016 17.9 7.76016 16.74 7.76016 15.3C7.76016 13.58 9.42016 12.29 11.1302 12.82V9.66C7.68016 9.2 4.66016 11.88 4.66016 15.3C4.66016 18.63 7.42016 21 10.3502 21C13.4902 21 16.0402 18.45 16.0402 15.3V9.01C17.2932 9.90985 18.7975 10.3926 20.3402 10.39V7.3C20.3402 7.3 18.4602 7.39 17.1002 5.82Z"
                                        fill="#FEFEFE" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Container para o Copyright */}
            <section className="flex w-full mx-auto px-[16px] lg:px-[96px] bg-[#455074] justify-center items-center">
                <div className="flex flex-col items-center gap-[38px]">
                    {/* Linha horizontal */}
                    <div className="h-0.5 w-full bg-[#FEFEFE]"></div>

                    {/* Texto de copyright */}
                    <p className="self-stretch text-[#FEFEFE] text-center text-base font-medium pb-6 text-wrap">
                        &copy; Copyright {new Date().getFullYear()} Todos os direitos reservados ao Instituto Luz e Vida – CNPJ: 05.090.047/0001-07
                    </p>
                </div>
            </section>
        </>
    )
}