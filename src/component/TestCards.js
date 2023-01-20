import React from "react";

export default function TestCards() {
  return (
    <div className="absolute w-[437px] h-[194px] left-[262px] top-[48px] bg-[rgba(57,62,70,0.5)] flex flex-row backdrop-blur-sm rounded-[20px]">
      <img
        src="991982.png"
        className="w-[73px] h-[71px] left-[30px] top-[-8px] absolute"
      />
      <h1 className="text-[white] text-[12px] font-[Poppins] font-normal left-[29px] top-[47px] w-[393px] h-[50px] absolute">
        A text is a passage of words that conveys a set of meanings to the
        person who is reading it. It's a body of written work, in various forms
        and structures, that can be words, phrases and sentences that piece
        together a passage of written work.
      </h1>

      <div>
      <img src="testimg.jpg" className=" w-[30px] h-[30px] rounded-[40px] left-[29px] top-[150px] absolute"/>
      <h1 className="text-[white] w-[139px] h-[50px] font-[Poppins] text-[12px] font-normal top-[150px] left-[66px] absolute">Jane Cooper</h1>
      <p className="text-[white] w-[139px] h-[50px] text-[8px] font-[Poppins] font-normal top-[168px] left-[66px] absolute">Advertising Designer</p>
      </div>
      </div>
  );
}
