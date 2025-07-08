import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Partners: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F1D6CB] py-20">
      <h2 className="text-[#101010] text-[22px] font-semibold mb-8">Our Partners</h2>
      <Carousel className="w-[80%]">
        <CarouselContent className="w-full">
          <CarouselItem className="lg:basis-1/4 md:basis-1/3 basis-1/2 sm:basis-1/1">
            <div className="flex items-center justify-center h-40">
              <Image 
                src="/images/partner/1.png" 
                alt="Partner 1" 
                width={200} 
                height={160}
                className="object-contain h-40 w-auto"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/4 md:basis-1/3 basis-1/2 sm:basis-1/1">
            <div className="flex items-center justify-center h-40">
              <Image 
                src="/images/partner/2.png" 
                alt="Partner 2" 
                width={200} 
                height={160}
                className="object-contain h-40 w-auto"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/4 md:basis-1/3 basis-1/2 sm:basis-1/1">
            <div className="flex items-center justify-center h-40">
              <Image 
                src="/images/partner/3.png" 
                alt="Partner 3" 
                width={200} 
                height={160}
                className="object-contain h-40 w-auto"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/4 md:basis-1/3 basis-1/2 sm:basis-1/1">
            <div className="flex items-center justify-center h-40">
              <Image 
                src="/images/partner/4.png" 
                alt="Partner 4" 
                width={200} 
                height={160}
                className="object-contain h-40 w-auto"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/4 md:basis-1/3 basis-1/2 sm:basis-1/1">
            <div className="flex items-center justify-center h-40">
              <Image 
                src="/images/partner/5.png" 
                alt="Partner 5" 
                width={200} 
                height={160}
                className="object-contain h-40 w-auto"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/4 md:basis-1/3 basis-1/2 sm:basis-1/1">
            <div className="flex items-center justify-center h-40">
              <Image 
                src="/images/partner/6.png" 
                alt="Partner 6" 
                width={200} 
                height={160}
                className="object-contain h-40 w-auto"
              />
            </div>
          </CarouselItem>
                  </CarouselContent>
          <CarouselNext 
            size="lg"
            className="text-[#35075B] bg-transparent border-none hover:bg-transparent !w-16 !h-16 shadow-none [&>svg]:!w-8 [&>svg]:!h-8 -right-20" 
          />
          <CarouselPrevious 
            size="lg"
            className="text-[#35075B] bg-transparent border-none hover:bg-transparent !w-16 !h-16 shadow-none [&>svg]:!w-8 [&>svg]:!h-8 -left-20" 
          />
      </Carousel>
    </div>
  );
};

export default Partners;
