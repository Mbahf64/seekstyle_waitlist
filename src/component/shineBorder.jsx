

import ShineBorder from "@/components/magicui/shine-border";

const shineBorder = () => {
  
  return (
    <ShineBorder
    className="inline-flex px-6 py-1.5 justify-center items-center gap-2.5 rounded-full  custom-opacity bg-gray-500/10"
    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
  >
    <span className="font-[inter] font-[500px] text-[14px]">
    AI thinks about your next fit for you ・ Get the best Deals ・ Make
    money doing what you Love
    </span>
  </ShineBorder>
  );
}
export default shineBorder