import React from "react";

export default function About() {
  return (
    <div className="   h-[601px] w-[1528px] flex flex-col" id="About">
      <div className="  h-[500px]  mt-[-35px] md:mt-[-231px] sm:ml-[29px] lg:mt-[-193px] lg:ml-[61px] ml-[13px] flex flex-col  ">
        <div className="flex flex-row ml-[53px] mt-[86px] md:mt-[309px] md:ml-[20px] xl:ml-[111px] xl:gap-[84px] gap-[15px]">
          <h1 className=" w-[144px] h-[96px] text-[#EEEEEE]  font-[Poppins] font-bold text-[45px] xl:text-[66px] leading-[96px] ">
            About
          </h1>
          <h1 className="w-[322px] h-[96px] text-[#00ADB5]  font-[Poppins] font-bold text-[45px] xl:text-[66px] leading-[96px]  ">
            me
          </h1>
        </div>

        <div>
          <p className="w-[341px] md:w-[341px] sm:w-[583px] justify-center md:ml-[21px] xl:mt-[19px] xl:ml-[65px] xl:text-[16px] xl:w-[459px] h-[189px] text-[#EEEEEE] font-[Poppins] font-normal text-[14px] leading-[27px]  ">
            I have a BTech in computer science and presently work as a React
            developer.I am skilled at designing, structuring, and creating
            fantastic websites, including e-commerce, business, portfolio,
            personal, and many more. I am also always looking to learn and
            explore new web development techniques.
          </p>
        </div>

        <div className="flex flex-col mt-[347px] xl:ml-[71px] xl:mt-[335px] sm:ml-[116px] sm:mt-[290px] md:ml-[185px] md:mt-[356px]  gap-[24px] ">
          <div className="mt-[-32px] md:mt-[-315px]">
            <h1 className="w-[322px] h-[96px] ml-[88px] md:ml-[30px] mt-[-9px] text-[#00ADB5] font-[Poppins] font-bold text-[39px] leading-[96px]  ">
              My Skills
            </h1>
          </div>
          <div className="flex flex-row ml-[15px] mt-[-28px]">
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

      <div className="ml-[19px] mt-[-77px] md:ml-[403px] sm:ml-[163px] sm:mt-[-180px] lg:ml-[595px] lg:mt-[-145px] xl:ml-[706px] xl:mt-[-181px]">
        <img alt=""
          src="doodle items.png"
          className=" w-[326px] lg:w-[469px] h-[262px] lg:h-[360px] xl:w-[634px] xl:h-[446px] "
        />
        <img alt=""
          src="Group 62.png"
          className=" w-[278px] ml-[45px] mt-[-229px] h-[232px] lg:w-[388px] lg:h-[314px] lg:mt-[-279px] xl:w-[469px] xl:h-[385px] xl:mt-[-355px] "
        />
      </div>
    </div>
  );
}
