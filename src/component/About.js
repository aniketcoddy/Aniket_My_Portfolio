import React from "react";

export default function About() {
  return (
    <div className=" top-[849px] absolute h-[601px] w-[1528px] gap-[36px] flex flex-row">
      <div className=" absolute h-[500px] gap-[36px] flex flex-col left-[102px] top-[11px]">
        <div className="flex flex-row gap-[15px]">
          <h1 className="absolute w-[322px] h-[96px] text-[#EEEEEE] left-[96px] top-[26px] font-[Poppins] font-bold text-[64px] leading-[96px] ">
            About
          </h1>
          <h1 className="w-[322px] h-[96px] text-[#00ADB5] left-[310px] top-[26px] font-[Poppins] font-bold text-[64px] leading-[96px]  absolute">
            me
          </h1>
        </div>

        <div>
          <p className="w-[389px] h-[189px] text-[#EEEEEE] left-[96px] top-[126px] font-[Poppins] font-normal text-[16px] leading-[27px]  absolute">
            I have a BTech in computer science and presently work as a React
            developer.I am skilled at designing, structuring, and creating
            fantastic websites, including e-commerce, business, portfolio,
            personal, and many more. I am also always looking to learn and
            explore new web development techniques.
          </p>
        </div>

        <div className="flex flex-col gap-[24px] ">
          <div>
            <h1 className="w-[322px] h-[96px] text-[#00ADB5] left-[95px] top-[367px] font-[Poppins] font-bold text-[39px] leading-[96px]  absolute">
              My Skills
            </h1>
          </div>
          <div className="flex flex-row top-[381px] left-[100px] relative gap-[10px]">
            <img  alt=""src="React-icon.svg.png" className="w-[42px] h-[42px]" />
            <img  alt=""src="redux.png" className="w-[42px] h-[42px]" />
            <img  alt=""src="Git.png" className="w-[42px] h-[42px]" />
            <img  alt=""src="JS.png" className="w-[42px] h-[42px]" />
            <img  alt=""src="html.png" className="w-[42px] h-[42px]" />
            <img  alt=""src="Tailwind.png" className="w-[42px] h-[42px]" />
            <img  alt=""src="Visual.png" className="w-[42px] h-[42px]" />
          </div>
        </div>
      </div>

      <div>
        <img alt=""
          src="doodle items.png"
          className="relative w-[665.33px] h-[499px] left-[763px] top-[1px]"
        />
        <img alt=""
          src="Group 62.png"
          className="relative w-[412.68px] h-[353.14px] left-[871px] top-[-287.7px]"
        />
      </div>

      <div>
        <img  alt=""src="lightbulb.png" className="w-[57.33px] h-[88.16px] top-[55px] left-[-162px]   relative" />
        <img  alt=""src="vector 141.png" className="w-[61.54px] h-[46.57px] top-[138px] left-[-625px] relative" />
        <img  alt=""src="vector 186.png" className="w-[112.72px] h-[116.89px] top-[191px] left-[-238px] relative " />
      </div>
    </div>
  );
}
