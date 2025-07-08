import { TeamMemberProps } from "@/lib/type";
const HoverAvatar: React.FC<TeamMemberProps> = ({ name, role, image, description }) => {
    console.log(image);
    return (
        <div className="text-white w-full aspect-square bg-cover bg-center bg-no-repeat cursor-pointer rounded-2xl" style={{ backgroundImage: `url(${image})` }}>
                {description ? (
                    description.length < 400 ? (
                        <div className="bg-[rgba(122,122,122,1)] text-center flex flex-col items-center justify-center h-full opacity-0 hover:opacity-80 transition-opacity duration-500 gap-2 rounded-2xl">
                            <h2 className={`text-2xl font-bold w-full ${name.length <= 20 ? 'whitespace-nowrap' : ''}`}>{name}</h2>
                            <p className="text-lg italic w-[80%]">{role}</p>
                            <p className="text-sm w-[90%]">{description}</p>
                        </div>
                ) : (
                    <div className="bg-[rgba(122,122,122,1)] text-center flex flex-col items-center justify-center h-full opacity-0 hover:opacity-80 transition-opacity duration-500 gap-1 rounded-2xl">
                        <h2 className={`text-xl font-bold w-full ${name.length <= 20 ? 'whitespace-nowrap' : ''}`}>{name}</h2>
                        <p className="text-lg italic w-[80%]">{role}</p>
                        <p className="text-sm w-full">{description}</p>
                    </div>
                )
            ) : (
                    <div className="bg-[rgba(122,122,122,1)] text-center flex flex-col items-center justify-end h-full opacity-0 hover:opacity-80 transition-opacity duration-500 gap-2 rounded-2xl">
                            <h2 className={`text-2xl font-bold w-full ${name.length <= 20 ? 'whitespace-nowrap' : ''}`}>{name}</h2>
                            <p className="mb-8 text-lg italic w-[80%]">{role}</p>
                    </div>
                )}
        </div>
    )
}

export default HoverAvatar;