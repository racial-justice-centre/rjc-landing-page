import { TeamMemberProps } from "@/lib/type";
import HoverAvatar from "./HoverAvatar";

interface HoverAvatarGalleryProps {
    members: TeamMemberProps[];
}

const HoverAvatarGallery: React.FC<HoverAvatarGalleryProps> = ({ members }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {members.map((member) => (
                <HoverAvatar key={member.name} name={member.name} role={member.role} image={member.image} description={member.description} />
            ))}
        </div>
    )
}

export default HoverAvatarGallery;