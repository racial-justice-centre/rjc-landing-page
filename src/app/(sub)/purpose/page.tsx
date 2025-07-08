import SubpageHero from "@/components/SubpageHero";
import { SubpageHeroProps } from "@/lib/type";
import Container from "@/components/Container";
import Image from "next/image";

const subpageHeroProps: SubpageHeroProps = {
  title: "Our Purpose",
  subtitle:
    "A world where all people can live, thrive and enjoy life, free from racism.",
};

const MediaPage: React.FC = () => {
  return (
    <div>
      <SubpageHero {...subpageHeroProps} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="space-y-8 sm:space-y-16">
          <div className="space-y-4 flex flex-col items-center">
            <h2 className="w-full sm:w-[90%] lg:w-[80%] text-center text-xl sm:text-2xl lg:text-3xl font-bold text-[#35075B] pb-4 sm:pb-8">
              Our purpose is to eliminate racism and racial injustice, using the
              legal system, education and reform.
            </h2>
            <div className="w-[80%] sm:w-[70%] lg:w-[60%] border-b-4 border-[#FD9D3D]"></div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#D9F3DD]">
        <Container>
          <div className="space-y-4 sm:space-y-6 lg:space-y-4 flex flex-col items-center py-12 sm:py-24 lg:py-48">
            {/* Mission Card */}
            <div className="w-full bg-white min-h-[20rem] sm:min-h-[22rem] lg:h-[26rem] flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[30%] h-48 lg:h-auto bg-[#76D181] flex flex-col justify-center items-center">
                <div className="w-[90%] h-[90%] border-4 border-white flex justify-center items-center">
                  <Image
                    src="/images/rjc_icon.png"
                    width={1000}
                    height={1000}
                    alt="Racial Justice Centre Icon"
                    className="w-[20%] sm:w-[15%] lg:w-[30%] aspect-square object-contain"
                  />
                </div>
              </div>
              <div className="w-full lg:w-[70%] flex flex-col justify-start items-start p-6 sm:p-8 lg:p-16 space-y-3 sm:space-y-4 lg:space-y-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl text-[#35075B] font-semibold uppercase">
                  Our
                </h3>
                <h1 className="w-full sm:w-[60%] lg:w-[45%] text-2xl sm:text-3xl lg:text-5xl text-[#765194] font-bold pb-2 sm:pb-3 lg:pb-4 border-b-4 border-[#76D181]">
                  MISSION
                </h1>
                <p className="text-[#35075B] text-base sm:text-lg lg:text-2xl font-semibold leading-relaxed lg:leading-loose">
                  We work to shape and create a world where everyone is treated
                  with dignity and respect, regardless of race, ethnicity,
                  culture or religion.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="w-full bg-white min-h-[20rem] sm:min-h-[22rem] lg:h-[26rem] flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[30%] h-48 lg:h-auto bg-[#765194] flex flex-col justify-center items-center">
                <div className="w-[90%] h-[90%] flex justify-center items-center">
                  <Image
                    src="/images/rjc_icon.png"
                    width={1000}
                    height={1000}
                    alt="Racial Justice Centre Icon"
                    className="w-[20%] sm:w-[15%] lg:w-[30%] aspect-square object-contain"
                  />
                </div>
              </div>
              <div className="w-full lg:w-[70%] flex flex-col justify-start items-start p-6 sm:p-8 lg:p-16 space-y-3 sm:space-y-4 lg:space-y-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl text-[#35075B] font-semibold uppercase">
                  Our
                </h3>
                <h1 className="w-full sm:w-[60%] lg:w-[45%] text-2xl sm:text-3xl lg:text-5xl text-[#765194] font-bold pb-2 sm:pb-3 lg:pb-4 border-b-4 border-[#76D181]">
                  VISION
                </h1>
                <p className="text-[#35075B] text-base sm:text-lg lg:text-2xl font-semibold leading-relaxed lg:leading-loose">
                  A world where all people can live, thrive and enjoy life, free
                  from racial discrimination.
                </p>
              </div>
            </div>

            {/* Values Card */}
            <div className="w-full bg-white min-h-[20rem] flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[30%] h-48 lg:h-auto bg-[url('/images/sub-hero.png')] bg-cover bg-right flex flex-col justify-center items-center">
                <div className="border-4 border-white w-[90%] h-[90%] flex justify-center items-center">
                </div>
              </div>
              <div className="w-full lg:w-[70%] flex flex-col justify-start items-start p-6 sm:p-8 lg:p-16 space-y-3 sm:space-y-4 lg:space-y-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl text-[#35075B] font-semibold uppercase">
                  Our
                </h3>
                <h1 className="w-full sm:w-[60%] lg:w-[45%] text-2xl sm:text-3xl lg:text-5xl text-[#765194] font-bold pb-2 sm:pb-3 lg:pb-4 border-b-4 border-[#76D181]">
                  VALUES
                </h1>
                <ul className="space-y-4 sm:space-y-6 lg:space-y-8 list-disc pl-4 sm:pl-6 pb-6 sm:pb-12 lg:pb-24">
                  <li>
                    <h2 className="text-lg sm:text-xl lg:text-2xl text-[#35075B] font-bold leading-relaxed lg:leading-loose">
                      Equity & Justice
                    </h2>
                    <p className="text-[#35075B] text-sm sm:text-base lg:text-2xl font-normal leading-relaxed lg:leading-loose">
                      We are committed to addressing the root causes of racial
                      inequality and to building systems that are fair and just
                      for all communities.
                    </p>
                  </li>
                  <li>
                    <h2 className="text-lg sm:text-xl lg:text-2xl text-[#35075B] font-bold leading-relaxed lg:leading-loose">Education & Awareness</h2>
                    <p className="text-[#35075B] text-sm sm:text-base lg:text-2xl font-normal leading-relaxed lg:leading-loose">
                      We are committed to addressing the root causes of racial
                      inequality and to building systems that are fair and just
                      for all communities.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MediaPage;
