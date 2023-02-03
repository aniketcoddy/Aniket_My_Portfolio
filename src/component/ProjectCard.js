import React from "react";

export default function ProjectCard() {
  return (
    <div>
    <div className=" w-[346px] sm:w-[456px] sm:h-[179px]  h-[175px] bg-[rgba(57,62,70,0.5)] flex flex-row backdrop-blur-sm mb-[20px] ml-[8px] sm:ml-[124px] md:ml-[165px] lg:ml-[314px] xl:ml-[207px] mt-[28px]">
      <div className=" w-[141px] sm:w-[184px] sm:h-[179px] h-[175px] flex flex-col  bg-[rgba(57,62,70,0.5)] backdrop-blur-sm ">
        <div>
        <img
          src="test.png"
          className=" w-[142px] sm:w-[168px] h-[97px]"
        />
        <a
            href="/"
            className="flex flex-row items-center mt-[8px] ml-[74px] sm:ml-[106px] sm:mt-[11px] pt-[3px] pl-[9px] w-[55px] h-[24px] bg-[#00ADB5] rounded-[24px] "
          >
            <h1 className="text-[black] font-[Poppins] font-semibold text-[10px] shadow-[0px 4px 4px rgb(0 0 0 / 0.25)]">
             Git Hub
            </h1>
          </a>
        
        </div>
        <div className="flex flex-row ml-[1px] sm:ml-[6px] mt-[11px] sm:mt-[13px] pr-[3px]  gap-[3px] sm:gap-[8px]  ">
          <h1 className="text-[7px] sm:text-[8px] font-medium text-[#EEEEEE] font-[Poppins]  p-1 bg-[rgba(57,62,70,0.5)] border-[0.5px]  border-[white] rounded-[11px]">
            React
          </h1>
          <h1 className="text-[7px] sm:text-[8px] font-medium text-[#EEEEEE] font-[Poppins]  p-1 bg-[rgba(57,62,70,0.5)] border-[0.5px]  border-[white] rounded-[11px]">
            javascript
          </h1>
          <h1 className="text-[7px] sm:text-[8px] font-medium text-[#EEEEEE] font-[Poppins]  p-1 bg-[rgba(57,62,70,0.5)] border-[0.5px]  border-[white] rounded-[11px]">
            html
          </h1>
          <h1 className="text-[7px] sm:text-[8px] font-medium text-[#EEEEEE] font-[Poppins]  p-1 bg-[rgba(57,62,70,0.5)] border-[0.5px]  border-[white] rounded-[11px]">
            css
          </h1>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-[#EEEEEE] text-[24px] font-bold font-[Poppins] ml-[14px] sm:ml-[10px]  mt-[5px] w-[229px] h-[38px] ">
            Dark Weather
          </h1>
          <h1 className="text-[#EEEEEE] text-[10px] font-medium font-[Poppins] mt-[-15px] ml-[15px] sm:ml-[10px] leading-[27px] w-[349px] h-[38px]  ">
            weather app
          </h1>
        </div>
        <div className="flex flex-col">
          <p className="text-[#EEEEEE] text-[12px] font-medium font-[Poppins] mt-[70px] ml-[-349px] w-[195px] sm:w-[269px] sm:ml-[-347px] h-[38px]">
            Etiquette is the set of norms of personal behaviour in polite
            society, usually occurring in the form of an ethical code of the
            expected .
          </p>
          <a
            href="/"
            className=" absolute flex flex-row items-center pt-[2px] pl-[12px] w-[63px] h-[24px] mt-[105px] ml-[-492px] sm:mt-[142px] sm:ml-[-166px] bg-[#00ADB5] rounded-[24px] "
          >
            <h1 className="text-[black] font-[Poppins] font-semibold text-[10px] shadow-[0px 4px 4px rgb(0 0 0 / 0.25)]">
             Launch
            </h1>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
