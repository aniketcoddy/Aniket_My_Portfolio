import React from "react";

export default function About() {
  return (
    <div className="   h-[601px] w-[1528px] flex flex-row" id="About">
      <div className="  h-[500px] gap-[7px] mt-[123px] ml-[186px] flex flex-col  ">
        <div className="flex flex-row ml-[-3px] mt-[86px] gap-[15px]">
          <h1 className=" w-[216px] h-[96px] text-[#EEEEEE]  font-[Poppins] font-bold text-[64px] leading-[96px] ">
            About
          </h1>
          <h1 className="w-[322px] h-[96px] text-[#00ADB5]  font-[Poppins] font-bold text-[64px] leading-[96px]  ">
            me
          </h1>
        </div>

        <div>
          <p className="w-[389px] h-[189px] text-[#EEEEEE] font-[Poppins] font-normal text-[16px] leading-[27px]  ">
            I have a BTech in computer science and presently work as a React
            developer.I am skilled at designing, structuring, and creating
            fantastic websites, including e-commerce, business, portfolio,
            personal, and many more. I am also always looking to learn and
            explore new web development techniques.
          </p>
        </div>

        <div className="flex flex-col gap-[24px] ">
          <div>
            <h1 className="w-[322px] h-[96px] text-[#00ADB5] font-[Poppins] font-bold text-[39px] leading-[96px]  ">
              My Skills
            </h1>
          </div>
          <div className="flex flex-row   gap-[10px]">
            <img  alt=""src="React-icon.svg.png" className="w-[42px] h-[42px]"/>
            <img  alt=""src="redux.png" className="w-[42px] h-[42px]" />
            <img  alt=""src="Git.png" className="w-[42px] h-[42px]" />
            <img  alt=""src="JS.png" className="w-[42px] h-[42px]" />
            <img  alt=""src="html.png" className="w-[42px] h-[42px]" />
            <img  alt=""src="Tailwind.png" className="w-[42px] h-[42px]" />
            <img  alt=""src="Visual.png" className="w-[42px] h-[42px]" />
          </div>
        </div>
      </div>

      <div className="mt-[206px]">
        <img alt=""
          src="doodle items.png"
          className=" w-[1243.33px] h-[499px] "
        />
        <img alt=""
          src="Group 62.png"
          className=" w-[480.6px] h-[428.14px] mt-[-380px] ml-[79px]"
        />
      </div>
    </div>
  );
}
