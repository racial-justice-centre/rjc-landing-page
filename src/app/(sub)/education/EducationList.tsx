import ReadMoreButton from "@/components/ReadMoreButton";
import {  ChevronsRight } from "lucide-react";
import Image from "next/image";

const EducationList: React.FC = () => {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Legal Enquiries */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 flex flex-col items-center max-w-2xl lg:max-w-4xl mx-auto">
            <h2 className="w-full sm:w-[85%] md:w-[75%] lg:w-[70%] text-center text-xl sm:text-2xl lg:text-3xl font-bold text-[#35075B] border-b-2 sm:border-b-3 lg:border-b-4 border-[#FD9D3D] pb-4 sm:pb-6 lg:pb-8 mb-4 sm:mb-6 lg:mb-8">
              Law Updates
            </h2>
            <p className="space-y-3 sm:space-y-4 text-[#3B0666] text-lg sm:text-xl lg:text-2xl leading-relaxed text-center underline capitalize font-bold px-2 sm:px-4">
                Human rights choked out by new hate crime laws  
            </p>
            <Image src="/images/education/australian_hate_crime_reforms.png" alt="Human rights choked out by new hate crime laws" width={1000} height={1000} className="w-full" />
            <ReadMoreButton href="files/RJC-Explainer-Hate-Crime-Laws-Part-1-1.pdf" text="Read more" icon={<ChevronsRight className="w-4 h-4" />} />
          </div>

        </div>
      </div>
    );
  };
  
  export default EducationList;