import logo from '../assets/images/logo.svg'
import mapPin from '../assets/images/map-pin.svg'
import phone from '../assets/images/phone.svg'
import whatsapp from '../assets/images/ic_baseline-whatsapp.svg'
import { Link } from 'react-router'

export default function Header() {
    return (
        <header className="flex w-full p-3 justify-between items-center bg-[#FEFEFE] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            {/* Logo */}
            <div className="flex-shrink-0">
                <Link to={{ pathname: '/Luz-e-Vida' }}>
                    <img src={logo} alt="Instituto Luz e Vida"
                        className="min-w-[40px] w-[40px] md:w-[80px] min-h-[40px] h-[40px] md:h-[80px]" />
                </Link>
            </div>

            {/* Área central com informações de contato */}
            <div className="hidden sm:flex items-center justify-center gap-4 lg:gap-6 text-nowrap overflow-hidden flex-grow">
                {/* Endereço com ícone map-pin */}
                <div className="justify-center items-center gap-1 hidden lg:flex">
                    <img src={mapPin} alt="Localização" className="w-4 h-4 flex-shrink-0" />
                    <p className="flex flex-col justify-center text-center text-[#36383E] text-sm md:text-base font-medium">
                        Xavantes, Belford roxo RJ
                    </p>
                </div>

                {/* Telefone com ícone */}
                <div className="hidden lg:flex justify-center items-center gap-1">
                    <img src={phone} alt="Telefone" className="w-4 h-4 flex-shrink-0" />
                    <p className="flex flex-col justify-center text-center text-[#36383E] text-sm md:text-base font-medium">
                        21 2758-1173
                    </p>
                </div>

                {/* WhatsApp com ícone */}
                <div className="hidden lg:flex justify-center items-center gap-1">
                    <img src={whatsapp} alt="WhatsApp" className="w-4 h-4 flex-shrink-0" />
                </div>
            </div>

            {/* Área de navegação e botão de doação */}
            <div className="flex items-center justify-end gap-2 md:gap-4">
                {/* Link História */}
                <Link to="/Luz-e-Vida/historia"
                    className="hidden sm:flex w-24 flex-col justify-center text-center text-[#36383E] text-lg font-medium ">
                    Historia
                </Link>

                {/* Link Projetos */}
                <Link to="/Luz-e-Vida/projetos"
                    className="hidden sm:flex w-24 flex-col justify-center text-center text-[#36383E] text-lg font-medium">
                    Projetos
                </Link>

                {/* Botão Doar */}
                <Link to="/Luz-e-Vida/doacoes"
                    className="flex px-10 py-2.5 justify-center items-center gap-2.5 rounded-3xl bg-[#455074] text-white font-medium text-lg">
                    Doar
                </Link>
            </div>
        </header>
    )
}