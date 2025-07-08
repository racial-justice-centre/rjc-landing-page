import React from "react";
import Image from "next/image";
import { SubpageHeroProps } from "@/lib/type";

const SubpageHero: React.FC<SubpageHeroProps> = (subpageHeroProps: SubpageHeroProps) => {
    return (
        <>
      <section
        id="hero"
        className="w-full relative overflow-hidden h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
      >
        <div className="w-full relative h-full">
          <Image
            className="w-full h-full object-cover object-right"
            src={subpageHeroProps.image || "/images/sub-hero.png"}
            alt="Subpage Hero"
            priority
            fill
          />
        </div>
        <div className="absolute inset-0 z-2 bg-[linear-gradient(90deg,rgba(122,122,122)_0%,rgba(102,102,102,0)_100%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-3 text-left w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] px-4 sm:px-6 md:px-8">
        <h1 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-3 md:mb-4">
          {subpageHeroProps.title}
        </h1>
        <h2 className="text-white font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl italic">
          {subpageHeroProps.subtitle}
        </h2>
        </div>
      </section>
    </>
    )
}

export default SubpageHero;