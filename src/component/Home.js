import React from "react";
import CV from "../Aniket_Vishnoi (React Developer).pdf"
export default function Home() {

 
  const myStyle={
    backgroundImage: "url(/Projects.png)",
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div className="flex  lg:flex-row flex-col relative w-[363px] lg:w-[1536px] lg:h-[97vh] h-[120vh] mt-[-48px] lg:mt-[-187px]  lg:top-[138px] lg:gap-[300px]" style={myStyle} id="Home">
      <div className="flex flex-col lg:left-[182px] lg:top-[220px] relative lg:gap-[30px] lg:relative ">
        <div className="flex flex-col lg:relative ml-[15px]">
          <h1 className="text-[#EEEEEE] w-[304px] h-[80px] lg:w-[706px] lg:h-[92px] font-[Poppins] font-bold text-[38px] mt-[99px] lg:mt-[0] lg:text-[85px] lg:leading-[96px]">
            Hello, I'm Aniket,
          </h1>
          <h2 className="text-[#00ADB5] h-[34px] lg:w-[586px] lg:h-[63px] font-[Poppins] font-bold text-[30px] leading-[5px] lg:text-[50px] lg:leading-[96px]">
            React Developer
          </h2>

        </div>
              
        <div className="ml-[15px]">
          <p className="text-[white] font-[Poppins] h-[105px] lg:h-[51px] w-[270px] lg:w-[667px] text-[12px] lg:text-[16px] font-normal  lg:relative ">
            Self-taught and motivated web developer seeking to apply my
            organisational skills
             abilities to your company, where I can learn and grow
            professionally.
          </p>
        </div>

        <div className=" flex lg:gap-[19px] ml-[30px] gap-[10px] flex-row">
          <a
            href="/"
            className="flex flex-row items-center pt-[1px] pl-[22px] w-[109px] h-[39px] bg-[#00ADB5] rounded-[24px]  relative hover:bg-[#3b7477] "
          >
            <h1 className="text-[#FFFFFF] font-[Poppins] font-normal text-[17px] shadow-[0px 4px 4px rgb(0 0 0 / 0.25)]">
              Hire Me
            </h1>
          </a>
          <a
            href={CV} download
            className="flex flex-row items-center pt-[1px] pl-[20px] w-[180px] h-[39px] bg-[#393E46] rounded-[24px] relative hover:bg-[#101b2f]"
          ><h1 className="text-[#FFFFFF] font-[Poppins] font-normal text-[15px] w-[116px] shadow-[0px 4px 4px] shadow-[rgb(0 0 0 / 0.25)] ">
              Download CV
            </h1>
            <img  alt=""
              src="download (1).png"
              className="w-[26px] h-[25px] drop-shadow-[0px 4px 4px rgb(0 0 0 / 0.25)] left-[-5px] top-[1px] relative"
            />
          </a>
        </div>
      </div>

      <div className="lg:top-[142px]  lg:right-[12px] mt-[45px] ml-[28px] lg:relative">

        <img  alt=""
          src="me.png.jpg"
          className="w-[303px] h-[414px] rounded-[2.75rem]"
        />
      </div>
    </div>
  );
}
