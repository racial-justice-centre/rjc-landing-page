import { MediaEngageCardProps } from "@/lib/type";
import Image from "next/image";
import ReadMoreButton from "../ReadMoreButton";
import { ChevronsRight } from "lucide-react";

const SocialPostCard = ({ title, description, image, link, badge }: MediaEngageCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-[700px] sm:h-[800px] lg:h-[950px] flex flex-col">
            {/* Image Section */}
            <div className="relative aspect-square flex-shrink-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-fill"
                />
                {/* Badge floating on bottom left of image */}
                {badge && (
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 lg:bottom-4 lg:left-4">
                        <span className="inline-block bg-white bg-opacity-90 text-[#7A7A7A] text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-lg shadow-sm">
                            {badge}
                        </span>
                    </div>
                )}
            </div>
            
            {/* Content Section */}
            <div className="p-4 sm:p-6 lg:p-8 bg-[#C4B4D1] flex flex-col justify-between flex-grow">
                <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#3B0666] leading-tight text-left underline min-h-[2.5rem] sm:min-h-[3rem] lg:min-h-[3.5rem] flex items-start">
                        {title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[#3B0666] text-xs sm:text-sm font-medium leading-relaxed flex-grow">
                        {description}
                    </p>
                </div>
                
                {/* Read More Button */}
                <div className="mt-4 sm:mt-5 lg:mt-6 flex justify-end">
                    <ReadMoreButton 
                        href={link}
                        text="READ MORE"
                        className="text-sm sm:text-base text-white"
                        icon={<ChevronsRight className="w-3 h-3 sm:w-4 sm:h-4" />}
                    />
                </div>
            </div>
        </div>
    )
}

export default SocialPostCard;