import HoverAvatarGallery from "@/components/HoverAvatarGallery";
import { ADVISORY_BOARD } from "./data";
import SubpageHero from "@/components/SubpageHero";
import { SubpageHeroProps } from "@/lib/type";

const subpageHeroProps: SubpageHeroProps = {
    title: "Our Team",
    subtitle:
      "We are Australia's first community legal service for racial justice.",
  };
  
const MediaPage: React.FC = () => {
    return (<>
        <SubpageHero {...subpageHeroProps} />
        <div className="max-w-6xl mx-auto px-6 pb-16 pt-32 ">
        <div className="space-y-16">
          <div className="space-y-4 flex flex-col items-center">
            <h2 className="w-[60%] text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#6D2102] pb-4 sm:pb-6 md:pb-8 lg:pb-10">
            Our Patrons, Governing Board and Advisors
            </h2>
            <div className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] border-b-2 sm:border-b-3 md:border-b-4 border-[#FD9D3D]"></div>
          </div>
        </div>
      </div>
        <section>
            <div className="max-w-6xl mx-auto px-6 pb-16">
                <HoverAvatarGallery members={ADVISORY_BOARD} />
            </div>
        </section>
    </>)
}

export default MediaPage;