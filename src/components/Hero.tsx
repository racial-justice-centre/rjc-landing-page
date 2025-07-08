import React from "react";

const Hero: React.FC = () => {
  return (
    <>
      <section
        id="hero"
        className="w-full relative overflow-hidden min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px]"
      >
        <div className="w-full relative z-1 filter brightness-40">
          <video
            className="w-full h-auto rjc-landing-heading-hero-video"
            src="https://racialjustice.au/wp-content/uploads/2025/06/Conference.mp4"
            autoPlay
            muted
            loop
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 z-2 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(216,244,240,0.18)_18%,#ffffff_100%)]"></div>
        <h1 className="absolute bottom-[35%] sm:bottom-[40%] md:bottom-[42%] lg:bottom-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-3 text-center m-0 font-bold text-[#765194] max-w-[90%] break-words text-xl leading-7 sm:text-3xl sm:leading-8 md:text-4xl md:leading-10 lg:text-5xl lg:leading-[3.5rem] xl:text-6xl xl:leading-[4rem] 2xl:text-[4rem] 2xl:leading-[50px]">
          THE RACIAL JUSTICE CENTRE
        </h1>
      </section>
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-2xl text-[#35075B] font-normal leading-relaxed sm:leading-relaxed md:leading-relaxed">
          We proudly acknowledge the oldest continuous culture in the world, the
          First Nations people of Australia. We acknowledge sovereignty was
          never ceded. Always was and always will be First Nations Land.
        </h1>
      </div>
    </>
  );
};

export default Hero;
