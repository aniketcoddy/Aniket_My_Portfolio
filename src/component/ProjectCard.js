import React from "react";

export default function ProjectCard() {
  return (
    <div>
    <div className="relative lg:w-[567px] w-[364px] h-[161px] lg:h-[220px] lg:left-[65px] lg:top-[15px] bg-[rgba(57,62,70,0.5)] flex flex-row backdrop-blur-sm mb-[28px] mt-[-7px]">
      <div className="relative lg:w-[233px] w-[157px] h-[161px] lg:h-[220px] left-0 top-0 flex flex-col  bg-[rgba(57,62,70,0.5)] backdrop-blur-sm ">
        <div>
        <img
          src="test.png"
          className="absolute lg:w-[201px] w-[129px] h- [120px] left-[15px] top-[16px]"
        />
        <a
            href="/"
            className="flex flex-row items-center pt-[3px] pl-[14px] w-[63px] h-[24px] bg-[#00ADB5] rounded-[24px] left-[271px] top-[129px] lg:left-[341px] lg:top-[168px]  relative"
          >
            <h1 className="text-[black] font-[Poppins] font-semibold text-[10px] shadow-[0px 4px 4px rgb(0 0 0 / 0.25)]">
             Git Hub
            </h1>
          </a>
        
        </div>
        <div className="flex flex-row lg:top-[167px] lg:left-[39px] mt-[128px] gap-[6px] lg:gap-[10px] absolute ">
          <h1 className="lg:text-[10px] text-[8px] font-medium text-[#EEEEEE] font-[Poppins]  p-1 bg-[rgba(57,62,70,0.5)] border-[0.5px]  border-[white] rounded-[11px]">
            React
          </h1>
          <h1 className="lg:text-[10px] text-[8px] font-medium text-[#EEEEEE] font-[Poppins]  p-1 bg-[rgba(57,62,70,0.5)] border-[0.5px]  border-[white] rounded-[11px]">
            javascript
          </h1>
          <h1 className="lg:text-[10px] text-[8px] font-medium text-[#EEEEEE] font-[Poppins]  p-1 bg-[rgba(57,62,70,0.5)] border-[0.5px]  border-[white] rounded-[11px]">
            html
          </h1>
          <h1 className="lg:text-[10px] text-[8px] font-medium text-[#EEEEEE] font-[Poppins]  p-1 bg-[rgba(57,62,70,0.5)] border-[0.5px]  border-[white] rounded-[11px]">
            css
          </h1>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col gap-[10px] mt-[6px] ml-[12px]">
          <h1 className="text-[#EEEEEE] text-[24px] font-bold font-[Poppins] leading-[27px] w-[229px] h-[38px] lg:top-[10px] absolute lg:left-[264px]  ">
            Dark Weather
          </h1>
          <h1 className="text-[#EEEEEE] mt-[23px] text-[10px] font-medium font-[Poppins] leading-[27px] w-[316px] h-[38px] lg:top-[13px] absolute lg:left-[441px]   ">
            weather app
          </h1>
        </div>
        <div className="flex flex-col">
          <p className="text-[#EEEEEE] text-[8px] lg:text-[12px] mt-[52px] font-medium font-[Poppins] leading-[21px] w-[193px] lg:w-[284px] h-[38px] lg:top-[55px] absolute lg:left-[264px]">
            Etiquette is the set of norms of personal behaviour in polite
            society, usually occurring in the form of an ethical code of the
            expected .
          </p>
          <a
            href="/"
            className="flex flex-row items-center pt-[0px] mt-[] pl-[14px] w-[63px] h-[24px] bg-[#00ADB5] rounded-[24px] left-[13px] top-[129px] lg:left-[31px] lg:top-[168px]  relative"
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
