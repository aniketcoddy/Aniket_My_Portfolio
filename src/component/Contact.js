import React from "react";

export default function Contact() {
  const myStyle = {
    backgroundImage: "url(/Projects.png)",
    height: "100vh",
    marginTop: "-70px",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
    <div
      className="top-[3135px] absolute w-[1535px] h-[500px] "
      style={myStyle}
    >

      <div >
        <div className="flex flex-row gap-[20px] top-[86px] left-[162px] absolute" id="contacts">
          <h1 className='font-[Poppins] text-[60px] text-[#EEEEEE] font-bold'>Contact</h1>
          <h1 className='font-[Poppins] text-[60px] text-[#00ADB5] font-bold'>Me</h1>
        </div>
      <div>
        <img
          src="Group 2372.png"
          className="top-[305px] left-[255px] relative"
        />
      </div>
      </div>
      <div>
        <div className="top-[76px] left-[843px] absolute w-[549px] h-[300px]  gap-[20px] flex flex-col">
          <div className="flex flex-row gap-[20px]">
            <div className="gap-[10px] flex flex-col">
              <h1 className="w-[102px] h-[27px] font-[Poppins] font-normal text-[15px] leading-[27px] text-[#EEEEEE]">
                Your name
              </h1>
              <input
                type="text"
                placeholder="Name"
                className="flex flex-row items-start pl-4 gap-[10px] text-[#EEEEEE] w-[288px] h-[59px] bg-[rgba(57,62,70,0.5)] rounded-[16px] self-stretch"
              />
            </div>
            <div className="gap-[10px] flex flex-col">
              <h1 className="w-[101px] h-[27px] font-[Poppins] font-normal text-[15px] leading-[27px] text-[#EEEEEE]">
                Your email
              </h1>
              <input
                type="text"
                placeholder="Email"
                className="flex flex-row items-start pl-4 gap-[10px] text-[#EEEEEE] w-[288px] h-[59px] bg-[rgba(57,62,70,0.5)] rounded-[16px] self-stretch"
              />
            </div>
          </div>

          <div className="gap-[10px] flex flex-col">
            <h1 className="w-[131px] h-[27px] font-[Poppins] font-normal text-[15px] leading-[27px] text-[#EEEEEE]">
              Your Message
            </h1>
            <input
              type="text"
              placeholder="Message"
              className="flex flex-row items-start pt-[5px] pr-[256px] pb-[222px] pl-[30px] gap-[10px] text-[#EEEEEE] w-[600px] h-[280px] bg-[rgba(57,62,70,0.5)] rounded-[16px] self-stretch"
            />
          </div>

          <div>
            <a
              href="/"
              className="absolute w-[107px] h-[42px] flex flex-col items-center pt-[8px] bg-[#00ADB5] rounded-[24px] pl-[58px] top-[450px] left-[4px]  gap-[10px] "
            >
              <h1 className=" w-[134px] h-[27px] text-[#EEEEEE] leading-[27px] text-[18px] font-semibold">
                Send
              </h1>
              <img src="send.png" className="top-[9px] left-[60px] absolute" />
            </a>
            <div className="flex flex-col top-[530px] left-[10px] absolute gap-[20px]">
              <div className="flex gap-[10px]">
                <img src="telephone.png" />
                <a className="text-[#EEEEEE]">(91)-7302918014</a>
              </div>
              <div className="flex gap-[10px]">
                <img src="mail.png" />
                <a href="/" className="text-[#EEEEEE]">
                  vishnoianiket903@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
