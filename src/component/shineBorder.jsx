

import ShineBorder from "@/components/magicui/shine-border";

const shineBorder = () => {
  
  return (
    <ShineBorder
    className="flex  justify-center items-center 
    gap-2.5 rounded-full  custom-opacity bg-gray-500/10 max-w-[90vw] "
    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
  >
    {/* <p className="custom-font-family-01 font-medium text-[12px] flex items-center justify-center">
    AI thinks about your next fit for you ・ Get the best Deals ・ Make
    money doing what you Love
    </p> */}
 
  </ShineBorder>
  );
}
export default shineBorder