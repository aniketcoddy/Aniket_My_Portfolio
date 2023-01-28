import React from "react";

export default function ProjectCard() {
  return (
    <div>
    <div className=" w-[482px] h-[193px] bg-[rgba(57,62,70,0.5)] flex flex-row backdrop-blur-sm mb-[20px] mt-[28px]">
      <div className=" w-[233px] h-[193px] flex flex-col  bg-[rgba(57,62,70,0.5)] backdrop-blur-sm ">
        <div>
        <img
          src="test.png"
          className=" w-[201px] h-[120px]"
        />
        <a
            href="/"
            className="flex flex-row items-center mt-[9px] ml-[119px] pt-[3px] pl-[14px] w-[63px] h-[24px] bg-[#00ADB5] rounded-[24px] "
          >
            <h1 className="text-[black] font-[Poppins] font-semibold text-[10px] shadow-[0px 4px 4px rgb(0 0 0 / 0.25)]">
             Git Hub
            </h1>
          </a>
        
        </div>
        <div className="flex flex-row ml-[23px] mt-[9px]  gap-[10px]  ">
          <h1 className="text-[8px] font-medium text-[#EEEEEE] font-[Poppins]  p-1 bg-[rgba(57,62,70,0.5)] border-[0.5px]  border-[white] rounded-[11px]">
            React
          </h1>
          <h1 className="text-[8px] font-medium text-[#EEEEEE] font-[Poppins]  p-1 bg-[rgba(57,62,70,0.5)] border-[0.5px]  border-[white] rounded-[11px]">
            javascript
          </h1>
          <h1 className="text-[8px] font-medium text-[#EEEEEE] font-[Poppins]  p-1 bg-[rgba(57,62,70,0.5)] border-[0.5px]  border-[white] rounded-[11px]">
            html
          </h1>
          <h1 className="text-[8px] font-medium text-[#EEEEEE] font-[Poppins]  p-1 bg-[rgba(57,62,70,0.5)] border-[0.5px]  border-[white] rounded-[11px]">
            css
          </h1>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-[#EEEEEE] text-[24px] font-bold font-[Poppins] ml-[14px] mt-[5px] w-[229px] h-[38px] ">
            Dark Weather
          </h1>
          <h1 className="text-[#EEEEEE] text-[10px] font-medium font-[Poppins] mt-[-15px] ml-[15px] leading-[27px] w-[316px] h-[38px]  ">
            weather app
          </h1>
        </div>
        <div className="flex flex-col">
          <p className="text-[#EEEEEE] text-[12px] font-medium font-[Poppins] mt-[70px] ml-[-317px] w-[284px] h-[38px]">
            Etiquette is the set of norms of personal behaviour in polite
            society, usually occurring in the form of an ethical code of the
            expected .
          </p>
          <a
            href="/"
            className="flex flex-row items-center pt-[0px] pl-[14px] w-[63px] h-[24px] mt-[48px] ml-[-109px] bg-[#00ADB5] rounded-[24px] "
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
