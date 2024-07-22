import React from "react";
import Image from "next/image";
import Img from "./img.svg";
import WaitlistForm from "../component/WaitlistForm";
import Marquee from "../component/Marquee";
import ShineBorder from "../component/shineBorder";

const Page = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Image src="/Bg-coming-soon.svg" alt="background" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col items-center justify-center h-screen pt-[7vh] lg:pt-[5vh]">
        <div className="flex flex-col items-center justify-center h-full w-full gap-4 p-8">
          <ShineBorder />
          <div className="flex flex-col items-center justify-center gap-3 text-center pt-[1rem] lg:pt-5">
            <img
              className="h-[41px] w-[153px] pb-0"
              loading="lazy"
              alt="Seekstyle Logo"
              src="seekstyle-logo.svg"
            />
            <div className="flex flex-col gap-3 max-w-[350px] lg:max-w-[34rem] items-center justify-center pt-7 lg:pt-0">
              <p className="custom-text-color custom-font-family lg:text-[32px] text-[24px] font-normal leading-tight">
                Transform Your Shopping with Image Search <br className="lg:hidden" />- Join Seekstyle Early
                Access!
              </p>
              <p className="w-[382.34px] lg:w-[641.288px] custom-text-color-01 custom-font-family-01 text-[12px] lg:text-[15.5px] font-normal leading-tight mb-3">
                Be the first to experience our cutting-edge image search
                technology. <br className="hidden lg:flex"/>Snap a photo or upload an image to find your perfect
                style from multiple stores effortlessly. Sign up now and
                transform the way you shop!
              </p>
            </div>
            <div className="">
              <WaitlistForm />
              <p className="custom-font-family text-[12px] mt-3 ">
                      Get a FREE 6 Months of all our Pro Features
                    </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 mt-[2rem] lg:mt-0">
            <div className="flex flex-col items-center gap-1 text-center mt-2 w-[283px]">
              <h1 className="text-[#1B243F] custom-font-family text-[24px] font-medium">
                Featured brands & stores
              </h1>
              <p className="text-[#646D80] custom-font-family-01 text-[11.2px] font-normal mb-4 w-[283px]">
                Get Exclusive deals from this brands only on seekstyle
              </p>
            </div>
            <Marquee />
          </div>
          <p className="text-[#646D80] custom-font-family-01 text-sm italic font-normal mt-[1rem] lg:mt-0">
            and a lot more local & Int’l brands coming in...
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;

