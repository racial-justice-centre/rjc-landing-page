import ReadMoreButton from "@/components/ReadMoreButton";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";

const WorkList: React.FC = () => {
  return (
    <section>
      <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:py-16 bg-[#F1D6CB]">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16 mx-auto max-w-2xl lg:max-w-4xl">
          {/* Legal Enquiries */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 flex flex-col items-center">
            <h2 className="w-full sm:w-[85%] lg:w-[70%] text-center text-xl sm:text-2xl lg:text-3xl font-bold text-[#35075B] border-b-2 sm:border-b-4 border-[#FD9D3D] pb-4 sm:pb-6 lg:pb-8 mb-4 sm:mb-6 lg:mb-8">
              Explanation & Commentary
            </h2>
            <p className="space-y-3 sm:space-y-4 text-[#3B0666] text-lg sm:text-xl lg:text-2xl leading-relaxed text-center underline capitalize font-bold px-4 sm:px-0">
              Review of NSW Anti-Discrimination Law
            </p>
            <Image
              src="/images/work/review_of_NSW_anti_discrimination_law.png"
              alt="Review of NSW Anti-Discrimination Law"
              width={1000}
              height={1000}
              className="w-full max-w-2xl lg:max-w-4xl"
            />
            <ReadMoreButton href="files/PAD63.pdf" text="Read more" icon={<ChevronsRight className="w-4 h-4" />} />
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16 max-w-6xl mx-auto w-full sm:w-[85%] lg:w-[70%]">
          {/* Legal Enquiries */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 flex flex-col items-center  max-w-2xl lg:max-w-4xl mx-auto">
            <p className="space-y-3 sm:space-y-4 text-[#3B0666] text-lg sm:text-xl lg:text-2xl leading-relaxed text-center underline capitalize font-bold px-4 sm:px-0">
            Review into an appropriate cost model for Commonwealth anti-discrimination laws 
            </p>
            <Image
              src="/images/work/review_for_anti_discrimination_laws.png"
              alt="Review of NSW Anti-Discrimination Law"
              width={1000}
              height={1000}
              className="w-full"
            />
            <ReadMoreButton href="/files/Racial-Justice-Centres-Cost-model-for-Cth-anti-discrimination-laws-review-8.4.23.pdf" text="Read more" icon={<ChevronsRight className="w-4 h-4" />} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkList;
