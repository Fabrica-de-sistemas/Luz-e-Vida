import doacoesImg from '../../assets/images/doacoes_image.jpeg';

export default function Donate() {
    return (
        <>
            {/* Doações Section */}
            {/* Use flex-col for mobile, lg:flex-row for larger screens */}
            {/* Adjust height to be auto for flexibility, min-h-screen ensures it takes at least the full viewport height */}
            <section className="flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto min-h-screen lg:h-[958px] bg-[#455074]">
                {/* Removed the extra wrapping div, applying flex properties directly to children */}

                {/* Lado Esquerdo: Content */}
                {/* Use w-full on mobile, lg:w-[calc(100%-690px)] or a specific width like lg:w-[612px] on large screens */}
                {/* Adjusted padding for different screen sizes */}
                <div className="flex w-full lg:w-auto lg:max-w-[612px] flex-col items-start gap-8 lg:gap-16 p-8 sm:p-12 lg:p-16 order-2 lg:order-1">
                    {/* Título e subtítulo */}
                    <div className="flex flex-col gap-4 lg:gap-6 w-full">
                        <h2
                            // Responsive text size, removed fixed height and centering classes
                            className="self-stretch text-[#FEFEFE] text-3xl sm:text-4xl lg:text-[48px] font-semibold">
                            Transforme vidas com um gesto simples!
                        </h2>
                        <p
                            // Removed fixed width, responsive text size
                            className="w-full text-[#FEFEFE] text-lg lg:text-xl font-normal">
                            Faça parte dessa corrente do bem e ajude a mudar histórias!
                        </p>
                    </div>

                    {/* Grade de opções de doação */}
                    {/* Use grid-cols-1 on mobile, sm:grid-cols-2 on small screens and up */}
                    {/* Adjusted gap for different screen sizes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
                        {/* Opção 1: R$10,00 */}
                        <div className="flex flex-col items-center gap-2">
                            <a href='https://buy.stripe.com/test_5kA9DY5JD6QPf7ifYZ'
                                className="flex w-full p-[10px] justify-center items-center gap-[10px] rounded-[12px] border border-[#FEFEFE] hover:bg-[#6171a3] transition-colors cursor-pointer"
                            >
                                <span className="text-[#FEFEFE] text-xl font-medium leading-[150%]">R$ 10,00</span>
                            </a>
                            <p className="w-full text-center sm:text-left text-[#FEFEFE] text-sm font-normal leading-[150%]">
                                Ajude a fornecer materiais educativos
                            </p>
                        </div>

                        {/* Opção 2: R$20,00 */}
                        <div className="flex flex-col items-center gap-2">
                            <a href='https://buy.stripe.com/test_00g3fA0pja31bV6002'
                                className="flex w-full p-[10px] justify-center items-center gap-[10px] rounded-[12px] border border-[#FEFEFE] hover:bg-[#6171a3] transition-colors cursor-pointer"
                            >
                                <span className="text-[#FEFEFE] text-xl font-medium leading-[150%]">R$ 20,00</span>
                            </a>
                            <p
                                // Removed fixed width, centered text on mobile/small screens
                                className="w-full text-center sm:text-left text-[#FEFEFE] text-sm font-normal leading-[150%]">
                                Contribua com alimentação para uma criança
                            </p>
                        </div>

                        {/* Opção 3: R$50,00 */}
                        <div className="flex flex-col items-center gap-2">
                            <a href='https://buy.stripe.com/test_dR6bM6fkd1wv1gs4gj'
                                className="flex w-full p-[10px] justify-center items-center gap-[10px] rounded-[12px] border border-[#FEFEFE] hover:bg-[#6171a3] transition-colors cursor-pointer"
                            >
                                <span className="text-[#FEFEFE] text-xl font-medium leading-[150%]">R$ 50,00</span>
                            </a>
                            <p className="w-full text-center sm:text-left text-[#FEFEFE] text-sm font-normal leading-[150%]">
                                Apoie atividades culturai e esportivas
                            </p>
                        </div>

                        {/* Opção 4: R$100,00 */}
                        <div className="flex flex-col items-center gap-2">
                            <a href='https://buy.stripe.com/test_bIY17sc81ejh3oA8wA'
                                className="flex w-full p-[10px] justify-center items-center gap-[10px] rounded-[12px] border border-[#FEFEFE] hover:bg-[#6171a3] transition-colors cursor-pointer"
                            >
                                <span className="text-[#FEFEFE] text-xl font-medium leading-[150%]">R$ 100,00</span>
                            </a>
                            <p className="w-full text-center sm:text-left text-[#FEFEFE] text-sm font-normal leading-[150%]">
                                Transforme a realidade de uma família
                            </p>
                        </div>
                    </div>

                    {/* Botão de doação "Outro Valor" */}
                    {/* Adjusted gap, make button full width on mobile, auto on sm screens and up */}
                    <div className="flex flex-col gap-4 lg:gap-6 w-full items-center sm:items-start">
                        {/* Removed unnecessary form tag, as it's just a link */}
                        <a href='https://buy.stripe.com/test_cN24jE0pjejhf7i149'
                            className="flex w-full sm:w-auto px-5 py-[10px] justify-center items-center gap-[10px] rounded-[12px] bg-[#FAB515] shadow-[0px_4px_4px_0px_rgba(250,181,21,0.25)] text-[#FEFEFE] text-xl font-medium leading-[150%] hover:bg-[#e0a414] transition-colors">
                            Quero Doar Outro Valor
                        </a>
                    </div>
                </div>

                {/* Lado Direito: Imagem */}
                {/* Use w-full on mobile, lg:w-[690px] on large screens */}
                {/* Adjusted height for different screen sizes */}
                {/* Adjusted rounding for vertical stacking */}
                {/* Use order-1 to show image first on mobile, lg:order-2 for large screens */}
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:w-[690px] lg:h-[958px] flex-shrink-0 rounded-b-[24px] lg:rounded-l-[24px] lg:rounded-b-none bg-center bg-cover bg-no-repeat order-1 lg:order-2 bg-fixed"
                    style={{ backgroundImage: `url(${doacoesImg})` }}>
                </div>
            </section>
        </>
    )
}
