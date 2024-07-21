// import React from "react";
// import Image from "next/image";
// import Img from "./img.svg";
// import WaitlistForm from "../component/WaitlistForm";
// import Marquee from "../component/Marquee";
// import ShineBorder from "../component/shineBorder"

// const page = () => {
//   return (
//     <>
//       <div className="fixed inset-0 -z-10 -m-[4rem]">
//         <Image src={Img} alt="background" layout="fill" objectFit="cover" />
//       </div>
//       <div className="flex flex-col items-center justify-center">
//         <div className="flex flex-col items-center justify-center pt-[20vh] gap-[4rem]">
   
//           <ShineBorder />
//           <div className="flex flex-col items-center justify-center gap-5">
//             <img
//               className="h-[41px] w-[153px]"
//               loading="lazy"
//               alt=""
//               src="seekstyle-logo.svg"
//             />
//             <div className="flex flex-col gap-4">
//               <p className="custom-text-color text-center custom-font-family text-[32px] font-normal leading-[1.4] w-[630.973px]">
//                 Transform Your Shopping with Image Search - Join Seekstyle Early
//                 Access!
//               </p>
//               <p className="custom-text-color-01 text-center custom-font-family-01 text-base font-normal leading-[1.4] w-[641.288px]">
//                 Be the first to experience our cutting-edge image search
//                 technology.
//                 <br />
//                 Snap a photo or upload an image to find your perfect style from
//                 multiple stores effortlessly. Sign up now and transform the way
//                 you shop!
//               </p>
//             </div>
//             <WaitlistForm />
//           </div>
//           <div className="flex flex-col items-center gap-[32px]">
//             <div className="flex flex-col items-center gap-2">
//               <h1 className="text-[#1B243F] text-center custom-font-family text-[24px] font-medium leading-normal">
//                 Featured brands & stores
//               </h1>
//               <p className="text-[#646D80] text-center custom-font-family-01 text-[12px] font-normal leading-[1.4]">
//                 Get Exclusive deals from this brands only on seekstyle
//               </p>
//             </div>
//             <Marquee />
//           </div>
//         </div>
//         <p className="text-[#646D80] text-center custom-font-family-01 text-[12px] italic font-normal leading-[1.4] pt-5">
//           and a lot more local & Int’l brands coming in...
//           </p>
//       </div>
//     </>
//   );
// };

// export default page;


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
        <Image src={Img} alt="background" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col items-center justify-center h-screen pt-[10vh]">
        <div className="flex flex-col items-center justify-center h-full w-full gap-4 p-8">
          <ShineBorder />
          <div className="flex flex-col items-center justify-center gap-3 text-center pt-6">
            <img
              className="h-[41px] w-[153px]"
              loading="lazy"
              alt="Seekstyle Logo"
              src="seekstyle-logo.svg"
            />
            <div className="flex flex-col gap-3 max-w-lg items-center justify-center">
              <p className="custom-text-color custom-font-family text-[30px] font-normal leading-tight">
                Transform Your Shopping with Image Search - Join Seekstyle Early
                Access!
              </p>
              <p className="w-[642px] custom-text-color-01 custom-font-family-01 text-[16px] font-normal leading-tight mb-3">
                Be the first to experience our cutting-edge image search
                technology. <br />Snap a photo or upload an image to find your perfect
                style from multiple stores effortlessly. Sign up now and
                transform the way you shop!
              </p>
            </div>
            <WaitlistForm />
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-center gap-1 text-center mt-2">
              <h1 className="text-[#1B243F] custom-font-family text-xl font-medium">
                Featured brands & stores
              </h1>
              <p className="text-[#646D80] custom-font-family-01 text-[14px] font-normal mb-4">
                Get Exclusive deals from these brands only on Seekstyle
              </p>
            </div>
            <Marquee />
          </div>
          <p className="text-[#646D80] custom-font-family-01 text-sm italic font-normal">
            and a lot more local & Int’l brands coming in...
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;

