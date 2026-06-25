"use client";

import React from "react";
import Link from "next/link";
import { IoArrowDown } from "react-icons/io5";

const Hero: React.FC = () => {
  const scrollToDonation = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== "/") {
      return;
    }

    const donationSection = document.getElementById("cta");

    if (!donationSection) {
      return;
    }

    event.preventDefault();
    window.history.pushState(null, "", "/#cta");
    donationSection.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <section
        id="hero"
        className="w-full relative overflow-hidden min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px]"
      >
        <div className="w-full relative z-1 filter brightness-40">
          <video
            className="w-full h-auto rjc-landing-heading-hero-video"
            src="video/Conference.mp4"
            autoPlay
            muted
            loop
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 z-2 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(237,231,245,0.18)_18%,#ffffff_100%)]"></div>
        <div className="absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-3 flex w-full max-w-[90%] flex-col items-center text-center md:max-w-[820px]">
          <h1
            style={{ color: "#ffffff" }}
            className="m-0 break-words font-black tracking-tight !text-white text-3xl leading-9 sm:text-4xl sm:leading-[2.75rem] md:text-5xl md:leading-[3.5rem] lg:text-6xl lg:leading-[4.25rem] xl:text-7xl xl:leading-[5.25rem] 2xl:text-8xl 2xl:leading-[6rem] drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]"
          >
            THE RACIAL JUSTICE CENTRE
          </h1>
          <Link
            href="/#cta"
            onClick={scrollToDonation}
            className="mt-5 bg-[#35075B] px-7 py-3 text-base font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-[#4A0D75] sm:mt-6 sm:px-9 sm:py-3.5 sm:text-lg"
          >
            Donate Today
          </Link>
          <IoArrowDown className="mt-3 h-6 w-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] sm:mt-4" aria-hidden="true" />
        </div>
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
