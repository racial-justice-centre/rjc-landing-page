import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Signup: React.FC = () => {
  return (
    <div className="mx-4 sm:mx-6 lg:mx-auto max-w-7xl mb-20 sm:mb-32 lg:mb-40">
      <div className="bg-[#3B0666] h-auto lg:h-[600px] flex flex-col lg:flex-row items-center rounded-2xl sm:rounded-3xl overflow-hidden">
        <div className="w-full lg:w-[70%] h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20">
          <div className="max-w-lg xl:max-w-xl w-full">
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <h1 className="text-[#4ADE80] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[6rem] font-bold text-left mb-4 sm:mb-6 leading-tight">
                SIGN UP
              </h1>
              <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed text-left">
                Stay in touch with what the Racial Justice Centre is up to,
                including cases, events, studies and law reform.
              </p>
            </div>

            <form className="w-full space-y-4 sm:space-y-6" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D5h0000099cIL" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input type="hidden" name="oid" value="00D5h0000099cIL" />
                <input type="hidden" name="retURL" value="https://racialjustice.au/" />
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium block">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4ADE80] focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4ADE80] focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-white text-sm font-medium block">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4ADE80] focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-end">
                <div className="flex-1 space-y-2">
                  <label className="text-white text-sm font-medium block">
                    Post Code
                  </label>
                  <input
                    type="text"
                    name="zip"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4ADE80] focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                    placeholder="Enter your post code"
                    required
                  />
                </div>
                
                <div className="flex-shrink-0 w-full sm:w-auto">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto bg-white text-[#3B0666] font-semibold hover:bg-gray-100 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#3B0666] transition-all duration-200 min-w-[120px] sm:min-w-[140px] px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        <div className="hidden lg:block lg:w-[30%] lg:h-[600px]">
          <Image
            src="/images/signup.png"
            alt="Australian outback landscape"
            width={500}
            height={500}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
