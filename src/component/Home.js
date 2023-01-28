import React from "react";
import CV from "../Aniket_Vishnoi (React Developer).pdf"
export default function Home() {

 
  const myStyle={
    backgroundImage: "url(/Projects.png)",
    height:'91vh',
    marginTop:'-1px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div className="flex  flex-row  w-[1536px]   gap-[168px]" style={myStyle} id="Home">
      <div className="flex flex-col  mt-[203px] ml-[166px] gap-[30px] ">
        <div className="flex flex-col ">
          <h1 className="text-[#EEEEEE] w-[706px] h-[92px] font-[Poppins] font-bold text-[85px] leading-[96px]">
            Hello, I'm Aniket,
          </h1>
          <h2 className="text-[#00ADB5]  w-[586px] h-[63px] font-[Poppins] font-bold text-[50px] leading-[96px]">
            React Developer
          </h2>

        </div>
              
        <div>
          <p className="text-[white] font-[Poppins] text-[16px] font-normal  ">
            Self-taught and motivated web developer seeking to apply my
            organisational skills
            <br /> abilities to your company, where I can learn and grow
            professionally.
          </p>
        </div>

        <div className=" flex gap-[50px] flex-row">
          <a
            href="/"
            className="flex flex-row items-center pt-[1px] pl-[22px] w-[109px] h-[39px] bg-[#00ADB5] rounded-[24px]   hover:bg-[#3b7477] "
          >
            <h1 className="text-[#FFFFFF] font-[Poppins] font-normal text-[17px] shadow-[0px 4px 4px rgb(0 0 0 / 0.25)]">
              Hire Me
            </h1>
          </a>
          <a
            href={CV} download
            className="flex flex-row items-center pt-[1px] pl-[20px] w-[180px] h-[39px] bg-[#393E46] rounded-[24px]  hover:bg-[#101b2f]"
          ><h1 className="text-[#FFFFFF] font-[Poppins] font-normal text-[15px] w-[116px] shadow-[0px 4px 4px] shadow-[rgb(0 0 0 / 0.25)] ">
              Download CV
            </h1>
            <img  alt=""
              src="download (1).png"
              className="w-[26px] h-[25px] drop-shadow-[0px 4px 4px rgb(0 0 0 / 0.25)]  "
            />
          </a>
        </div>
      </div>

      <div className="mt-[171px]">

        <img  alt=""
          src="me.png.jpg"
          className="w-[303px] h-[414px] rounded-[2.75rem] "/>
      </div>
    </div>
  );
}
