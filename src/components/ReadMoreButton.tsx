import { Button } from "./ui/button";
import Link from "next/link";
import { ReadMoreButtonProps } from "@/lib/type";
import { cn } from "@/lib/utils";

const ReadMoreButton = ({
  href,
  text,
  icon,
  className,
}: ReadMoreButtonProps) => {
  return (
    <Button 
      className={cn(
        "self-end py-4 md:py-6 text-xs md:text-sm font-bold uppercase rounded-[12px] md:rounded-[15px] w-full sm:w-36 md:w-40 text-white bg-[#3B0666]",
        "hover:bg-[#35075B] hover:shadow-lg hover:shadow-[#3B0666]/25 hover:scale-105",
        "transition-all duration-300 ease-in-out",
        "group relative overflow-hidden",
        className
      )}
    >
      <Link
        href={href}
        target="_blank"
        className="flex items-center justify-center gap-1 md:gap-2 leading-[100px] relative z-10"
      >
        <span className="transition-transform duration-300 group-hover:translate-x-[-2px]">
          {text}
        </span>
        <span className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:scale-110 text-xs md:text-sm">
          {icon}
        </span>
      </Link>
      
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#35075B] to-[#4A0D75] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
    </Button>
  );
};
export default ReadMoreButton;