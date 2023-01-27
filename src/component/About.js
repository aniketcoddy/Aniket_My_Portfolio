import React from "react";

export default function About() {
  return (
    <div className=" lg:top-[849px] lg:absolute h-[601px] lg:w-[1528px] gap-[36px] flex flex-col lg:flex lg:flex-row" id="About">
      <div className=" lg:absolute h-[500px] lg:gap-[36px] flex flex-col left-[102px] top-[11px]">
        <div className="flex flex-row ml-[44px] lg:gap-[15px]">
          <h1 className="lg:absolute w-[194px] mt-[13px] lg:w-[322px]  h-[105px] lg:h-[96px] text-[#EEEEEE] lg:left-[96px] lg:top-[26px] font-[Poppins] font-bold text-[64px] lg:leading-[96px] ">
            About
          </h1>
          <h1 className="w-[322px] h-[96px] mt-[13px] text-[#00ADB5] lg:left-[310px] lg:top-[26px] font-[Poppins] font-bold text-[64px] lg:leading-[96px]  lg:absolute">
            me
          </h1>
        </div>

        <div>
          <p className="lg:w-[389px] lg:h-[189px] ml-[18px] w-[330px] text-[#EEEEEE] lg:left-[96px] lg:top-[126px] font-[Poppins] font-normal text-[16px] lg:leading-[27px]  lg:absolute">
            I have a BTech in computer science and presently work as a React
            developer.I am skilled at designing, structuring, and creating
            fantastic websites, including e-commerce, business, portfolio,
            personal, and many more. I am also always looking to learn and
            explore new web development techniques.
          </p>
        </div>

        <div className="flex flex-col gap-[24px] ">
          <div>
            <h1 className="lg:w-[322px] h-[64px] lg:h-[96px] text-[#00ADB5] font-[Poppins] font-bold text-[39px] mt-[276px] ml-[98px] leading-[96px]  lg:absolute">
              My Skills
            </h1>
          </div>
          <div className="flex flex-row ml-[34px] lg:top-[381px] lg:left-[100px] lg:relative lg:gap-[10px]">
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

      <div className="mt-[-240px]">
        <img alt=""
          src="doodle items.png"
          className="relative w-[370px] lg:w-[665.33px] lg:h-[499px] lg:left-[763px] lg:top-[1px]"
        />
        <img alt=""
          src="Group 62.png"
          className="relative lg:w-[412.68px] ml-[52px] mt-[-250px] w-[270px] lg:h-[353.14px] lg:left-[871px] lg:top-[-287.7px]"
        />
      </div>

      <div className="hidden lg:visible">
        <img  alt=""src="lightbulb.png" className="w-[57.33px] h-[88.16px] top-[55px] left-[-162px]   relative" />
        <img  alt=""src="vector 141.png" className="w-[61.54px] h-[46.57px] top-[138px] left-[-625px] relative" />
        <img  alt=""src="vector 186.png" className="w-[112.72px] h-[116.89px] top-[191px] left-[-238px] relative " />
      </div>
      <div className="hidden lg:block">
        <img  alt=""src="lightbulb.png" className="w-[57.33px] h-[88.16px] top-[55px] left-[-162px]   relative" />
        <img  alt=""src="vector 141.png" className="w-[61.54px] h-[46.57px] top-[138px] left-[-625px] relative" />
        <img  alt=""src="vector 186.png" className="w-[112.72px] h-[116.89px] top-[191px] left-[-238px] relative " />
      </div>
    </div>
  );
}
