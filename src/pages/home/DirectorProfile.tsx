interface DirectorProfileProps {
    imageUrl: string;
    name: string;
    nickname: string;
    imageBgPosition?: string;
    imageBgSize?: string;
}

const DirectorProfile: React.FC<DirectorProfileProps> = ({
    imageUrl,
    name,
    nickname,
    imageBgPosition = "0px -4.124px",
    imageBgSize = "100% 146.507%",
}) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8">
            <div
                className="w-[220px] h-[225.587px] rounded-[200px] bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundPosition: imageBgPosition,
                    backgroundSize: imageBgSize,
                }}
            ></div>
            <div className="flex flex-col items-center md:items-start">
                <h3 className="w-full text-[#36383E] text-2xl font-medium">{name}</h3>
                <p className="w-auto md:w-[138px] text-[#36383E] text-base font-normal leading-[150%]">
                    {nickname}
                </p>
            </div>
        </div>
    );
};

export default DirectorProfile;
