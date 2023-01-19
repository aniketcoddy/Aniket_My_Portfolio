import React from "react";

export default function Home() {

  const myStyle={
    backgroundImage: "url(/Projects.png)",
    height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div className="flex  flex-row absolute w-[1536px] h-[688px]  top-[65px] gap-[300px]" style={myStyle}>
      <div className="flex flex-col left-[182px] top-[220px] gap-[30px] relative">
        <div className="flex flex-col relative">
          <h1 className="text-[#EEEEEE] w-[706px] h-[92px] font-[Poppins] font-bold text-[85px] leading-[96px]">
            Hello, I'm Aniket,
          </h1>
          <h2 className="text-[#00ADB5]  w-[586px] h-[63px] font-[Poppins] font-bold text-[50px] leading-[96px]">
            React Developer
          </h2>

        </div>
              
        <div>
          <p className="text-[white] font-[Poppins] text-[16px] font-normal relative ">
            Self-taught and motivated web developer seeking to apply my
            organisational skills
            <br /> abilities to your company, where I can learn and grow
            professionally.
          </p>
        </div>

        <div className="relative flex gap-[50px] flex-row">
          <a
            href="/"
            className="flex flex-row items-center pt-[1px] pl-[22px] w-[109px] h-[39px] bg-[#00ADB5] rounded-[24px]  relative"
          >
            <h1 className="text-[#FFFFFF] font-[Poppins] font-normal text-[17px] shadow-[0px 4px 4px rgb(0 0 0 / 0.25)]">
              Hire Me
            </h1>
          </a>
          <a
            href="/"
            className="flex flex-row items-center pt-[1px] pl-[20px] w-[180px] h-[39px] bg-[#393E46] rounded-[24px] relative "
          >
            <h1 className="text-[#FFFFFF] font-[Poppins] font-normal text-[15px] w-[116px] shadow-[0px 4px 4px] shadow-[rgb(0 0 0 / 0.25)]">
              Download CV
            </h1>
            <img  alt=""
              src="download (1).png"
              className="w-[26px] h-[25px] drop-shadow-[0px 4px 4px rgb(0 0 0 / 0.25)] left-[-5px] top-[1px] relative"
            />
          </a>
        </div>
      </div>

      <div className="top-[142px]  right-[12px] mr-0 relative">

        <img  alt=""
          src="me.png.jpg"
          className="w-[303px] h-[414px] rounded-[2.75rem] relative top-[34px]"
        />
      </div>
    </div>
  );
}
