import Image from "next/image";
import SubpageHero from "@/components/SubpageHero";
import { SubpageHeroProps } from "@/lib/type";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbnails,
} from "@/components/events/events_carousel";
import { CONFERENCE_PHOTOS, EVENT_2024, ROUNDTABLE_PHOTOS } from "./data";

const subpageHeroProps: SubpageHeroProps = {
  title: "Our Events",
  subtitle:
    "An Australia where all people are treated with dignity and respect, regardless of their race",
};

const EventPage: React.FC = () => {
  return (
    <>
      <SubpageHero {...subpageHeroProps} />
      <section>
      <div className="w-full">
        <div className="space-y-3 sm:space-y-4 flex flex-col items-center max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="w-full sm:w-[85%] md:w-[75%] lg:w-[70%] text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#35075B] border-b-2 sm:border-b-3 md:border-b-4 border-[#FD9D3D] py-4 sm:py-6 md:py-8 my-4 sm:my-6 md:my-8">
            Racial Justice Conference
          </h2>
          <p className="text-[#3B0666] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center font-normal px-2 sm:px-4 md:px-0">
            The Inaugural Racial Justice Conference was held on 19 April 2024 at
            the NSW State Library. Many wonderful and intelligent guests gave
            powerful presentations, speeches and appeared on panels throughout
            the day. The event was an overwhelming success and left our guests
            wanting more.
          </p>
        </div>
        <div className="w-full mt-8 sm:mt-12 md:mt-16">
          <Carousel>
            <div className="flex items-center justify-center max-w-6xl mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-8 px-2">
              <CarouselPrevious
                size="sm"
                className="text-[#35075B] bg-[#FFFFFF] bg-opacity-80 rounded-full border-none hover:bg-[#f3f4f6] hover:text-[#35075B] hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out !w-10 !h-10 sm:!w-12 sm:!h-12 md:!w-14 md:!h-14 lg:!w-16 lg:!h-16 xl:!w-18 xl:!h-18 2xl:!w-20 2xl:!h-20 shadow-md [&>svg]:!w-5 [&>svg]:!h-5 sm:[&>svg]:!w-6 sm:[&>svg]:!h-6 md:[&>svg]:!w-7 md:[&>svg]:!h-7 lg:[&>svg]:!w-8 lg:[&>svg]:!h-8 xl:[&>svg]:!w-9 xl:[&>svg]:!h-9 2xl:[&>svg]:!w-10 2xl:[&>svg]:!h-10 flex-shrink-0 !relative !left-auto !top-auto !translate-x-0 !translate-y-0"
              />
              <CarouselContent className="flex-1 max-w-4xl">
                {CONFERENCE_PHOTOS.map((photo) => (
                  <CarouselItem
                    key={photo.id}
                    className="flex justify-center items-center"
                  >
                    <Image
                      className="rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem]"
                      src={photo.image}
                      alt={photo.id.toString()}
                      width={800}
                      height={800}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext
                size="sm"
                className="text-[#35075B] bg-[#FFFFFF] bg-opacity-80 rounded-full border-none hover:bg-[#f3f4f6] hover:text-[#35075B] hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out !w-10 !h-10 sm:!w-12 sm:!h-12 md:!w-14 md:!h-14 lg:!w-16 lg:!h-16 xl:!w-18 xl:!h-18 2xl:!w-20 2xl:!h-20 shadow-md [&>svg]:!w-5 [&>svg]:!h-5 sm:[&>svg]:!w-6 sm:[&>svg]:!h-6 md:[&>svg]:!w-7 md:[&>svg]:!h-7 lg:[&>svg]:!w-8 lg:[&>svg]:!h-8 xl:[&>svg]:!w-9 xl:[&>svg]:!h-9 2xl:[&>svg]:!w-10 2xl:[&>svg]:!h-10 flex-shrink-0 !relative !right-auto !top-auto !translate-x-0 !translate-y-0"
              />
            </div>
            <CarouselThumbnails className="bg-[#F1D6CB]" />
          </Carousel>
        </div>
      </div>

      <div className="w-full bg-[#D9F3DD] mt-16 sm:mt-20 md:mt-24 lg:mt-32 pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24 lg:pb-32">
        <div className="space-y-3 sm:space-y-4 flex flex-col items-center max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="w-full sm:w-[85%] md:w-[75%] lg:w-[70%] text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#35075B] border-b-2 sm:border-b-3 md:border-b-4 border-[#FD9D3D] py-4 sm:py-6 md:py-8 my-4 sm:my-6 md:my-8">
            Racial Justice Roundtable
          </h2>
          <p className="text-[#3B0666] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center font-normal px-2 sm:px-4 md:px-0">
            We are honoured to host the Racial Justice Roundtable, bringing
            together representatives from community organisations, lawyers and
            academia. This gathering marks our collective effort to actively
            listen to each other&apos;s issues, identify emerging trends, discuss the
            critical issues of racism impacting our communities and synthesis
            common themes within collective.
          </p>
        </div>
        <div className="w-full mt-8 sm:mt-12 md:mt-16">
          <Carousel>
            <div className="flex items-center justify-center max-w-6xl mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-8 px-2">
              <CarouselPrevious
                size="sm"
                className="text-[#35075B] bg-[#FFFFFF] bg-opacity-80 rounded-full border-none hover:bg-[#f3f4f6] hover:text-[#35075B] hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out !w-10 !h-10 sm:!w-12 sm:!h-12 md:!w-14 md:!h-14 lg:!w-16 lg:!h-16 xl:!w-18 xl:!h-18 2xl:!w-20 2xl:!h-20 shadow-md [&>svg]:!w-5 [&>svg]:!h-5 sm:[&>svg]:!w-6 sm:[&>svg]:!h-6 md:[&>svg]:!w-7 md:[&>svg]:!h-7 lg:[&>svg]:!w-8 lg:[&>svg]:!h-8 xl:[&>svg]:!w-9 xl:[&>svg]:!h-9 2xl:[&>svg]:!w-10 2xl:[&>svg]:!h-10 flex-shrink-0 !relative !left-auto !top-auto !translate-x-0 !translate-y-0"
              />
              <CarouselContent className="flex-1 max-w-4xl">
                {ROUNDTABLE_PHOTOS.map((photo) => (
                  <CarouselItem
                    key={photo.id}
                    className="flex justify-center items-center"
                  >
                    <Image
                      className="rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem]"
                      src={photo.image}
                      alt={photo.id.toString()}
                      width={800}
                      height={800}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext
                size="sm"
                className="text-[#35075B] bg-[#FFFFFF] bg-opacity-80 rounded-full border-none hover:bg-[#f3f4f6] hover:text-[#35075B] hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out !w-10 !h-10 sm:!w-12 sm:!h-12 md:!w-14 md:!h-14 lg:!w-16 lg:!h-16 xl:!w-18 xl:!h-18 2xl:!w-20 2xl:!h-20 shadow-md [&>svg]:!w-5 [&>svg]:!h-5 sm:[&>svg]:!w-6 sm:[&>svg]:!h-6 md:[&>svg]:!w-7 md:[&>svg]:!h-7 lg:[&>svg]:!w-8 lg:[&>svg]:!h-8 xl:[&>svg]:!w-9 xl:[&>svg]:!h-9 2xl:[&>svg]:!w-10 2xl:[&>svg]:!h-10 flex-shrink-0 !relative !right-auto !top-auto !translate-x-0 !translate-y-0"
              />
            </div>
            <CarouselThumbnails className="bg-[#76D181]" />
          </Carousel>
        </div>

        
      </div>

      <div className="w-full mt-16 sm:mt-20 md:mt-24 lg:mt-32">
        <div className="space-y-3 sm:space-y-4 flex flex-col items-center max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="w-full sm:w-[85%] md:w-[75%] lg:w-[70%] text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#35075B] border-b-2 sm:border-b-3 md:border-b-4 border-[#FD9D3D] py-4 sm:py-6 md:py-8 my-4 sm:my-6 md:my-8">
          2024 End of year Event
          </h2>
          <p className="text-[#3B0666] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center font-normal px-2 sm:px-4 md:px-0">
          RJC wrapped up the year with a heartfelt celebration of community, progress, and shared purpose. Supporters, partners, and advocates came together to reflect on the year&apos;s achievements, recognize dedicated volunteers, and reaffirm our commitment to racial justice.
          </p>
        </div>
        <div className="w-full mt-8 sm:mt-12 md:mt-16">
          <Carousel>
            <div className="flex items-center justify-center max-w-6xl mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-8 px-2">
              <CarouselPrevious
                size="sm"
                className="text-[#35075B] bg-[#FFFFFF] bg-opacity-80 rounded-full border-none hover:bg-[#f3f4f6] hover:text-[#35075B] hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out !w-10 !h-10 sm:!w-12 sm:!h-12 md:!w-14 md:!h-14 lg:!w-16 lg:!h-16 xl:!w-18 xl:!h-18 2xl:!w-20 2xl:!h-20 shadow-md [&>svg]:!w-5 [&>svg]:!h-5 sm:[&>svg]:!w-6 sm:[&>svg]:!h-6 md:[&>svg]:!w-7 md:[&>svg]:!h-7 lg:[&>svg]:!w-8 lg:[&>svg]:!h-8 xl:[&>svg]:!w-9 xl:[&>svg]:!h-9 2xl:[&>svg]:!w-10 2xl:[&>svg]:!h-10 flex-shrink-0 !relative !left-auto !top-auto !translate-x-0 !translate-y-0"
              />
              <CarouselContent className="flex-1 max-w-4xl">
                {EVENT_2024.map((photo) => (
                  <CarouselItem
                    key={photo.id}
                    className="flex justify-center items-center"
                  >
                    <Image
                      className="rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem]"
                      src={photo.image}
                      alt={photo.id.toString()}
                      width={800}
                      height={800}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext
                size="sm"
                className="text-[#35075B] bg-[#FFFFFF] bg-opacity-80 rounded-full border-none hover:bg-[#f3f4f6] hover:text-[#35075B] hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out !w-10 !h-10 sm:!w-12 sm:!h-12 md:!w-14 md:!h-14 lg:!w-16 lg:!h-16 xl:!w-18 xl:!h-18 2xl:!w-20 2xl:!h-20 shadow-md [&>svg]:!w-5 [&>svg]:!h-5 sm:[&>svg]:!w-6 sm:[&>svg]:!h-6 md:[&>svg]:!w-7 md:[&>svg]:!h-7 lg:[&>svg]:!w-8 lg:[&>svg]:!h-8 xl:[&>svg]:!w-9 xl:[&>svg]:!h-9 2xl:[&>svg]:!w-10 2xl:[&>svg]:!h-10 flex-shrink-0 !relative !right-auto !top-auto !translate-x-0 !translate-y-0"
              />
            </div>
            <CarouselThumbnails className="bg-[#F1D6CB] !mb-8 sm:!mb-12 md:!mb-16" />
          </Carousel>
        </div>

        
      </div>
    </section>
    </>
  );
};

export default EventPage;
