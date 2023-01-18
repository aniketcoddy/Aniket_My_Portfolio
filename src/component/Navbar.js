import React from "react";

export default function Navbar() {
  return (
    <div className="flex flex-row w-[1536px] h-[58px] left-0 top-0 gap-[69px]  items-center absolute">
      <h1 className="text-[#EEEEEE] text-[28px] left-[71px] relative">
        My Porfolio
      </h1>
      <ul className="flex flex-row gap-[26px]  items-center relative top-[3.5px] left-[60px]">
        <li className="text-[#EEEEEE] text-[17px] font-[Poppins] font-normal">
          Home
        </li>
        <li className="text-[#EEEEEE] text-[17px] font-[Poppins] font-normal">
          About
        </li>
        <li className="text-[#EEEEEE] text-[17px] font-[Poppins] font-normal">
          Services
        </li>
        <li className="text-[#EEEEEE] text-[17px] font-[Poppins] font-normal">
          Portfolio
        </li>
        <li className="text-[#EEEEEE] text-[17px] font-[Poppins] font-normal">
          Contact
        </li>
      </ul>
      <a href="/" className="flex flex-row items-center pt-[10px] pl-[20px] w-[109px] h-[39px] bg-[#00ADB5] rounded-[24px] left-[615px] top-[7px] relative">
        <h2 className="text-[#FFFFFF] text-[18px]  w-[90px] h-[27px]   font-[Roboto] absolute font-normal text-center top-[7px] left-[8px]">
          Lets Talk
        </h2>
      </a>
    </div>
  );
}
