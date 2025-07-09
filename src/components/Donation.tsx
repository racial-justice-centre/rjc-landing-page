import React from "react";
import RaiselyForm from "./RaiselyForm";

const Donation: React.FC = () => {

  return (
    <section
      id="cta"
      className="bg-[#dd9f85] mb-20 md:mb-32 lg:mb-40 flex flex-col lg:flex-row items-center rounded-2xl md:rounded-3xl mx-4 sm:mx-6 lg:mx-auto max-w-7xl mt-40"
    >
      <div className="flex flex-col items-center justify-start flex-1 bg-[url('/images/donate/rona.png')] bg-cover bg-center lg:bg-top rounded-t-2xl md:rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none h-[550px] sm:h-[600px] md:h-[650px] lg:h-[600px] w-full relative">
        {/* Overlay for better text readability on mobile */}
        <div className="absolute inset-0 bg-black/10 rounded-t-2xl md:rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"></div>

        <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 sm:px-8 md:px-12 lg:px-24">
          <h1 className="mt-10 text-[#3B0666] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left leading-tight">
            DONATIONS
          </h1>
          <p className="text-[#CF7650] text-center lg:text-left text-base sm:text-lg md:text-xl font-bold mt-4 sm:my-6 md:mt-8 lg:mt-10 leading-tight max-w-md lg:max-w-none">
            Your donations ensure everyone has equal access to justice.
          </p>
        </div>
      </div>

      <div className="flex-1 w-full sm:h-[750px] md:h-[750px] lg:h-[600px] flex flex-col justify-center">
        <RaiselyForm />
        <p className="self-center w-[80%] text-white text-center text-sm sm:text-base md:text-lg lg:text-xl font-bold sm:my-2 md:mt-8 lg:mt-10 leading-tight max-w-md lg:max-w-none">
          We are a Deductible Gift Recipient. All donations over $2 are tax
          deductible.
        </p>
      </div>
    </section>
  );
};

export default Donation;
