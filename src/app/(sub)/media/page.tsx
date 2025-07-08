import SubpageHero from "@/components/SubpageHero";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { SubpageHeroProps } from "@/lib/type";
import { mediaEngageData, socialPostData } from "./data";
import MediaEngageCard from "@/components/media/MediaEngageCard";
import SocialPostCard from "@/components/media/SocialPostCard";

const subpageHeroProps: SubpageHeroProps = {
  title: "Media",
  subtitle:
    "A world where everyone is treated fairly and respectfully, regardless of their race or ethnicity.",
};

const MediaPage: React.FC = () => {
  return (
    <>
      <SubpageHero {...subpageHeroProps} />
      <section className="w-[70%] lg:w-[80%] mx-auto flex flex-col gap-8 lg:gap-16 justify-center items-center py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#35075B] border-b-4 border-[#FD9D3D] pb-4 md:pb-6 lg:pb-8 w-full sm:w-[80%] md:w-[70%] lg:w-[50%] text-center">
          Media Engagement
        </h1>
        <Carousel 
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
          className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {mediaEngageData.map((item) => (
              <CarouselItem 
                key={item.title}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <MediaEngageCard {...item} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext 
            size="sm"
            className="text-[#35075B] bg-transparent border-none hover:bg-transparent !w-16 !h-16 shadow-none [&>svg]:!w-8 [&>svg]:!h-8 -right-20" 
          />
          <CarouselPrevious 
            size="sm"
            className="text-[#35075B] bg-transparent border-none hover:bg-transparent !w-16 !h-16 shadow-none [&>svg]:!w-8 [&>svg]:!h-8 -left-20" 
          />
        </Carousel>
      </section>
      <div className="w-full bg-[#F1D6CB]">
      <section className="w-[70%] lg:w-[80%] mx-auto flex flex-col gap-8 lg:gap-16 justify-center items-center py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 ">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#35075B] border-b-4 border-[#FD9D3D] pb-4 md:pb-6 lg:pb-8 w-full sm:w-[80%] md:w-[70%] lg:w-[50%] text-center">
          Social Media Posts
        </h1>
        <Carousel 
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
          className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {socialPostData.map((item) => (
              <CarouselItem 
                key={item.title}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <SocialPostCard {...item} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext 
            size="sm"
            className="text-[#35075B] bg-transparent border-none hover:bg-transparent !w-16 !h-16 shadow-none [&>svg]:!w-8 [&>svg]:!h-8 -right-20" 
          />
          <CarouselPrevious 
            size="sm"
            className="text-[#35075B] bg-transparent border-none hover:bg-transparent !w-16 !h-16 shadow-none [&>svg]:!w-8 [&>svg]:!h-8 -left-20" 
          />
        </Carousel>

      </section>
      </div>
    </>
  );
};

export default MediaPage;
