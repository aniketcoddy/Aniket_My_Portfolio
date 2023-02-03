import React from "react";
import CV from "../Aniket_Vishnoi (React Developer).pdf";
export default function Home() {
  const myStyle = {
    backgroundImage: "url(/Projects.png)",
    marginTop: "67px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className="flex  flex-row  md:h-fit h-fit sm:h-[104vh]  lg:h-fit lg:gap-[80px]  gap-[168px]"
      style={myStyle}
      id="Home"
    >
      <div className="flex flex-col  mt-[203px] ml-[166px] md:ml-[248px] pb-[42px] lg:pb-[139px]  lg:ml-[160px] xl:pb-[173px] xl:mt-[271px] xl:ml-[316px] lg:gap-[5px] gap-[30px] ">
        <div className="flex flex-col sm:ml-[109px] lg:mt-[124px] ">
          <h1 className="text-[#EEEEEE] w-[304px] sm:w-[446px] lg:ml-[-193px] xl:mt-[-216px] lg:text-[59px] lg:w-[543px] xl:text-[74px] xl:w-[618px]  ml-[-132px] mt-[-162px] font-[Poppins] font-bold sm:text-[53px] text-[38px] leading-[96px]">
            Hello, I'm Aniket,
          </h1>
          <h2 className="text-[#00ADB5] lg:ml-[-193px] lg:text-[37px] lg:mt-[-20px] xl:text-[46px] ml-[-95px] text-[27px] mt-[-49px] sm:text-[35px] sm:mt-[-45px] font-[Poppins] font-bold leading-[96px]">
            React Developer
          </h2>
        </div>

        <div>
          <p className="text-[white]  font-[Poppins] text-[13px] lg:w-[428px] lg:mt-[-16px] xl:w-[561px] xl:mt-[-42px] lg:ml-[-85px] lg:text-[15px]  xl:text-[17px] w-[317px] sm:w-[491px] ml-[-130px] mt-[200px] sm:ml-[-41px] sm:mt-[240px] font-normal  ">
          A driven and self-taught web developer looking to use my organisational skills and abilities at your business so that I can advance professionally,
          </p>
        </div>

        <div className=" flex gap-[18px] flex-row ml-[-140px] lg:ml-[-85px] xl:mt-[37px]  lg:mt-[26px] md:mt-[3px] sm:ml-[10px]">
          <a
            href="/"
            className="flex flex-row items-center pt-[1px] pl-[22px] w-[109px] h-[39px] bg-[#00ADB5] rounded-[24px]   hover:bg-[#3b7477] "
          >
            <h1 className="text-[#FFFFFF] font-[Poppins] font-normal text-[17px] shadow-[0px 4px 4px rgb(0 0 0 / 0.25)]">
              Hire Me
            </h1>
          </a>
          <a
            href={CV}
            download
            className="flex flex-row items-center pt-[1px] pl-[20px] w-[180px] h-[39px] bg-[#393E46] rounded-[24px]  hover:bg-[#101b2f]"
          >
            <h1 className="text-[#FFFFFF] font-[Poppins] font-normal text-[15px] w-[116px] shadow-[0px 4px 4px] shadow-[rgb(0 0 0 / 0.25)] ">
              Download CV
            </h1>
            <img
              alt=""
              src="download (1).png"
              className="w-[26px] h-[25px] drop-shadow-[0px 4px 4px rgb(0 0 0 / 0.25)]  "
            />
          </a>
        </div>
      </div>

      <div className="ml-[-428px] mt-[166px] sm:ml-[-573px] xl:mt-[141px] xl:ml-[50px] sm:mt-[186px] lg:mt-[137px] lg:ml-[-40px]">
        <img
          alt=""
          src="me.png.jpg"
          className="w-[199px] h-[247px] lg:w-[302px] lg:h-[420px] sm:w-[221px] sm:h-[276px] rounded-[0.75rem] "
        />
      </div>
    </div>
  );
}
